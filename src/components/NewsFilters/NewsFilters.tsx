import { IFilters } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { setFilters } from "../../store/slices/newsSlice";
import Categories from "../Categories/Categories";
import { useTheme } from "../context/ThemeContext";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./styles.module.css";

interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
  const { data: dataCategories } = useGetCategoriesQuery(null);
  const { isDark } = useTheme();
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider isDark={isDark}>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))} />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        isDark={isDark}
        setKeywords={(keywords) => dispatch(setFilters({ key: "keywords", value: keywords }))}
      />
    </div>
  );
};

export default NewsFilters;
