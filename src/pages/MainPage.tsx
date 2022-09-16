import { useCallback, useEffect, useState } from "react";
import { TableStat } from "../components/Table/TableStat";
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

  const { links, loading, error } = useAppSelector((state) => state.links);
  const { access_token } = useAppSelector((state) => state.user);

  const { getLinks, addNewLink } = useActions();

  const handleAddNewLink = () => {
    addNewLink([text, access_token]);
    setText("");
  };

  const memoLinks = useCallback(() => {
    getLinks([access_token, currentPage]);
  }, [access_token, currentPage]);

  useEffect(() => memoLinks(), [memoLinks]);

  const filter = (field: string | number) => {
    const copy = [...links];

    copy.sort((a, b) => a[field] > b[field]?1:-1);
  };

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
        <Table links={links} currentPage={currentPage} filter={filter} />
      )}
      {!links.length && <h1 className="error">Ошибка загрузки</h1>}
    </>
  );
};

export default MainPage;
