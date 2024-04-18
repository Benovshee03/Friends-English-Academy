import React from "react";
import Login from "../../features/auth";
import AppLayout from "../Layout/AppLayout";
import Content from "../Content/content";
import Register from "../../features/auth/register"
import Forgot from "../../features/auth/forgot"
import NotFound from "../../components/NotFound";
import Contact from "../../components/Contact";



const routeConfig: any[] = [
  {
    key: "1",
    path: "/",
    element: <AppLayout content={<Content />} />
  },
  {
    key: "2",
    path: "*",
    element: <AppLayout content={<NotFound />} />
  },  {
    key: "3",
    path: "/login",
    element: <AppLayout content={<Login />} />
  },  {
    key: "4",
    path: "/register",
    element: <AppLayout content={<Register />} />
  },
  {
    key: "5",
    path: "/forgot",
    element: <AppLayout content={<Forgot />} />
  },
  {
    key: "6",
    path: "/contact",
    element: <AppLayout content={<Contact />} />,

  },
];

export default routeConfig;