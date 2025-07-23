import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { ReactComponent as ResponsiveIcon } from "../assets/images/responsive.svg";
import { ReactComponent as Component } from "../assets/images/puzzle.svg";
import { ReactComponent as Typesafe } from "../assets/images/binary-code.svg";
import { ReactComponent as ModernWeb } from "../assets/images/devops.svg";
import { ReactComponent as Capabilty } from "../assets/images/diamond.svg";
import { ReactComponent as OptPerformance } from "../assets/images/thunder.svg";
import { ReactComponent as AccessInterface } from "../assets/images/easy.svg";

const ModernWebCapabilities = () => {
  const capabilityData = [
    {
      title: "Component-Driven UI",
      icon: (
        <Box sx={{ width: 34, height: 34 }}>
          <Component style={{ width: "100%", height: "100%" }} />
        </Box>
      ),
      features: [
        "Building reusable, testable, and maintainable UI components with React and modern frameworks.",
      ],
    },
    {
      title: "Responsive & Adaptive Layouts",
      icon: (
        <Box sx={{ width: 34, height: 34 }}>
          <ResponsiveIcon style={{ width: "100%", height: "100%" }} />
        </Box>
      ),
      features: [
        "Crafting seamless experiences across devices using CSS Grid, Flexbox, and mobile-first design.",
      ],
    },
    {
      title: "Optimized Performance",
      icon: (
        <Box sx={{ width: 34, height: 34 }}>
          <OptPerformance style={{ width: "100%", height: "100%" }} />
        </Box>
      ),
      features: [
        "Enhancing load times, interactivity, and Core Web Vitals for a faster user experience.",
      ],
    },
    {
      title: "Accessible Interfaces",
      icon: (
        <Box sx={{ width: 34, height: 34 }}>
          <AccessInterface style={{ width: "100%", height: "100%" }} />
        </Box>
      ),

      features: [
        "Designing inclusive UIs following WCAG & ARIA to ensure usability for all users.",
      ],
    },
    {
      title: "Modern Development Workflow",
      icon: (
        <Box sx={{ width: 27, height: 27 }}>
          <ModernWeb style={{ width: "100%", height: "100%" }} />
        </Box>
      ),
      features: [
        "Utilizing Git, CI/CD, Webpack/Vite, and automated testing for efficient delivery.",
      ],
    },
    {
      title: "Type-Safe & Scalable Code",
      icon: (
        <Box sx={{ width: 34, height: 34 }}>
          <Typesafe style={{ width: "100%", height: "100%" }} />
        </Box>
      ),

      features: [
        "Writing robust, scalable applications with TypeScript and clean coding practices.",
      ],
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#0f111a",
        py: 6,
        mt: -10,
        px: { xs: 2, md: 7 },
        color: "#fff",
      }}
    >
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box
          sx={{ width: 30, height: 30, marginTop: "21px", marginRight: "10px" }}
        >
          <Capabilty style={{ width: "100%", height: "100%" }} />
        </Box>
        <Box
          sx={{
            fontWeight: 600,
            mt: 2,
            mb: 1,
            fontSize: {
              xs: "26px",
              sm: "30px",
              md: "30px",
              lg: "30px",
              xl: "30px",
            },
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Modern Capabilities
        </Box>
      </Box>

      <Grid container spacing={3} sx={{ mt: 0, mb: 5 }}>
        {capabilityData.map((cap, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={idx}
            mt={3}
            sx={{
              // width: {
              //   sm: "100%",
              //   xs: "100%",
              // },
              display: {
                sm: "flex",
                xs: "flex",
              },
              justifyContent: {
                xl: "start",
                lg: "start",
                md: "start",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Paper
              elevation={2}
              sx={{
                backgroundColor: "#161b22",
                p: 3,
                pb: 0,
                borderRadius: 2,

                width: { xl: "320px", lg: "320px", md: 300, sm: 320, xs: 320 },
                height: "100%",
                transition: "transform 0.3s ease",

                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.2)",
                },
              }}
            >
              <Box sx={{ alignItems: "center", gap: 0.4, mb: 2 }}>
                <Box sx={{ color: "#fff", fontSize: 28 }} mb={2}>
                  {cap?.icon}
                </Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#fff",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {cap.title}
                </Typography>
              </Box>
              <Box
                component="ul"
                sx={{
                  pl: 0,
                  fontSize: "16px",
                  color: "#9ca3af",
                  mb: 0,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {cap.features.map((item, i) => (
                  <Box sx={{ mt: 2 }} key={i}>
                    {item}
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ModernWebCapabilities;
