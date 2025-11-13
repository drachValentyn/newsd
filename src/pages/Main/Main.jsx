import { useEffect, useState } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import styles from "./main.module.css";
import { getNews, getCategories } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const totalPages = 10;
  const pageSize = 10;

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(["All", ...response.categories]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchNews = async (currentPage) => {
      try {
        const res = await getNews({
          page_number: currentPage,
          page_size: pageSize,
          category: selectedCategory === "All" ? null : selectedCategory,
        });
        setNews(res.news);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchNews(currentPage);
  }, [currentPage, selectedCategory]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  }

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {
        news.length > 0 && !isLoading ?
          <NewsBanner item={news[0]} /> :
          <Skeleton count={1} type={'banner'} />
      }

      {
        !isLoading ?
          <NewsList news={news} /> :
          <Skeleton count={10} type={"item"} />
      }

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handleCurrentPage={handleCurrentPage}
      />
    </main>
  )
}

export default Main;
