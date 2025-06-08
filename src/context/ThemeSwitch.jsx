import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Sun icon
import Brightness2Icon from "@mui/icons-material/Brightness2"; // Moon icon
import { useColorMode } from "./ThemeContext"; // Your context hook

const SwitchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#f0f0f0",
  borderRadius: 30,
  width: 80,
  padding: 2,
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: theme.shadows[1],
}));

const IconWrapper = styled(IconButton)(({ theme, active }) => ({
  borderRadius: "50%",
  backgroundColor: active ? "#304ffe" : "transparent",
  color: active ? "#fff" : theme.palette.mode === "dark" ? "#aaa" : "#555",
  transition: "background-color 0.3s, color 0.3s",
  "&:hover": {
    backgroundColor: active ? "#304ffe" : "#ddd",
    color: active ? "#fff" : "#222",
  },
}));

export default function ThemeToggleTwoIcons() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <SwitchContainer>
      <IconWrapper
        active={mode === "light" ? 1 : 0}
        onClick={() => mode !== "light" && toggleColorMode()}
        aria-label="Switch to Light Mode"
        size="small"
      >
        <Brightness7Icon />
      </IconWrapper>
      <IconWrapper
        active={mode === "dark" ? 1 : 0}
        onClick={() => mode !== "dark" && toggleColorMode()}
        aria-label="Switch to Dark Mode"
        size="small"
      >
        <Brightness2Icon />
      </IconWrapper>
    </SwitchContainer>
  );
}
