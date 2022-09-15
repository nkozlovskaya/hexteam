import { useCallback, useEffect, useState } from "react";
import { TableStat } from "../components/TableStat";
import { useAppSelector } from "../hooks/redux-hooks";
import { useActions } from "../hooks/useActions";
import { Navbar } from "../components/Navbar";
import { AddLinkForm } from "../components/AddLinkForm";
import { Pagination } from "../components/Pagination";

const MainPage = () => {
  const filter = () => {};

  const [text, setText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { links, loading, error } = useAppSelector((state) => state.links);
  const { access_token } = useAppSelector((state) => state.user);

  const { getLinks, addNewLink } = useActions();

  const handleAddNewLink = () => {
    addNewLink([text, access_token]);
    setText("");
  };

  const nextPage = () => setCurrentPage((currentPage) => currentPage + 1);
  const prevPage = () => setCurrentPage((currentPage) => currentPage - 1);

  const memoLinks = useCallback(
    () => getLinks([access_token, currentPage]),
    [getLinks, access_token, currentPage]
  );

  useEffect(() => {
    memoLinks();
    // eslint-disable-next-line
  }, []);

  if (loading) return <div className="loader" />;
  if (error) return <h1 className="error">Ошибка загрузки</h1>;
  return (
    <>
      <Navbar title="Main Page" />
      <AddLinkForm
        value={text}
        updateText={setText}
        handleAction={handleAddNewLink}
      />
      <Pagination nextPage={nextPage} prevPage={prevPage} />
      <table className="table">
        <thead>
          <tr>
            <th>№</th>
            <th onClick={filter}>Short</th>
            <th onClick={filter}>Target</th>
            <th onClick={filter}>Counter</th>
          </tr>
        </thead>
        <tbody>
          {links.map((data) => {
            return <TableStat key={data.id} {...data} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default MainPage;
