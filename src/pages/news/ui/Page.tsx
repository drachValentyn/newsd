import { useAppSelector } from "@/app/appStore";
import { Link } from "react-router-dom";

const NewsPage = () => {
  const currentNews = useAppSelector(state => state.news.currentNews);

  if (!currentNews) {
    return <div>
      <h2>Cannot find news</h2>
      <Link to={"/"}>
        <h4>Return to News List</h4>
      </Link>
    </div>
  }


  return (
    <>
      <h2>{currentNews.title}</h2>
    </>
  )
}

export default NewsPage;
