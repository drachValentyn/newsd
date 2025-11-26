import { createBrowserRouter } from "react-router";
import BaseLayout from "./layouts/BaseLayout";
import { Main } from "@/pages/main"
import { NewsPage } from "@/pages/news";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: "/news/:id",
        element: <NewsPage />
      }
    ]
  },
]);
