import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux-hooks";
import { useActions } from "../hooks/useActions";
import { Navbar } from "../components/Navbar";
import { AddLinkForm } from "../components/AddLinkForm";
import { Pagination } from "../components/Pagination";
import { PaginationNextPage } from "../components/PaginationNextPage";
import { Table } from "../components/Table/Table";

const MainPage = () => {
  const [text, setText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [order, setOrder] = useState("desc_counter");

  const { links, loading, error } = useAppSelector((state) => state.links);
  const { access_token } = useAppSelector((state) => state.user);

  const { getLinks, addNewLink } = useActions();

  const handleAddNewLink = () => {
    addNewLink([text, access_token]);
    setText("");
  };

  const memoLinks = useCallback(() => {
    getLinks([access_token, currentPage, order]);
  }, [access_token, currentPage, order]);

  useEffect(() => memoLinks(), [memoLinks]);

  return (
    <>
      <Navbar title="Main Page" />
      <AddLinkForm
        value={text}
        updateText={setText}
        handleAction={handleAddNewLink}
      />

      {currentPage === 0 ? (
        <PaginationNextPage nextPage={() => setCurrentPage(currentPage + 1)} />
      ) : (
        <Pagination
          nextPage={() => setCurrentPage(currentPage + 1)}
          prevPage={() => setCurrentPage(currentPage - 1)}
          firstPage={() => setCurrentPage(0)}
        />
      )}

      {loading ? (
        <div className="loader" />
      ) : (
        <Table
          links={links}
          currentPage={currentPage}
          filterCounterDesc={() => setOrder("desc_counter")}
          filterCounterAsc={() => setOrder("asc_counter")}
          filterTargetDesc={() => setOrder("desc_target")}
          filterTargetAsc={() => setOrder("asc_target")}
          filterShortDesc={() => setOrder("desc_short")}
          filterShortAsc={() => setOrder("asc_short")}
        />
      )}
      {!links.length && !loading && (
        <h1 className="error">Ошибка загрузки: {error}</h1>
      )}
    </>
  );
};

export default MainPage;
