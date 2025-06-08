import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FloatingWeatherCard from "./FloatingWeatherCard";
import { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const DEFAULT_CITY = "Bangalore";

const HeroSection = () => {
  const [showCard, setShowCard] = useState(false);
  const theme = useTheme();
  const mode = theme.palette.mode;

  const background =
    mode === "dark"
      ? "linear-gradient(to right, #0f2027, #203a43, #2c5364)"
      : "linear-gradient(to right, #2196f3, #21cbf3)";

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: { lat, lon, units: "metric", appid: API_KEY },
        }
      );
      setWeather(data);
      setError(null);
      console.log("api key", API_KEY);
    } catch (err) {
      console.error("Weather API Error:", err);
      setError(
        err.response?.data?.message || err.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCity = async (city) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            units: "metric",
            appid: API_KEY,
          },
        }
      );
      setWeather(data);
      setError(null);
    } catch (err) {
      console.error("Weather API Error:", err);
      setError(
        err.response?.data?.message || err.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCheckWeather = () => {
    setShowCard(true);
    if (!navigator.geolocation) {
      fetchWeatherByCity(DEFAULT_CITY);
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
        },
        () => {
          fetchWeatherByCity(DEFAULT_CITY);
        }
      );
    }
  };

  return (
    <Box
      sx={{
        position: "relative", // enables floating card positioning
        width: "100vw",
        minHeight: "100vh",
        background,
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 2, sm: 4 },
        textAlign: "center",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Floating Weather Card */}
      {showCard && (
        <Box
          sx={{
            position: "absolute",
            top: { xs: 16, md: 32 },
            left: {
              xs: "50%",
              sm: "auto",
              md: "auto",
            },
            right: {
              xs: "auto",
              sm: 16, // move to right for tablet and above
              md: 24,
            },
            transform: {
              xs: "translateX(-50%)",
              sm: "none",
            },
            zIndex: 1000,
            width: {
              xs: "85%", // reduced from 90% for mobile
              sm: "220px", // narrower for tablet
              md: "240px", // slightly wider for desktop
            },
            maxWidth: "240px", // cap max size
          }}
        >
          <FloatingWeatherCard
            weather={weather}
            loading={loading}
            error={error}
          />
        </Box>
      )}

      {/* Hero Content */}
      <Typography
        variant="h2"
        fontWeight="bold"
        mb={2}
        fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" }}
      >
        Weather Updates Wherever You Are
      </Typography>

      <Typography
        variant="h6"
        mb={4}
        fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.25rem" }}
        maxWidth={600}
        mx="auto"
      >
        Get real-time weather updates for your current location - beautifully
        displayed in one click.
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={handleCheckWeather}
        sx={{
          background,
          "&:hover": { bgcolor: "#7b1fa2" },
          fontWeight: "bold",
          px: 4,
          py: 1.5,
        }}
      >
        Check Weather Now
      </Button>
    </Box>
  );
};

export default HeroSection;
