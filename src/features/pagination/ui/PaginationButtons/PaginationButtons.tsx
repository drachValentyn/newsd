import { useTheme } from "@/app/providers/ThemeProvider";
import { IPaginationProps } from "../../model/types";
import styles from "./styles.module.css"


const PaginationButtons
  = ({
    totalPages,
    currentPage,
    handleNextPage,
    handlePrevPage,
    handleCurrentPage
  }: IPaginationProps) => {

    const { isDark } = useTheme();

    return (
      <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
        <button
          className={styles.arrow}
          disabled={currentPage <= 1}
          onClick={handlePrevPage}
        >
          {'<'}
        </button>
        <div className={styles.list}>
          {[...Array(totalPages)].map((_, index) => {
            return (<button
              key={index}
              className={styles.pageNumber}
              onClick={() => handleCurrentPage(index + 1)}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
            );
          })}
        </div>
        <button
          className={styles.arrow}
          disabled={currentPage >= 10}
          onClick={handleNextPage}
        >
          {'>'}</button>
      </div>
    )
  }

export default PaginationButtons
  ;
