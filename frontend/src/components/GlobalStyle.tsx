import { ReactNode } from "react";
import { Footer, Navbar } from "@components/layout";

const GlobalStyle = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default GlobalStyle;
