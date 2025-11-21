import { useTheme } from "./components/context/ThemeContext"
import Header from "./components/Header/Header"
import Main from "./pages/Main/Main"

function App() {
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header></Header>
      <div className="container">
        <Main></Main>
      </div>
    </div>
  )
}

export default App
