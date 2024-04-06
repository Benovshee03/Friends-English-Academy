import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
// import "@benovshe/sasslibrary/dist/index.css"
function App() {
  return (
    <body className="App">
      <Router>
        <AppLayout/>
      </Router>
    </body>
  );
}

export default App;
