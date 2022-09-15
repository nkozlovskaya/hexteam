import { FC } from "react";

interface PaginationProps {
  nextPage: () => void;
}

export const PaginationNextPage: FC<PaginationProps> = ({ nextPage }) => {
  return (
    <div className="paginate">
      <button className="paginate-btn" onClick={nextPage}>
        Next Page
      </button>
    </div>
  );
};
