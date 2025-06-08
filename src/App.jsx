import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./App.css";
import HeroSection from "./screens/HeroSection";
import Navbar from "./screens/Navbar";
import FloatingElements from "./components/FloatingSection";
import FeatureHighlights from "./screens/FeatureHighlights";
import Testimonials from "./screens/Testimonials";
import Footer from "./components/Footer";
import FloatingWeatherCard from "./screens/FloatingWeatherCard";
import { CustomThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <CustomThemeProvider>
      <Navbar />
      <HeroSection />
      <FloatingElements />
      <FeatureHighlights />
      <Testimonials />
      <Footer />
    </CustomThemeProvider>
  );
}

export default App;
