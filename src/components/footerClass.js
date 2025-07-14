import React from "react";
import { Box, Button, Stack, Typography, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  const ResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Frontend Developer Rithuparna AC.pdf";
    link.download = "Frontend Developer Rithuparna_AC.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        maxHeight: "100vh",
        backgroundColor: "#161B22",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Let's Build Something Amazing
      </Typography>

      <Typography variant="subtitle1" sx={{ color: "#a0a0a0", mb: 2 }}>
        Looking for a developer who can create high-performance, interactive web
        experiences?
      </Typography>

      <Stack direction="row" alignItems="center" spacing={1} mb={4}>
        <LocationOnIcon fontSize="small" sx={{ color: "#a0a0a0" }} />
        <Typography variant="body2" sx={{ color: "#a0a0a0" }}>
          Kozhikode, Kerala
        </Typography>
      </Stack>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={4}>
        <Button
          variant="contained"
          startIcon={<EmailIcon />}
          sx={{
            background: "linear-gradient(45deg, #4f46e5, #a855f7)",
            color: "#fff",
            px: 3,
            py: 1,
            borderRadius: 2,
            fontWeight: "bold",
            textTransform: "none",
            boxShadow: "0 0 12px #9333ea",
            "&:hover": {
              boxShadow: "0 0 20px #9333ea",
              background: "linear-gradient(45deg, #4f46e5, #9333ea)",
            },
          }}
          onClick={() => {
            window.location.href =
              "mailto:rithu7025@gmail.com?subject=Let's Connect&body=Hi Rithuparna AC,%0D%0A%0D%0AI'd like to get in touch with you!";
          }}
        >
          Get in Touch
        </Button>

        <Button
          variant="contained"
          startIcon={<DescriptionIcon />}
          sx={{
            backgroundColor: "#1f1f1f",
            color: "#fff",
            px: 3,
            py: 1,
            borderRadius: 2,
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
          onClick={ResumeDownload}
        >
          View Resume
        </Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <IconButton
          href="https://github.com/rithu1010"
          target="_blank"
          sx={{ color: "#a0a0a0" }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/rithuparna-rithu"
          target="_blank"
          sx={{ color: "#a0a0a0" }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://wa.me/918086710182"
          target="_blank"
          sx={{ color: "#a0a0a0" }}
        >
          <FaWhatsapp size={24} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default HeroSection;
