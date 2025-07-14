// import React from "react";
// import { Box, IconButton } from "@mui/material";
// import {
//   Home,
//   Info,
//   Assignment,
//   LocationOn,
//   Work,
//   Description,
// } from "@mui/icons-material";

// const menuItems = [
//   { icon: <Home />, target: "herosection" },
//   { icon: <Assignment />, target: "contact" },
//   { icon: <LocationOn />, target: "location" },
//   { icon: <Info />, target: "contact" },
//   { icon: <Work />, target: "contact" },
//   { icon: <Description />, target: "location" },
// ];

// const Sidebar = () => {
//   const handleScroll = (id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <Box
//       sx={{
//         width: "80px",
//         height: "100vh",
//         position: "fixed",
//         left: 0,
//         top: 0,
//         backgroundColor: "#121212",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         gap: 2,
//         zIndex: 1000,
//       }}
//     >
//       {menuItems.map(({ icon, target }, i) => (
//         <IconButton
//           key={i}
//           onClick={() => handleScroll(target)}
//           sx={{ color: "#fff", "&:hover": { color: "#00ffae" } }}
//         >
//           {icon}
//         </IconButton>
//       ))}
//     </Box>
//   );
// };

// export default Sidebar;
