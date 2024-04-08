import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Content from "../Content/content";

const AppLayout = ({ content }: { content: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {content}
      <Footer />
    </div>
  );
};

export default AppLayout;
