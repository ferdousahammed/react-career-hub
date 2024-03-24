import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Jobs from "./components/Jobs/Jobs.jsx";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import JobDetails from "./components/Jobs/JobDetails/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: () => fetch("./jobs.json"),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch("./jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
