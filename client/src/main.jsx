import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import { Home, Error, Budgets, Login, NewBudget, Signup } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Budgets",
        element: <Budgets />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/NewBudget",
        element: <NewBudget />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);