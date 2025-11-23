import { themeIcons } from "@/shared/assets";
import { useTheme } from "@/app/providers/ThemeProvider";

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <img
      src={isDark ? themeIcons.light : themeIcons.dark}
      alt="theme-change-icon"
      width={30}
      onClick={toggleTheme} />
  )
}

export default ThemeButton;
