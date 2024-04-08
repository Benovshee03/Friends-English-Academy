import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Login from "./features/auth/index";
import Content from "./components/Content/content";
// import "@benovshe/sasslibrary/dist/index.css"
function App() {
  return (
    <body className="App">
      <Router>
        <Routes>
          <Route element={<AppLayout  content={<Content/>}/>} path="/"/>
          <Route element={<AppLayout  content={<Login/>}/>} path="/login" />
        </Routes>
      </Router>
    </body>
  );
}

export default App;
