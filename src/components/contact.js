// import React from "react";
// import {
//   Box,
//   Typography,
//   LinearProgress,
//   Stack,
//   Paper,
//   Grid,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";

// const skillsData = [
//   {
//     title: "Frontend Development",
//     icon: "🎨",
//     color: "#3b82f6", // Blue
//     skills: [
//       { name: "React & Angular", value: 95 },
//       { name: "Javascript & TypeScript", value: 90 },
//       { name: "Modern CSS", value: 95 },
//       { name: "Web Animation", value: 85 },
//     ],
//   },
//   {
//     title: "Backend & APIs",
//     icon: "⚡",
//     color: "#22c55e", // Green
//     skills: [
//       { name: "Python & Django", value: 90 },
//       { name: "RESTful APIs", value: 95 },
//       { name: "MySQL", value: 85 },
//       { name: "Database Design & Postman", value: 88 },
//     ],
//   },
//   {
//     title: "Performance & DevOps",
//     icon: "🚀",
//     color: "#a855f7", // Purple
//     skills: [
//       { name: "Web Performance", value: 92 },
//       { name: "CI/CD", value: 88 },
//       { name: "Docker", value: 85 },
//       { name: "AWS", value: 82 },
//     ],
//   },
// ];
// const AnimatedLinearProgress = styled(LinearProgress)(({ colorval }) => ({
//   height: 8,
//   borderRadius: 5,
//   backgroundColor: "#2e2e2e",
//   "& .MuiLinearProgress-bar": {
//     backgroundColor: colorval,
//     transition: "width 1.2s ease-in-out",
//   },
// }));

// const SkillCard = ({ icon, title, skills, color }) => {
//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         marginTop: { xs: 0, sm: 0, md: "12px", lg: 0, xl: 0 },
//         backgroundColor: "#21262d",
//         borderRadius: 3,
//         p: 3,
//         width: { xs: 275, sm: 390, md: 300, xl: 300, lg: 300 },
//         transition: "transform 0.3s",
//         "&:hover": {
//           transform: "translateY(-8px)",
//         },
//       }}
//     >
//       <Typography
//         variant="h6"
//         sx={{
//           mb: 2,
//           color: "#fff",
//           fontWeight: "600",
//           fontFamily: "Poppins, sans-serif",
//         }}
//       >
//         <span style={{ fontSize: "1.5rem", marginRight: 8 }}>{icon}</span>
//         {title}
//       </Typography>
//       <Stack spacing={2}>
//         {skills.map((skill, index) => (
//           <Box key={index}>
//             <Stack direction="row" justifyContent="space-between">
//               <Typography
//                 variant="body2"
//                 color="#fff"
//                 sx={{ fontFamily: "Poppins, sans-serif" }}
//               >
//                 {skill.name}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 color="#ccc"
//                 sx={{ fontFamily: "Poppins, sans-serif" }}
//               >
//                 {skill.value}%
//               </Typography>
//             </Stack>
//             <AnimatedLinearProgress
//               variant="determinate"
//               value={skill.value}
//               colorval={color}
//             />
//           </Box>
//         ))}
//       </Stack>
//     </Paper>
//   );
// };

// const TechnicalExpertise = () => {
//   return (
//     <Box
//       sx={{
//         background: "#161b22",
//         py: 8,
//         px: 2,
//         textAlign: "center",
//         color: "#fff",
//       }}
//     >
//       <Typography variant="h4" sx={{ mb: 4, fontWeight: "600" }}>
//         Technical Expertise
//       </Typography>
//       <Grid container spacing={2} justifyContent={"center"} display={"flex"}>
//         {skillsData.map((category, index) => (
//           <Grid
//             size={{ xs: 12, md: 6, sm: 12, lg: 4, xl: 3 }}
//             justifyContent={"center"}
//             display={"flex"}
//           >
//             <SkillCard key={index} {...category} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default TechnicalExpertise;
import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Stack,
  Paper,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

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
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          color: "#fff",
          fontWeight: "600",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <span style={{ fontSize: "1.5rem", marginRight: 8 }}>{icon}</span>
        {title}
      </Typography>
      <Stack spacing={2}>
        {skills.map((skill, index) => (
          <Box key={index}>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                variant="body2"
                color="#fff"
                sx={{ fontFamily: "Poppins, sans-serif" }}
              >
                {skill.name}
              </Typography>
              <Typography
                variant="body2"
                color="#ccc"
                sx={{ fontFamily: "Poppins, sans-serif" }}
              >
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      // Change 'once: true' to 'once: false' to re-trigger on every scroll
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
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
      <Grid container spacing={2} justifyContent={"center"} display={"flex"}>
        {skillsData.map((category, index) => (
          <Grid
            component={motion.div}
            variants={itemVariants}
            key={index}
            item
            xs={12}
            md={6}
            lg={4}
            xl={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <SkillCard {...category} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechnicalExpertise;
