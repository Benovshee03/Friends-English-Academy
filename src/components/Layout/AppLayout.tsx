import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import  Content  from "../Content/content";



const AppLayout = () => {


  return (
    <div>
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
};

export default AppLayout;