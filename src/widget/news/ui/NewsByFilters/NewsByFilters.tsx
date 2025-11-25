
import NewsFilters from "@/pages/main/ui/NewsFilters/NewsFilters";
import { useAppSelector } from "@/app/appStore";
import { useGetCategoriesQuery } from "@/entities/category/api/api";
import styles from "./styles.module.css";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { useDebounce } from "@/shared/hooks/useDebounce";
import NewsListWithPagination from "../NewsListWithPagination/NewsListWithPagination";

const NewsByFilters = () => {
  const filters = useAppSelector(state => state.news.filters);
  const news = useAppSelector(state => state.news.news);
  const { data } = useGetCategoriesQuery(null);
  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <section className={styles.section}>
      <NewsFilters categories={data?.categories || []} filters={filters} />

      <NewsListWithPagination filters={filters} news={news} isLoading={isLoading} />
    </section>
  );
};

export default NewsByFilters;
