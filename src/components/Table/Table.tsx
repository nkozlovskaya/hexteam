import { FC } from "react";
import { ILink } from "../../types";
import { TableStat } from "./TableStat";

interface TableProps {
  links: ILink[];
  currentPage: number;
  filterCounterDesc: () => void;
  filterCounterAsc: () => void;
  filterTargetDesc: () => void;
  filterTargetAsc: () => void;
  filterShortDesc: () => void;
  filterShortAsc: () => void;
}

export const Table: FC<TableProps> = ({
  links,
  currentPage,
  filterCounterDesc,
  filterCounterAsc,
  filterTargetDesc,
  filterTargetAsc,
  filterShortDesc,
  filterShortAsc,
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>№</th>
          <th>
            <div className="span">
              <span onClick={filterShortDesc}>&uarr;</span>
              <span onClick={filterShortAsc}>&darr;</span>
            </div>
            Short
          </th>
          <th>
            <div className="span">
              <span onClick={filterTargetDesc}>&uarr;</span>
              <span onClick={filterTargetAsc}>&darr;</span>
            </div>
            Target
          </th>
          <th>
            <div className="span">
              <span onClick={filterCounterDesc}>&uarr;</span>
              <span onClick={filterCounterAsc}>&darr;</span>
            </div>
            Counter
          </th>
        </tr>
      </thead>
      <tbody>
        {links.map((link) => {
          return (
            <TableStat
              key={link.id}
              {...link}
              index={links.indexOf(link)}
              curPage={currentPage}
            />
          );
        })}
      </tbody>
    </table>
  );
};
