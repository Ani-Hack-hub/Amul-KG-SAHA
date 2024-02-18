import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Headbar from "./headbar.jsx";
import "../src/assets/static/style.css";
import "../src/assets/static/index.css";
import Index from "./index.jsx";
import Menu from "./templates/Menu.jsx";
import About from "./templates/About.jsx";
import Contact from "./templates/Contact.jsx";
import Cashew from "./templates/Cashew";
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
    path: "/cashew",
    element: <Cashew></Cashew>,
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
    path: "/amul/bulk-1",
    element: <App elt={"Bulk -1"}></App>,
  },
  {
    path: "/amul/bulk-2",
    element: <App elt={"Bulk -2"}></App>,
  },
  {
    path: "/amul/bulk-3",
    element: <App elt={"Bulk -3"}></App>,
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
    path: "/amul/stick-1",
    element: <App elt={"Stick -1"}></App>,
  },
  {
    path: "/amul/stick-2",
    element: <App elt={"Stick -2"}></App>,
  },
  {
    path: "/amul/tub",
    element: <App elt={"Tub"}></App>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Headbar></Headbar>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>
);
