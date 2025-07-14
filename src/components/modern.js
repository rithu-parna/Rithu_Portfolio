import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { FaBolt, FaWrench, FaRocket, FaLock } from "react-icons/fa";

const ModernWebCapabilities = () => {
  const capabilityData = [
    {
      title: "Responsive Web Development",
      icon: "🖥️",
      features: ["Building layouts that adapt perfectly to all screen sizes"],
    },
    {
      title: "Component-Based Architecture",
      icon: "⚛️",
      features: [
        "Developing scalable UIs using React, Vue, or similar frameworks.",
        // "Push notifications",
      ],
    },
    {
      title: "Performance Optimization",
      icon: <FaBolt size={24} />,
      features: [
        "Minimizing load times & ensuring smooth interactions",
        // "WebRTC",
      ],
    },
    {
      title: "Pixel-Perfect Implementation",
      icon: <FaWrench size={24} />,
      features: [
        "Translating designs accurately into functional web pages.",
        // "Web Workers",
        // "Service Workers",
      ],
    },
    {
      title: "Performance",
      icon: <FaRocket size={24} />,
      features: ["Code splitting", "Tree shaking", "Resource optimization"],
    },
    {
      title: "Security",
      icon: <FaLock size={24} />,
      features: ["CSP", "CORS configuration", "Security headers"],
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
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 600, mt: 2 }}
      >
        🌟 Modern Capabilities
      </Typography>

      <Grid container spacing={3} sx={{ mt: 0, mb: 5 }}>
        {capabilityData.map((cap, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx} mt={3}>
            <Paper
              elevation={2}
              sx={{
                backgroundColor: "#161b22",
                p: 3,
                pb: 0,
                borderRadius: 2,
                width: { xl: "320px", lg: "320px", md: 300, sm: 360, xs: 320 },
                height: "100%",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.2)",
                },
              }}
            >
              <Box sx={{ alignItems: "center", gap: 0.4, mb: 2 }}>
                <Box sx={{ color: "#fff", fontSize: 28 }}>{cap.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#fff" }}
                >
                  {cap.title}
                </Typography>
              </Box>
              <Box component="ul" sx={{ pl: 0, color: "#9ca3af", mb: 0 }}>
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
