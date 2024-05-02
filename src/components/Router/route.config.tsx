import React from "react";
import Login from "../../features/auth";
import AppLayout from "../Layout/AppLayout";
import Content from "../Content/content";
import Register from "../../features/auth/components/register"
import Forgot from "../../features/auth/components/forgot"
import NotFound from "../../components/NotFound";
import Contact from "../../components/Contact";
import Courses from "../Course";
import About from "../About";
import {
  List as UserList,
  Create as UserCreate,
} from "../../features/users/index";
import AuthRegister from "../../features/auth/authRegister";
import Profile from "../Profile/ProfileLayout";
import MyCourses from "../Profile/myCourses";
import MyProfile from "../Profile/myProfile";
import TestYourLevel from "../TestYourEnglish/index"
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
    path: "/admin/login",
    element: <AppLayout content={<Login />} />
  },  {
    key: "4",
    path: "/register",
    element: <AppLayout content={<AuthRegister />} />
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
  {
    key: "7",
    path: "/courses",
    element: <AppLayout content={<Courses />} />,
  },
  {
    key: "8",
    path: "/about",
    element: <AppLayout content={<About />} />,
  },
  {
    key: "9",
    path: "/admin/users",
    element: <AppLayout content={<UserList />} />,
  },
  {
    key: "10",
    path: "/admin/users/create",
    element: <AppLayout content={<UserCreate />} />
  },
  {
    key: "11",
    path: "/myProfile",
    element: <AppLayout content={<Profile layout={<MyProfile />} />} />
  },
  {
    key: "11",
    path: "/myCourses",
    element: <AppLayout content={<Profile layout={<MyCourses />} />} />
  },
  {
    key: "12",
    path: "/leveltest",
    element: <AppLayout content={<TestYourLevel/>}/>
  },
];

export default routeConfig;