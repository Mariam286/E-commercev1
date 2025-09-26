import React from "react";
import Axios from "axios";
import "./App.css";
import Layout from "./Layout";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Shoes from "./Shoes";
import Electronics from "./Electronics";
import Error from "./Error";
import Clothes from "./Clothes";
import Groceries from "./Miscellaneous";
import Furniture from "./Furniture";
import Accessories from "./Support";
import Beauty from "./Womenclothes";
import Details from "./Details"
import Car from './Car';
import Context from "./Context";


function App() {
  let X = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        { path: "/home", element: <Home /> },
        { path: "/clothes", element: <Clothes /> },
        { path: "/accessories", element: <Accessories /> },
        { path: "/electronics", element: <Electronics /> },
        { path: "/shoes", element: <Shoes /> },
        { path: "/furniture", element: <Furniture /> },
        { path: "/groceries", element: <Groceries /> },
        { path: "/Beauty", element: <Beauty /> },
          { path: "/details/:id", element: <Details /> },
                  { path: "/car", element: <Car /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return <Context><RouterProvider router={X} /></Context> 
}

export default App;
