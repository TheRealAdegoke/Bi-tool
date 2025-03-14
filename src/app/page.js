import { Box, Typography, Button, Grid2 } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          py: 12,
          textAlign: "center",
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/hero-bg.jpg')",
          backgroundSize: "cover",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Unlock Business Insights
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, maxWidth: 600, mx: "auto" }}>
          Visualize data, track metrics, and make informed decisions.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: "primary.main",
            color: "white",
            "&:hover": { bgcolor: "primary.dark" },
          }}
        >
          <Link href="/register">Get Started</Link>
        </Button>
      </Box>

      <Box
        sx={{
          py: 8,
          px: 4,
          maxWidth: 1200,
          mx: "auto",
          bgcolor: "background.default",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
          Key Features
        </Typography>
        <Grid2 container spacing={4}>
          <Grid2 item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Metrics
              </Typography>
              <Typography>Real-time business KPIs.</Typography>
            </Box>
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Charts
              </Typography>
              <Typography>Interactive data visualizations.</Typography>
            </Box>
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Secure
              </Typography>
              <Typography>Protected user access.</Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}
