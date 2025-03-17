"use client";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "../context/ThemeContext";
import { getTheme } from "../styles/theme";
import "../mocks/init-msw";

export default function ClientWrapper({ children }) {
  const { mode } = useTheme();

  return (
    <MuiThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <main>{children}</main>
    </MuiThemeProvider>
  );
}
