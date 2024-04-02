import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";



const AppLayout = ({ content }: { content: React.ReactNode }) => {


  return (
    <div>
        <Header/>
        <Footer/>
    </div>
  );
};

export default AppLayout;