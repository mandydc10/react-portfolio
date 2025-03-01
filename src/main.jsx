import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProjectsListPage from "./pages/ProjectsListPage.jsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";

import NavBar from "./components/NavBar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/projects-list", element: <ProjectsListPage /> },
      { path: "/project/:id", element: <ProjectDetailPage /> },
      { path: "/about-me", element: <AboutPage /> },
      { path: "/contact-me", element: <ContactPage /> },
      { path: "/success-message", element: <SuccessPage /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Here we wrap our app in the router provider so they render */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
