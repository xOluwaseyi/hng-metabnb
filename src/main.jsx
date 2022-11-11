import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from "./ErrorPage";
import Layout from "../src/components/Layout"
import Home from "../src/routes/Home";
import PlaceToStay from "../src/routes/PlaceToStay";

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "places",
        element: <PlaceToStay />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
