import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MapIcon from "@mui/icons-material/Map";

const FeatureHighlights = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const iconColor =
    theme.palette.mode === "dark" ? "#ffffff" : theme.palette.primary.main;

  const features = [
    {
      id: 1,
      icon: <CloudIcon fontSize="large" sx={{ color: iconColor }} />,
      title: "Accurate Local Weather",
      description:
        "Real-time weather updates tailored to your precise location.",
    },
    {
      id: 2,
      icon: <CalendarTodayIcon fontSize="large" sx={{ color: iconColor }} />,
      title: "7-Day Forecast",
      description:
        "Detailed weather predictions for the upcoming week to help you plan ahead.",
    },
    {
      id: 3,
      icon: <AccessTimeIcon fontSize="large" sx={{ color: iconColor }} />,
      title: "Hourly Updates",
      description:
        "Hourly weather reports so you stay prepared for sudden changes.",
    },
    {
      id: 4,
      icon: <MapIcon fontSize="large" sx={{ color: iconColor }} />,
      title: "Interactive Weather Maps",
      description:
        "Visual radar maps for precipitation, temperature, and wind patterns.",
    },
  ];

  return (
    <Box
      component="section"
      aria-labelledby="feature-highlights-heading"
      sx={{
        px: { xs: 6, md: 6 },
        py: { xs: 6, md: 8 },
        backgroundColor: theme.palette.background.paper,
        textAlign: "center",
        mt: 0.2,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        id="feature-highlights-heading"
        sx={{ mb: 4, fontWeight: "bold", color: theme.palette.text.primary }}
      >
        Key Features
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isSmallScreen ? "1fr" : "repeat(4, 1fr)",
          gap: { xs: 2, md: 4 },
        }}
      >
        {features.map(({ id, icon, title, description }) => (
          <Box
            key={id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: 3,
              borderRadius: 3,
              boxShadow: theme.shadows[3],
              backgroundColor: theme.palette.mode === "dark" ? "#212121" : "",
              height: "100%",
            }}
          >
            <Box sx={{ mb: 2 }}>{icon}</Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 1, color: theme.palette.text.primary }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
              }}
            >
              {description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeatureHighlights;
