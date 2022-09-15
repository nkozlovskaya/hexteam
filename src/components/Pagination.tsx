import { FC } from "react";

interface PaginationProps {
  nextPage: () => void;
  prevPage: () => void;
  firstPage: () => void;
}

export const Pagination: FC<PaginationProps> = ({
  nextPage,
  prevPage,
  firstPage,
}) => {
  return (
    <div className="paginate">
      <button className="paginate-btn" onClick={firstPage}>
        First Page
      </button>
      <button className="paginate-btn" onClick={prevPage}>
        Prev Page
      </button>
      <button className="paginate-btn" onClick={nextPage}>
        Next Page
      </button>
    </div>
  );
};
