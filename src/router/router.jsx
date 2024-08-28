// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../views/ErrorPage/ErrorPage";
import MainPage from "../views/MainPage/MainPage";
import AllService from "../views/AllService/AllService.jsx";
import Recovery from "../views/Recovery/Recovery.jsx";
import Audit from "../views/Audit/Audit.jsx";
import Financ from "../views/Financ/Financ.jsx";
import Policy from "../views/Policy/Policy.jsx";
import Business from "../views/Business/Business.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/all_service",
        element: <AllService />,
      },
      {
        path: "/recovery",
        element: <Recovery />,
      },
      {
        path: "/audit",
        element: <Audit />,
      },
      {
        path: "/financ",
        element: <Financ />,
      },
      {
        path: "/policy",
        element: <Policy />,
      },
      {
        path: "/business",
        element: <Business />,
      },
    ],
  },
]);

export default router;
