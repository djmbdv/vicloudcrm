import type { FC } from "react";

export interface PaginatorProps {
  currentPage?: number;
  pagesCount: number;
  onForwardPage?: () => void;
  onPreviousPage?: () => void;
}

const Paginator: FC<PaginatorProps> = ({
  currentPage = 0,
  onForwardPage,
  onPreviousPage,
  pagesCount,
}) => (
  /*   const divs = pagesCount < 0 ? divitions : pagesCount;
  const startPage =
    currentPage - divitions / 2 > 0 ? currentPage - divitions / 2 : 0;
  const cases = [...Array(divs).keys()]
    .map((value) => value + startPage)
    .filter((value) => value <= pagesCount); */
  <nav className="p-1 mx-auto" aria-label="Page navigation example">
    <ul className="inline-flex -space-x-px mx-auto">
      <li>
        <button
          type="button"
          className={`px-3 py-2 ml-0 leading-tight
            disabled:${
              onForwardPage ? "true" : "false"
            } text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          onClick={(): void => onPreviousPage && onPreviousPage()}
        >
          Previous
        </button>
      </li>
      <li>
        <button
          type="button"
          className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {currentPage}/ {pagesCount}
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={(): void => onForwardPage && onForwardPage()}
          className={`px-3 disabled:${
            onForwardPage ? "true" : "false"
          } py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
);
export default Paginator;
