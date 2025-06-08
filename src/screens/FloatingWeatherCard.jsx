import React from "react";
import axios from "axios";
import { Box, Typography, CircularProgress, useTheme } from "@mui/material";

const FloatingWeatherCard = ({ weather, loading, error }) => {
  // const [weather, setWeather] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const theme = useTheme();

  // const fetchWeatherByCity = async (city) => {
  //   try {
  //     setLoading(true);
  //     setError(null);
  //     const { data } = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/weather`,
  //       {
  //         params: { q: city, units: "metric", appid: API_KEY },
  //       }
  //     );
  //     setWeather(data);
  //   } catch (err) {
  //     setError(err.response?.data?.message || err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const fetchWeatherByCoords = async (lat, lon) => {
  //   try {
  //     setLoading(true);
  //     setError(null);
  //     const { data } = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/weather`,
  //       {
  //         params: { lat, lon, units: "metric", appid: API_KEY },
  //       }
  //     );
  //     setWeather(data);
  //   } catch (err) {
  //     setError(err.response?.data?.message || err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (!navigator.geolocation) {
  //     fetchWeatherByCity(DEFAULT_CITY);
  //     return;
  //   }

  //   navigator.geolocation.getCurrentPosition(
  //     (pos) => {
  //       fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
  //     },
  //     () => {
  //       fetchWeatherByCity(DEFAULT_CITY);
  //     }
  //   );
  // }, []);

  const getIconUrl = (icon) =>
    `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <Box
      sx={{
        width: "100%",
        p: 3,
        borderRadius: 3,
        boxShadow: "0 8px 24px rgba(39, 37, 37, 0.15)",
        bgcolor: theme.palette.mode === "dark" ? "#212121" : "#e0e0e0",
        backdropFilter: "blur(10px)",
        textAlign: "center",
        color: theme.palette.mode === "dark" ? "#ffffff" : "",
        userSelect: "none",
        animation: "float 3s ease-in-out infinite",
        "@keyframes float": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(0px)" },
        },
      }}
      aria-live="polite"
    >
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : weather ? (
        <>
          <Typography variant="h6" fontWeight="bold" mb={1}>
            {weather.name}
          </Typography>
          <Box
            component="img"
            src={getIconUrl(weather.weather[0].icon)}
            alt={weather.weather[0].description}
            sx={{ width: 80, height: 80, mx: "auto" }}
          />
          <Typography variant="h4" fontWeight="bold" mt={1}>
            {Math.round(weather.main.temp)}°C
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" mt={0.5}>
            {weather.weather[0].description}
          </Typography>
        </>
      ) : null}
    </Box>
  );
};

export default FloatingWeatherCard;
