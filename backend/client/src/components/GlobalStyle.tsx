import React from "react";
import Navbar from "./Navbar";

const GlobalStyle = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default GlobalStyle;
