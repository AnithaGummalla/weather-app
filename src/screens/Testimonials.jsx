import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/100?img=32",
    quote:
      "This weather app is incredibly accurate and easy to use. It helps me plan my week with confidence!",
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/100?img=12",
    quote:
      "The hourly updates and interactive maps are a game changer. Great job on the UI too!",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "UX Designer",
    avatar: "https://i.pravatar.cc/100?img=44",
    quote:
      "I love how clean and responsive this app is. The team clearly focused on user experience.",
  },
];

const Testimonials = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="section"
      aria-labelledby="testimonials-heading"
      sx={{
        maxWidth: "100%",
        mx: "auto",
        px: 3,
        py: 8,
        mt: 0.2,
        display: "grid",
        gap: 4,
        gridTemplateColumns: isSmall ? "1fr" : "repeat(3, 1fr)",
        textAlign: "center",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography
        id="testimonials-heading"
        variant="h4"
        component="h2"
        sx={{
          gridColumn: "1 / -1",
          mb: 2,
          fontWeight: "bold",
          color: theme.palette.text.primary,
        }}
      >
        What Our Users Say
      </Typography>

      {testimonials.map(({ id, name, role, avatar, quote }) => (
        <Paper
          key={id}
          elevation={3}
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 2,
            bgcolor: "background.paper",
          }}
        >
          <Avatar
            src={avatar}
            alt={`${name} avatar`}
            sx={{ width: 60, height: 80, mb: 3 }}
          />
          <Typography variant="body1" fontStyle="italic" mb={3}>
            “{quote}”
          </Typography>
          <Typography variant="subtitle1" fontWeight="600">
            {name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {role}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Testimonials;
