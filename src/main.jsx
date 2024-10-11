import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/browse/Body.jsx";
import Signin from "./components/signin/Signin.jsx";
import App from "./App.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore.js";
import GptSearchPage from "./components/gpt/GptSearchPage.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Signin />,
      },
      { path: "/browse", element: <Body /> },
      { path: "/search", element: <GptSearchPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
