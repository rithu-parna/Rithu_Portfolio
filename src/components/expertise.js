import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import LogisticImg from "../assets/images/bglogistic.jpg";
import SmarterHomes from "../assets/images/smarterhome.jpg";
import Jwellery from "../assets/images/jwellery.jpg";

const RealTimeCollabCard = () => {
  return (
    <Box sx={{ background: "#161b22", mt: -10, pb: 10 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 600,
          color: "#fff",
          mt: 10,
          mb: 0,
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Live Projects
      </Typography>

      <Box
        sx={{
          mt: { xs: 8, sm: 8, md: 8, lg: 8, xl: 8 },
          backgroundColor: "#21262d",
          color: "#fff",
          borderRadius: 2,
          ml: { xs: 4, sm: 4, md: 6, lg: 10, xl: 10 },
          mr: { xs: 4, sm: 4, md: 6, lg: 10, xl: 10 },
          pt: { xs: 7, sm: 7, md: 6, lg: 0, xl: 0 },
          pl: 4,
          pr: { xs: 4, sm: 4, md: 4, lg: 0, xl: 0 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, fontFamily: "Poppins, sans-serif" }}
          >
            Supply Chain Management (CRM)
          </Typography>
          <Typography
            sx={{
              mt: 1,
              color: "#9ca3af",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Designed a CRM system from scratch for supply chain management.{" "}
          </Typography>

          <Typography
            sx={{
              mt: 3,
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Performance Metrics
          </Typography>

          <Box sx={{ display: "flex", gap: 4, mt: 1 }}>
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "rgb(96 165 250 / 1)", fontWeight: 600 }}
              >
                95
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  color: "#9ca3af",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Performance
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "rgb(96 165 250 / 1)",
                  fontWeight: 600,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                98
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  color: "#9ca3af",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Accessibility
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{ color: "rgb(96 165 250 / 1)", fontWeight: 600 }}
              >
                100
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  color: "#9ca3af",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Seo
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              mt: 4,
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Technical Implementation
          </Typography>

          <List dense sx={{ color: "#aaffaa" }}>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon sx={{ color: "#aaffaa" }} />
              </ListItemIcon>
              <ListItemText
                primary="Built a support module with integrated ticketing system."
                sx={{
                  color: "#d1d5db",
                  fontFamily: "Poppins, sans-serif",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon sx={{ color: "#aaffaa" }} />
              </ListItemIcon>
              <ListItemText
                primary="Built service booking tabs for approvals and data entry."
                sx={{
                  color: "#d1d5db",
                  fontFamily: "Poppins, sans-serif",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon sx={{ color: "#aaffaa" }} />
              </ListItemIcon>
              <ListItemText
                primary="Built billing modules for transactions and invoicing."
                sx={{
                  color: "#d1d5db",
                  fontFamily: "Poppins, sans-serif",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon sx={{ color: "#aaffaa" }} />
              </ListItemIcon>
              <ListItemText
                primary="Handled user create, update, suspend, and reset."
                sx={{
                  color: "#d1d5db",
                  fontFamily: "Poppins, sans-serif",
                }}
              />
            </ListItem>
          </List>
        </Box>

        {/* Right Section */}
        <Box
          component="img"
          src={LogisticImg}
          alt="Code Screenshot"
          sx={{
            width: { xs: "100%", md: "50%" },
            borderTopRightRadius: 3,
            borderBottomRightRadius: 3,

            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,

            height: "469px",
            // maxHeight: 590,
            objectFit: "cover",
            WebkitMaskImage: {
              xs: "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,1))",
              sm: "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,1))",
              md: "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,1))",
              lg: "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,1))",
              xl: "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,1))",
            },
            maskImage: {
              xs: "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,1))",
              sm: "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,1))",
              md: "linear-gradient(to right, rgba(0,0,0,0.0), rgba(0,0,0,1))",
              lg: "linear-gradient(to right, rgba(0,0,0,0.0), rgba(0,0,0,1))",
              xl: "linear-gradient(to right, rgba(0,0,0,0.0), rgba(0,0,0,1))",
            },
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      </Box>
      <Box
        sx={{
          mt: { xs: 8, sm: 8, md: 8, lg: 8, xl: 8 },
          backgroundColor: "#21262d",
          color: "#fff",
          borderRadius: 2,
          ml: { xs: 4, sm: 4, md: 6, lg: 10, xl: 10 },
          mr: { xs: 4, sm: 4, md: 6, lg: 10, xl: 10 },
          pt: { xs: 3, sm: 7, md: 6, lg: 0, xl: 0 },
          pl: 4,
          pr: { xs: 4, sm: 4, md: 4, lg: 0, xl: 0 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, mt: 5, fontFamily: "Poppins, sans-serif" }}
          >
            Wateron
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9ca3af", fontFamily: "Poppins, sans-serif" }}
          >
            Designed forntend for admin billing to generate flat-wise water
            bills.
          </Typography>

          <Typography
            sx={{ mt: 3, fontWeight: 600, fontFamily: "Poppins, sans-serif" }}
          >
            Performance Metrics
          </Typography>

          <Box sx={{ display: "flex", gap: 4, mt: 1 }}>
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "rgb(96 165 250 / 1)", fontWeight: 600 }}
              >
                95
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  color: "#9ca3af",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Performance
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "rgb(96 165 250 / 1)",
                  fontWeight: 600,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                98
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  color: "#9ca3af",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Accessibility
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "rgb(96 165 250 / 1)",
                  fontWeight: 600,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                100
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  color: "#9ca3af",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Seo
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{ mt: 4, fontWeight: 600, fontFamily: "Poppins, sans-serif" }}
          >
            Technical Implementation
          </Typography>

          <List dense sx={{ color: "#aaffaa", mb: 4 }}>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon sx={{ color: "#aaffaa" }} />
              </ListItemIcon>
              <ListItemText
                primary="UI to monitor apartment-wise water usage & status
"
                sx={{
                  color: "#d1d5db",
                  fontFamily: "Poppins, sans-serif",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon sx={{ color: "#aaffaa" }} />
              </ListItemIcon>
              <ListItemText
                primary="Valve control interface to manage water supply per flat
"
                sx={{
                  color: "#d1d5db",
                  fontFamily: "Poppins, sans-serif",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon sx={{ color: "#aaffaa" }} />
              </ListItemIcon>
              <ListItemText
                primary="Forms&tables to view & edit apartment data.
"
                sx={{
                  color: "#d1d5db",
                  fontFamily: "Poppins, sans-serif",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon sx={{ color: "#aaffaa" }} />
              </ListItemIcon>
              <ListItemText
                primary="Billing screen to generate water bills based on usage."
                sx={{
                  color: "#d1d5db",
                  fontFamily: "Poppins, sans-serif",
                }}
              />
            </ListItem>
          </List>
        </Box>

        {/* Right Section */}
        <Box
          component="img"
          src={SmarterHomes}
          alt="Code Screenshot"
          sx={{
            width: { xs: "100%", md: "50%" },
            borderTopRightRadius: 3,
            borderBottomRightRadius: 3,

            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,

            height: "469px",
            // maxHeight: 590,
            objectFit: "cover",
            WebkitMaskImage: {
              xs: "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,1))",
              sm: "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,1))",
              md: "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,1))",
              lg: "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,1))",
              xl: "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,1))",
            },
            maskImage: {
              xs: "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,1))",
              sm: "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,1))",
              md: "linear-gradient(to right, rgba(0,0,0,0.0), rgba(0,0,0,1))",
              lg: "linear-gradient(to right, rgba(0,0,0,0.0), rgba(0,0,0,1))",
              xl: "linear-gradient(to right, rgba(0,0,0,0.0), rgba(0,0,0,1))",
            },
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      </Box>
      <Box
        sx={{
          mt: { xs: 8, sm: 8, md: 8, lg: 8, xl: 8 },
          backgroundColor: "#21262d",
          color: "#fff",
          borderRadius: 2,
          mb: 8,
          ml: { xs: 4, sm: 4, md: 6, lg: 10, xl: 10 },
          mr: { xs: 4, sm: 4, md: 6, lg: 10, xl: 10 },
          pt: { xs: 7, sm: 7, md: 6, lg: 0, xl: 0 },
          pl: 4,
          pr: { xs: 4, sm: 4, md: 4, lg: 0, xl: 0 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, fontFamily: "Poppins, sans-serif" }}
          >
            Savitha Jewellery Website
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9ca3af", fontFamily: "Poppins, sans-serif" }}
          >
            Complete design of a modern showcase website for a luxury jewelry
            brand.{" "}
          </Typography>

          <Typography
            sx={{ mt: 3, fontWeight: 600, fontFamily: "Poppins, sans-serif" }}
          >
            Performance Metrics
          </Typography>

          <Box sx={{ display: "flex", gap: 4, mt: 1 }}>
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "rgb(96 165 250 / 1)", fontWeight: 600 }}
              >
                95
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  color: "#9ca3af",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Performance
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{ color: "rgb(96 165 250 / 1)", fontWeight: 600 }}
              >
                98
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  color: "#9ca3af",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Accessibility
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{ color: "rgb(96 165 250 / 1)", fontWeight: 600 }}
              >
                100
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  color: "#9ca3af",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Seo
              </Typography>
            </Box>
          </Box>

          <Typography sx={{ mt: 4, fontWeight: 600 }}>
            Technical Implementation
          </Typography>

          <List dense sx={{ color: "#aaffaa" }}>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon sx={{ color: "#aaffaa" }} />
              </ListItemIcon>
              <ListItemText
                primary="Designed the entire UI from scratch."
                sx={{
                  color: "#d1d5db",
                  fontFamily: "Poppins, sans-serif",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon sx={{ color: "#aaffaa" }} />
              </ListItemIcon>
              <ListItemText
                primary="Created a premium, elegant showcase for jewelry collections."
                sx={{
                  color: "#d1d5db",
                  fontFamily: "Poppins, sans-serif",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon sx={{ color: "#aaffaa" }} />
              </ListItemIcon>
              <ListItemText
                primary="Highlighted product photography with clean design."
                sx={{
                  color: "#d1d5db",
                  fontFamily: "Poppins, sans-serif",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon sx={{ color: "#aaffaa" }} />
              </ListItemIcon>
              <ListItemText
                primary="Focused on minimal aesthetics and responsive layouts."
                sx={{
                  color: "#d1d5db",
                  fontFamily: "Poppins, sans-serif",
                }}
              />
            </ListItem>
          </List>
        </Box>

        {/* Right Section */}
        <Box
          component="img"
          src={Jwellery}
          alt="Code Screenshot"
          sx={{
            width: { xs: "100%", md: "50%" },
            borderTopRightRadius: 3,
            borderBottomRightRadius: 3,

            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,

            height: "469px",
            // maxHeight: 590,
            objectFit: "cover",
            WebkitMaskImage: {
              xs: "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,1))",
              sm: "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,1))",
              md: "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,1))",
              lg: "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,1))",
              xl: "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,1))",
            },
            maskImage: {
              xs: "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,1))",
              sm: "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,1))",
              md: "linear-gradient(to right, rgba(0,0,0,0.0), rgba(0,0,0,1))",
              lg: "linear-gradient(to right, rgba(0,0,0,0.0), rgba(0,0,0,1))",
              xl: "linear-gradient(to right, rgba(0,0,0,0.0), rgba(0,0,0,1))",
            },

            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      </Box>
    </Box>
  );
};

export default RealTimeCollabCard;
