import { useTheme } from "@/app/providers/ThemeProvider";
import { Main } from "@/pages/main";
import { Header } from "@/widget/header/ui";

function BaseLayout() {
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  )
}

export default BaseLayout;
