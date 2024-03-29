import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Headbar from "./headbar.jsx";
import "../src/assets/static/style.css";
import "../src/assets/static/index.css";
import Index from "./templates/Homepage.jsx";
import Menu from "./templates/Menu.jsx";
import About from "./templates/About.jsx";
import Contact from "./templates/Contact.jsx";
import Golden from "./templates/Gd";

var route = createBrowserRouter([
  {
    path: "/",
    element: <Index></Index>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/golden",
    element: <Golden></Golden>,
  },
  {
    path: "/amul/menu",
    element: <Menu></Menu>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/amul/bulk",
    element: <App elt={"Bulk"}></App>,
  },
  {
    path: "/amul/cup",
    element: <App elt={"Cup"}></App>,
  },
  {
    path: "/amul/cone",
    element: <App elt={"Cone"}></App>,
  },
  {
    path: "/amul/combo",
    element: <App elt={"Combo"}></App>,
  },
  {
    path: "/amul/jumbo",
    element: <App elt={"Jumbo"}></App>,
  },
  {
    path: "/amul/kulfi",
    element: <App elt={"Kulfi"}></App>,
  },
  {
    path: "/amul/stick",
    element: <App elt={"Stick"}></App>,
  },
  {
    path: "/amul/tub",
    element: <App elt={"Tub"}></App>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Headbar></Headbar>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>
);
