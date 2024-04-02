import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import {Content} from "./components/Content/index"
function App() {
  return (
    <div className="App">
      <Router>
        <AppLayout content={<Content/>}/>
      </Router>
    </div>
  );
}

export default App;
