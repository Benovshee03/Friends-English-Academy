import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import routeConfig from "./route.config";

const Router = () => {
  const router = createBrowserRouter(routeConfig); 
  return <RouterProvider router={router} />;
};

export default Router;