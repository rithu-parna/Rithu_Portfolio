import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        backgroundColor: "#0f0f0f",
        color: "#aaa",
        py: 1,
      }}
    >
      <Typography fontSize={12} sx={{ fontFamily: "Poppins, sans-serif" }}>
        © {new Date().getFullYear()} Rithuparna | All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
