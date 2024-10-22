import React from "react";
// import Navbar from "./layout/Navbar";

const GlobalStyle = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      <p className="text-center my-2 text-neutral-400">
        2024 &copy; szyi - v.1.0.0
      </p>
    </>
  );
};

export default GlobalStyle;
