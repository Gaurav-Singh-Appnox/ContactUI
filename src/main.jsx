import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./pages/ContactPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import SearchResultPage from "./pages/SearchResultPage.jsx";
import ContactConfirmedPage from "./pages/ContactConfirmedPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <SearchResultPage />,
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
        path: "contactconfirmed",
        element: <ContactConfirmedPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
