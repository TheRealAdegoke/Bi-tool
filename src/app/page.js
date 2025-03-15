"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";

export default function HeroSection() {
  const { mode } = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        px: 3,
        bgcolor: mode === "light" ? "#f5f5f5" : "#121212", // Light/Dark Background
        color: mode === "light" ? "#222" : "#fff", // Light/Dark Text
      }}
    >
      {/* Left Content */}
      <Box sx={{ maxWidth: 600, textAlign: { xs: "center", md: "left" } }}>
        <Typography variant="h3" fontWeight="bold">
          Turn Data into Actionable Insights
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 2, color: mode === "light" ? "#444" : "#ccc" }}
        >
          A powerful BI tool that helps you visualize, analyze, and optimize
          your business performance in real time.
        </Typography>
        <Box
          sx={{
            mt: 4,
            display: "flex",
            gap: 2,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Button variant="contained" color="primary" href="/register">
            Register
          </Button>
          <Button variant="outlined" color="inherit">
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Right Content - Image */}
      <Box sx={{ mt: { xs: 5, md: 0 }, ml: { md: 5 } }}>
        <Image
          src="/Hero Image.png"
          alt="BI Dashboard Preview"
          width={600}
          height={400}
          priority
          style={{
            borderRadius: 10,
            boxShadow:
              mode === "light"
                && "4px 4px 20px rgba(0,0,0,0.1)"
                
          }}
        />
      </Box>
    </Box>
  );
}
