import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
}
