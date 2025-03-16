"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import DataTable from "./DataTable";
import { BarChart } from "../components/charts/BarChart";
import { LineChart } from "../components/charts/LineChart";
import { PieChart } from "../components/charts/PieChart";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const { token, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch("/api/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const result = await res.json();
        if (!res.ok) throw new Error(result.error);
        setData(result);
      } catch (err) {
        logout();
      }
    };
    fetchData();
  }, [token, router, logout]);

  if (!data) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          bgcolor: "background.default",
        }}
        className="min-h-screen"
      >
        <Box
          sx={{
            textAlign: "center",
            p: 4,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
          className="shadow-lg animate-pulse"
        >
          <CircularProgress size={60} thickness={4} color="primary" />
          <Typography
            variant="h6"
            sx={{ mt: 2, fontWeight: "medium", color: "text.secondary" }}
          >
            Loading Dashboard...
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{ p: 4, maxWidth: 1400, mx: "auto", bgcolor: "background.default" }}
      className="min-h-screen"
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Dashboard
        </Typography>
        <Button
          variant="outlined"
          onClick={logout}
          className="border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          Logout
        </Button>
      </Box>

      {/* Metrics Summary */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 3,
        }}
      >
        {[
          { title: "Total Users", value: data.metrics.totalUsers },
          { title: "Active Sessions", value: data.metrics.activeSessions },
          {
            title: "Sales Revenue",
            value: `$${data.metrics.salesRevenue.toLocaleString()}`,
          },
        ].map((metric) => (
          <Card
            key={metric.title}
            sx={{ bgcolor: "background.paper" }}
            className="shadow-md"
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

      {/* Charts */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 3,
          mt: 3,
        }}
      >
        <Card sx={{ p: 2, bgcolor: "background.paper" }} className="shadow-md">
          <Typography variant="h6" sx={{ mb: 2 }}>
            Sales Trend
          </Typography>
          <LineChart data={data.salesTrends} />
        </Card>
        <Card sx={{ p: 2, bgcolor: "background.paper" }} className="shadow-md">
          <Typography variant="h6" sx={{ mb: 2 }}>
            User Growth
          </Typography>
          <BarChart data={data.userGrowth} />
        </Card>
        <Card sx={{ p: 2, bgcolor: "background.paper" }} className="shadow-md">
          <Typography variant="h6" sx={{ mb: 2 }}>
            Category Distribution
          </Typography>
          <PieChart data={data.categoryDistribution} />
        </Card>
      </Box>

      {/* Data Table */}
      <Box sx={{ mt: 4 }}>
        <Card sx={{ p: 2, bgcolor: "background.paper" }} className="shadow-md">
          <Typography variant="h6" sx={{ mb: 2 }}>
            Sales Data
          </Typography>
          <DataTable data={data.tableData} />
        </Card>
      </Box>
    </Box>
  );
}
