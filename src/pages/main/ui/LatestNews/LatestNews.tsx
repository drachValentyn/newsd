import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import { NewsList } from "@/widget/news";
import styles from "./styles.module.css";
import { useAppDispatch } from "@/app/appStore";
import { INews } from "@/entities/news";
import { setCurrentNews } from "@/entities/news/model/newsSlice";
import { useNavigate } from "react-router-dom";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news));
    navigate(`news/${news.id}`)
  }

  return (
    <section className={styles.section}>
      <NewsList
        news={data && data.news}
        type="banner"
        direction="row"
        isLoading={isLoading}
        viewNewsSlot={(news: INews) => <p onClick={() => navigateTo(news)}>View more ...</p>}
      />
    </section>
  );
};

export default LatestNews;
