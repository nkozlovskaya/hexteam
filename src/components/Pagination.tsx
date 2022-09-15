import { FC } from "react";

interface PaginationProps {
  nextPage: () => void;
  prevPage: () => void;
}

export const Pagination: FC<PaginationProps> = ({ nextPage, prevPage }) => {
  return (
    <div className="paginate">
      <button className="paginate-btn" onClick={() => prevPage}>
        Prev Page
      </button>
      <button className="paginate-btn" onClick={() => nextPage}>
        Next Page
      </button>
    </div>
  );
};
