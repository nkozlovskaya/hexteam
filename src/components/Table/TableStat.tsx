import { FC, useState } from "react";
import { baseUrl } from "../../api/apiService";
import { ILink } from "../../types";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const TableStat: FC<ILink> = ({
  short,
  target,
  counter,
  index,
  curPage,
}) => {
  const shortLink = `${baseUrl}/s/${short}`;
  const [copied, setCopied] = useState(false);

  return (
    <>
      <tr>
        <td>{15 * curPage + index + 1}</td>
        <td>
          <CopyToClipboard text={shortLink} onCopy={() => setCopied(true)}>
            <a
              className="a__link-short"
              href={shortLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.preventDefault()}
            >
              {short}
            </a>
          </CopyToClipboard>
          {copied ? <span className="span-copy">Copied.</span> : null}
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
