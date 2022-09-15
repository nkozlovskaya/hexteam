import { FC } from "react";
import { baseUrl } from "../api/apiService";
import { ILink } from "../types";

export const TableStat: FC<ILink> = ({ short, target, counter}) => {
  const shortLink = `${baseUrl}/s/${short}`;
  const refresh = () => {};
  return (
    <>
      <tr>
        <td>
          
       </td>
        <td>
          <a
            className="a__link-short"
            href={shortLink}
            onClick={refresh}
            target="_blank"
            rel="noopener noreferrer"
          >
            {short}
          </a>
        </td>
        <td>
          <div className="table_link">
            <a
              className="a__link-target"
              href={target}
              target="_blank"
              rel="noopener noreferrer"
            >
              {target}
            </a>
          </div>
        </td>
        <td className="a__link-counter">{counter}</td>
      </tr>
    </>
  );
};
