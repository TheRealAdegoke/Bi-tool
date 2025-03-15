"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, Typography, Box } from "@mui/material";
import DataTable from "./DataTable";
import { useAuth } from "../context/AuthContext";
import { BarChart } from "../components/charts/BarChart";
import { LineChart } from "../components/charts/LineChart";
import { PieChart } from "../components/charts/PieChart";

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/auth/login");
  //   }
  // }, [user, router]);

  // if (!user) return null;

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 1400,
        mx: "auto",
        bgcolor: "background.default",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Dashboard
      </Typography>

      {/* Metrics Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 3,
        }}
      >
        {[
          { title: "Total Users", value: "1,234" },
          { title: "Active Sessions", value: "567" },
          { title: "Sales Revenue", value: "$12,345" },
        ].map((metric) => (
          <Card
            key={metric.title}
            sx={{
              bgcolor: "background.paper",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            }}
          >
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                {metric.title}
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
                {metric.value}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Charts Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 3,
          mt: 3,
        }}
      >
        <Card sx={{ p: 2, bgcolor: "background.paper" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Sales Trend
          </Typography>
          <LineChart />
        </Card>

        <Card sx={{ p: 2, bgcolor: "background.paper" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            User Growth
          </Typography>
          <BarChart />
        </Card>

        <Card sx={{ p: 2, bgcolor: "background.paper" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Category Distribution
          </Typography>
          <PieChart />
        </Card>
      </Box>

      {/* Data Table Section */}
      <Box sx={{ mt: 4 }}>
        <Card sx={{ p: 2, bgcolor: "background.paper" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Sales Data
          </Typography>
          <DataTable />
        </Card>
      </Box>
    </Box>
  );
}
