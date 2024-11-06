import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./pages/ContactPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import SearchResultPage from "./pages/SearchResultPage.jsx";
import SearchinghtPage from "./pages/SearchingPage.jsx";
import ContactMenuFilledPage from "./pages/ContactMenuFilledPage.jsx";
import ContactConfirmedPage from "./pages/ContactConfirmedPage.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "contactpage",
        element: <ContactPage />,
      },
      {
        path: "searchpage",
        element: <SearchPage />,
      },
      {
        path: "searchresultpage",
        element: <SearchResultPage />,
      },
      {
        path: "searchingpage",
        element: <SearchinghtPage />,
      },
      {
        path: "contactfilled",
        element: <ContactMenuFilledPage />,
      },
      {
        path: "contactconfirmed",
        element: <ContactConfirmedPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
