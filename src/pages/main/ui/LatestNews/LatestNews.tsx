import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import { NewsList } from "@/widget/news";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <NewsList news={data && data.news} type="banner" direction="row" isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
