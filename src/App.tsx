import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Login from "./features/auth/index";
import Content from "./components/Content/content";
import Register from "./features/auth/register"
import Forgot from "./features/auth/forgot"
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
// import "@benovshe/sasslibrary/dist/index.css"
function App() {
  return (
    <body className="App">
      <Router>
        <Routes>
          <Route element={<AppLayout  content={<Content/>}/>} path="/"/>
          <Route element={<AppLayout  content={<NotFound/>}/>} path="*"/>
          <Route element={<AppLayout  content={<Login/>}/>} path="/login" />
          <Route element={<AppLayout  content={<Register/>}/>} path="/register" />
          <Route element={<AppLayout  content={<Forgot/>}/>} path="/forgot" />
          <Route element={<AppLayout  content={<Contact/>}/>} path="/contact" />
        </Routes>
      </Router>
    </body>
  );
}

export default App;
