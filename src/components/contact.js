// import React from "react";
// import { Box, Typography, Grid, TextField, Button } from "@mui/material";

// const Contact = () => {
//   return (
//     <Box sx={{ p: 4, color: "#fff" }}>
//       <Typography variant="h4" mb={2}>
//         Let's Get in Touch!
//       </Typography>

//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={12}>
//           <Typography fontSize={14} mb={1}>
//             Phone
//           </Typography>
//           <Typography fontWeight={500}>+91 77361 41202</Typography>
//         </Grid>
//         <Grid item xs={12} sm={12}>
//           <Typography fontSize={14} mb={1}>
//             Email
//           </Typography>
//           <Typography fontWeight={500}>jlkshmikv@gmail.com</Typography>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography fontSize={14} mb={1}>
//             Address
//           </Typography>
//           <Typography fontWeight={500}>Quilandy, Calicut, Kerala</Typography>
//         </Grid>

//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label="Your Name"
//             variant="outlined"
//             sx={{ backgroundColor: "#222" }}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label="Your Email"
//             variant="outlined"
//             sx={{ backgroundColor: "#222" }}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="Your Message"
//             multiline
//             rows={4}
//             variant="outlined"
//             sx={{ backgroundColor: "#222" }}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <Button
//             fullWidth
//             variant="contained"
//             sx={{ backgroundColor: "#00ffae" }}
//           >
//             Send a Message
//           </Button>
//         </Grid>
//       </Grid>

//       {/* Embedded Map */}
//       <Box mt={4}>
//         <iframe
//           src="https://maps.google.com/maps?q=Koyilandy, Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
//           width="100%"
//           height="250"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           title="Google Map"
//         ></iframe>
//       </Box>
//     </Box>
//   );
// };

// export default Contact;

import React from "react";
import { Box, Typography, LinearProgress, Stack, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const skillsData = [
  {
    title: "Frontend Development",
    icon: "🎨",
    color: "#3b82f6", // Blue
    skills: [
      { name: "React & Angular", value: 95 },
      { name: "Javascript & TypeScript", value: 90 },
      { name: "Modern CSS", value: 95 },
      { name: "Web Animation", value: 85 },
    ],
  },
  {
    title: "Backend & APIs",
    icon: "⚡",
    color: "#22c55e", // Green
    skills: [
      { name: "Python & Django", value: 90 },
      { name: "RESTful APIs", value: 95 },
      { name: "MySQL", value: 85 },
      { name: "Database Design & Postman", value: 88 },
    ],
  },
  {
    title: "Performance & DevOps",
    icon: "🚀",
    color: "#a855f7", // Purple
    skills: [
      { name: "Web Performance", value: 92 },
      { name: "CI/CD", value: 88 },
      { name: "Docker", value: 85 },
      { name: "AWS", value: 82 },
    ],
  },
];
const AnimatedLinearProgress = styled(LinearProgress)(({ colorval }) => ({
  height: 8,
  borderRadius: 5,
  backgroundColor: "#2e2e2e",
  "& .MuiLinearProgress-bar": {
    backgroundColor: colorval,
    transition: "width 1.2s ease-in-out",
  },
}));

const SkillCard = ({ icon, title, skills, color }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        marginTop: { xs: 0, sm: 0, md: "12px", lg: 0, xl: 0 },
        backgroundColor: "#21262d",
        borderRadius: 3,
        p: 3,
        width: { xs: 275, sm: 390, md: 300, xl: 300, lg: 300 },
        transition: "transform 0.3s",
        "&:hover": {
          transform: "translateY(-8px)",
        },
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, color: "#fff", fontWeight: "600" }}>
        <span style={{ fontSize: "1.5rem", marginRight: 8 }}>{icon}</span>
        {title}
      </Typography>
      <Stack spacing={2}>
        {skills.map((skill, index) => (
          <Box key={index}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" color="#fff">
                {skill.name}
              </Typography>
              <Typography variant="body2" color="#ccc">
                {skill.value}%
              </Typography>
            </Stack>
            <AnimatedLinearProgress
              variant="determinate"
              value={skill.value}
              colorval={color}
            />
          </Box>
        ))}
      </Stack>
    </Paper>
  );
};

const TechnicalExpertise = () => {
  return (
    <Box
      sx={{
        background: "#161b22",
        py: 8,
        px: 2,
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "600" }}>
        Technical Expertise
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {skillsData.map((category, index) => (
          <SkillCard key={index} {...category} />
        ))}
      </Stack>
    </Box>
  );
};

export default TechnicalExpertise;
