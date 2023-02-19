import { Box } from "@mui/system";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Outlet } from "react-router";
import Footer from "../component/footer/Footer";
import Navbar from "../features/cart/navbar/Navbar";
const MainLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default MainLayout;
