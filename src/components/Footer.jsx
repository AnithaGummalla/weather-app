import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";

const footerLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 4,
      px: { xs: 3, sm: 6 },
      mt: "auto",
      bgcolor: "background.paper",
      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      textAlign: "center",
    }}
  >
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      justifyContent="center"
      mb={2}
    >
      {footerLinks.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          underline="hover"
          color="text.primary"
          sx={{ fontWeight: "medium" }}
        >
          {label}
        </Link>
      ))}
    </Stack>

    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} MyBrand. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
