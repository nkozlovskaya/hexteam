import { useEffect, useState } from "react";
import { TableStat } from "../components/TableStat";
import { useAppSelector } from "../hooks/redux-hooks";
import { useActions } from "../hooks/useActions";
import { Navbar } from "../components/Navbar";
import { AddLinkForm } from "../components/AddLinkForm";
import { Pagination } from "../components/Pagination";

const MainPage = () => {
  const filter = () => {};

  const [text, setText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const { links, loading, error } = useAppSelector((state) => state.links);
  const { access_token } = useAppSelector((state) => state.user);

  const { getLinks, addNewLink } = useActions();

  const handleAddNewLink = () => {
    addNewLink([text, access_token]);
    setText("");
  };

  // const memoLinks = useCallback(

  // );

  useEffect(() => {
    getLinks([access_token, currentPage]);
  }, [access_token, currentPage]);

  return (
    <>
      <Navbar title="Main Page" />
      <AddLinkForm
        value={text}
        updateText={setText}
        handleAction={handleAddNewLink}
      />
      <Pagination
        nextPage={() => setCurrentPage(currentPage + 1)}
        prevPage={() => setCurrentPage(currentPage - 1)}
        firstPage={() => setCurrentPage(0)}
      />
      {loading ? (
        <div className="loader" />
      ) : (
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
              return (
                <TableStat
                  key={data.id}
                  {...data}
                  index={links.indexOf(data)}
                  curPage={currentPage}
                />
              );
            })}
          </tbody>
        </table>
      )}
      {error && <h1 className="error">Ошибка загрузки</h1>}
    </>
  );
};

export default MainPage;
