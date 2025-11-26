
import PaginationWrapper from "@/features/pagination/ui/Pagination/Pagination";
import { TOTAL_PAGES } from "@/shared/constants";
import { NewsList } from "@/widget/news";
import { INews } from "@/entities/news";
import { IFilters } from "@/shared/interfaces";
import { usePaginationNews } from "@/pages/main/utils/hooks/usePaginationNews";

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}

const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
  const {
    handleNextPage,
    handlePrevPage,
    handlePageClick
  } = usePaginationNews(filters);

  return (
    <PaginationWrapper
      top
      bottom
      handlePrevPage={handlePrevPage}
      handleNextPage={handleNextPage}
      handleCurrentPage={handlePageClick}
      totalPages={TOTAL_PAGES}
      currentPage={filters.page_number}
    >
      <NewsList news={news} type="item" direction="column" isLoading={isLoading} />
    </PaginationWrapper>
  );
};

export default NewsListWithPagination;
