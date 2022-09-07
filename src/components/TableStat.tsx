import { FC } from "react";
import { baseUrl } from "../api/apiService";
import { ILink } from "../types";

export const TableStat: FC<ILink> = ({ short, target, counter }) => {
  const shortLink = `${baseUrl}/s/${short}`;
  const refresh = () => {};
  return (
    <>
      <tr>
        <td>
          <a
            href={shortLink}
            onClick={refresh}
            target="_blank"
            rel="noopener noreferrer"
          >
            {shortLink}
          </a>
        </td>
        <td>
          <div className="table_link">
            <a href={target} target="_blank" rel="noopener noreferrer">
              {target}
            </a>
          </div>
        </td>
        <td>{counter}</td>
      </tr>
    </>
  );
};
