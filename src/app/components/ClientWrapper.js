"use client";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "../context/ThemeContext";
import { getTheme } from "../styles/theme";
import Navbar from "./ui/Navbar";

export default function ClientWrapper({ children }) {
  const { mode } = useTheme();

  return (
    <MuiThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <Navbar />
      <main>{children}</main>
    </MuiThemeProvider>
  );
}
