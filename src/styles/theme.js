import { createTheme } from "@mui/material/styles";

const lightTheme = {
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
    background: { default: "#f5f5f5", paper: "#ffffff" },
  },
};

const darkTheme = {
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#f48fb1" },
    background: { default: "#121212", paper: "#1e1e1e" },
  },
};

export const getTheme = (mode) =>
  createTheme({
    ...(mode === "dark" ? darkTheme : lightTheme),
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
  });
