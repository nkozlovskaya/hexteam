import { FC } from "react";
import { ILink } from "../../types";
import { TableStat } from "./TableStat";

interface TableProps{
    links: ILink[],
    currentPage: number,
    filter:(arg:string|number)=>void
}

export const Table:FC<TableProps> = ({links,currentPage,filter}) => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>№</th>
            <th onClick={() => filter("short")}>Short</th>
            <th onClick={() => filter("target")}>Target</th>
            <th onClick={() => filter("counter")}>Counter</th>
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
}