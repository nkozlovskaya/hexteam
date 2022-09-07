import { useCallback, useEffect } from "react";
import { TableStat } from "../components/TableStat";
import { useAppSelector } from "../hooks/redux-hooks";
import { useActions } from "../hooks/useActions";

const MainPage = () => {
  const filter = () => {};
  const { links, loading, error } = useAppSelector((state) => state.links);
  const { access_token } = useAppSelector((state) => state.user);

  const { getLinks } = useActions();

  const memoLinks = useCallback(
    () => getLinks(access_token),
    [getLinks, access_token]
  );

  useEffect(() => {
    memoLinks();
    // eslint-disable-next-line
  }, []);

  if (loading) return <h1>Идет загрузка...</h1>;
  if (error) return <h1>Ошибка загрузки</h1>;
  return (
    <>
      <table className=" table">
        <thead>
          <tr>
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
