import React, { useMemo } from "react";
import { Box, Typography, Button, Chip, Stack, keyframes } from "@mui/material";
// import { motion } from "framer-motion";
import reactImg from "../assets/images/react.jpeg";

// import { LinkedIn, Instagram, GitHub, WhatsApp } from "@mui/icons-material";

const techStack = [
  { img: reactImg, text: "React" },
  { img: reactImg, text: "Angular" },
  { img: reactImg, text: "Redux" },
  { img: reactImg, text: "Javascript" },
  { img: reactImg, text: "TypeScript" },
];

const HeroSection = () => {
  const emojis = useMemo(() => {
    return Array.from({ length: 8 }, () => ({
      emoji: ["💻", "⚛️", "🅰️", "🔥", "🐍"][Math.floor(Math.random() * 7)],
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
        {/* Gradient Name */}
        {/* <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "3rem", md: "6rem" },
          fontWeight: "bold",
          background: "linear-gradient(to right, #00ffff, #ff00ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        John Doe
      </Typography> */}
        <Typography
          variant="h1"
          sx={{
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
          <Box
            sx={{
              flex: 1,
              height: "2px",
              backgroundColor: "rgb(96, 165, 250)",
              boxShadow: "0 0 10px rgb(96, 165, 250)",
              opacity: 0.6,
              width: "68px",
            }}
          />

          {/* Web Developer Text */}
          <Typography
            variant="h5"
            sx={{
              color: "#00bcd4",
              mx: 2,
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            Front-End Developer
          </Typography>

          {/* Right Line */}
          <Box
            sx={{
              flex: 1,
              height: "2px",
              backgroundColor: "rgb(96, 165, 250)",
              boxShadow: "0 0 10px rgb(96, 165, 250)",
              opacity: 0.6,
              width: "68px",
            }}
          />
        </Box>
        {/* Description */}
        <Typography variant="subtitle1" sx={{ mt: 2, maxWidth: 600 }}>
          Crafting exceptional digital experiences with modern web technologies
        </Typography>

        {/* Tech Stack */}
        <Stack
          direction="row"
          spacing={1}
          sx={{ mt: 3, flexWrap: "wrap", justifyContent: "center" }}
        >
          {techStack.map((tech, index) => (
            <Chip
              key={index}
              label={tech.text}
              variant="outlined"
              avatar={
                <Box
                  component="img"
                  src={tech.img}
                  alt={tech.text}
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                  }}
                />
              }
              sx={{
                color: "#fff",
                borderColor: "#444",
                backgroundColor: "#1c1c1c",
              }}
            />
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
          }}
        >
          Scroll to explore
          <span style={{ fontSize: "2rem" }}>↓</span>
        </Typography>

        {/* {emojis.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: "absolute",
                  top: item.top,
                  left: item.left,
                  fontSize: "1.5rem",
                  opacity: 0.1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {item.emoji}
              </Box>
            ))} */}
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
