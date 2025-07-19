import React, { useMemo } from "react";
import { Box, Typography, Button, Stack, keyframes } from "@mui/material";
import { ReactComponent as React1 } from "../assets/images/atom.svg";
import { ReactComponent as Redux } from "../assets/images/redux.svg";
import { ReactComponent as Angular } from "../assets/images/programing.svg";
import { ReactComponent as TypeScript } from "../assets/images/ts.svg";
import { ReactComponent as Javascript } from "../assets/images/js.svg";

// import { LinkedIn, Instagram, GitHub, WhatsApp } from "@mui/icons-material";

const techStack = [
  {
    img: (
      <Box sx={{ width: 24, height: 24 }}>
        <React1 style={{ width: "100%", height: "100%" }} />
      </Box>
    ),
    text: "React",
  },
  {
    img: (
      <Box sx={{ width: 24, height: 24 }}>
        <Angular style={{ width: "100%", height: "100%" }} />
      </Box>
    ),
    text: "Angular",
  },
  {
    img: (
      <Box sx={{ width: 24, height: 24 }}>
        <Redux style={{ width: "100%", height: "100%" }} />
      </Box>
    ),
    text: "Redux",
  },
  {
    img: (
      <Box sx={{ width: 20, height: 20 }}>
        <Javascript style={{ width: "100%", height: "100%" }} />
      </Box>
    ),
    text: "Javascript",
  },
  {
    img: (
      <Box sx={{ width: 20, height: 20 }}>
        <TypeScript style={{ width: "100%", height: "100%" }} />
      </Box>
    ),
    text: "TypeScript",
  },
];

const HeroSection = () => {
  const emojis = useMemo(() => {
    return Array.from({ length: 8 }, () => ({
      emoji: ["💻", "⚛️", "🅰️", "⚛️", "🐍", "🅰️"][
        Math.floor(Math.random() * 7)
      ],
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
    }));
  }, []);

  const floatAnim = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(-5px, -10px); }
  50% { transform: translate(5px, -5px); }
  75% { transform: translate(-10px, 5px); }
  100% { transform: translate(0, 0); }
`;

  return (
    <Box>
      <Box
        id="herosection"
        sx={{
          width: "100%",
          height: "100vh",
          background: "radial-gradient(circle at top, #1f1f1f, #000)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "3rem", md: "6rem" },
            fontWeight: "bold",
            background: "linear-gradient(to right, #00ffff, #ff00ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            position: "relative",
            zIndex: 1,
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
              color: "transparent",
              background: "linear-gradient(to right, #00ffff, #ff00ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "blur(10px)",
              opacity: 2,
            },
          }}
        >
          Rithuparna A C
        </Typography>
        {/* Subtitle */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
          }}
        >
          {/* Left Line */}
          {/* <Box
            sx={{
              flex: 1,
              height: "2px",
              backgroundColor: "rgb(96, 165, 250)",
              boxShadow: "0 0 10px rgb(96, 165, 250)",
              opacity: 0.6,
              width: "68px",
            }}
          /> */}

          {/* Web Developer Text */}
          <Typography
            variant="h5"
            sx={{
              color: "#00bcd4",
              mx: 2,
              fontWeight: 500,
              whiteSpace: "nowrap",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Front-End Developer
          </Typography>

          {/* Right Line */}
          {/* <Box
            sx={{
              flex: 1,
              height: "2px",
              backgroundColor: "rgb(96, 165, 250)",
              boxShadow: "0 0 10px rgb(96, 165, 250)",
              opacity: 0.6,
              width: "68px",
            }}
          /> */}
        </Box>
        {/* Description */}
        <Typography
          variant="subtitle1"
          sx={{ mt: 2, maxWidth: 600, fontFamily: "Poppins, sans-serif" }}
        >
          Crafting exceptional digital experiences with modern web technologies
        </Typography>

        {/* Tech Stack */}
        <Stack
          direction="row"
          spacing={1}
          sx={{ mt: 3, flexWrap: "wrap", justifyContent: "center" }}
        >
          {techStack.map((tech, index) => (
            <Box
              key={index}
              sx={{
                border: "1px solid #444",
                borderRadius: "20PX",
                color: "#fff",
                pl: 1.5,
                pt: 1,
                pb: 1,
                pr: 1.5,
                mt: 5,
                mb: 2,
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                justifyContent: "center",
                fontFamily: "Poppins, sans-serif",
                borderColor: "#444",
                backgroundColor: "#1c1c1c",
              }}
            >
              <Box mr={1}>{tech.img}</Box>
              <Box
                sx={{
                  fontSize: "14px",
                  borderRadius: "50%",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {tech.text}
              </Box>
            </Box>
          ))}
        </Stack>

        {/* Buttons */}
        {/* Tech Stack Chips */}

        {/* Buttons */}
        <Stack direction="row" spacing={3} sx={{ mt: 3 }}>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #833ab4, #fd1d1d)",
              color: "#fff",
              px: 4,
              py: 1.5,
              borderRadius: 5,
              boxShadow: "0 0 15px #ff00ff",
              textTransform: "none",
              fontSize: "1rem",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            View My Work →
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#222",
              color: "#fff",
              px: 4,
              py: 1.5,
              borderRadius: 5,
              textTransform: "none",
              fontSize: "1rem",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Get in Touch
          </Button>
        </Stack>

        {/* Scroll down arrow */}
        <Typography
          sx={{
            position: "absolute",
            bottom: 20,
            fontSize: "1rem",
            color: "#ccc",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Scroll to explore
          <span style={{ fontSize: "2rem" }}>↓</span>
        </Typography>

        {emojis.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              top: item.top,
              left: item.left,
              fontSize: "2rem",
              opacity: 0.3,
              userSelect: "none",
              pointerEvents: "none",
              animation: `${floatAnim} ${
                4 + Math.random() * 4
              }s ease-in-out infinite`,
            }}
          >
            {item.emoji}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;
