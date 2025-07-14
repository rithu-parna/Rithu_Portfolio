import React from "react";
import { Box } from "@mui/material";
import Expertise from "./components/expertise";
import Contact from "./components/contact";
import Footer from "./components/footer";
import HeroSection from "./components/HeroSection";
import FooterClass from "./components/footerClass";

import Modern from "./components/modern";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#0f0f0f" }}>
      {/* <Sidebar /> */}
      <HeroSection />
      <Contact />
      <Expertise />
      <Modern />
      <FooterClass />
      <Footer />
    </Box>
  );
};

export default App;
