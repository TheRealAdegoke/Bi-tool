"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Grid2,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DataTable from "./DataTable";
import { useAuth } from "../context/AuthContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Styled Components
const DashboardWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 1280,
  margin: "0 auto",
  background: theme.palette.grey[50],
  minHeight: "100vh",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const StatCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
  borderRadius: 16,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  padding: theme.spacing(2),
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
    transform: "translateY(-2px)",
  },
}));

const ChartWrapper = styled(Paper)(({ theme }) => ({
  background: "#ffffff",
  borderRadius: 16,
  padding: theme.spacing(3),
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
  border: `1px solid ${theme.palette.grey[200]}`,
  overflow: "hidden",
  width: "100%", // Full width by default
  [theme.breakpoints.down("sm")]: {
    width: "90%", // 90% width on small screens
    marginLeft: "auto", // Center with mx-auto
    marginRight: "auto",
  },
}));

// Chart Data and Options
const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Sales",
      data: [400, 300, 600, 800, 500],
      borderColor: "#4f46e5",
      backgroundColor: "rgba(79, 70, 229, 0.2)",
      borderWidth: 3,
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 8,
    },
  ],
};

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top", labels: { font: { size: 14 } } },
    tooltip: {
      backgroundColor: "#fff",
      titleColor: "#1f2937",
      bodyColor: "#1f2937",
      borderColor: "#e5e7eb",
      borderWidth: 1,
      cornerRadius: 8,
      padding: 10,
    },
  },
  scales: {
    x: { grid: { display: false }, ticks: { color: "#6b7280" } },
    y: { grid: { color: "#e5e7eb" }, ticks: { color: "#6b7280" } },
  },
};

const barData = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      label: "Users",
      data: [300, 450, 600, 750],
      backgroundColor: "#10b981",
      borderRadius: 8,
      barThickness: 40,
    },
  ],
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top", labels: { font: { size: 14 } } },
    tooltip: {
      backgroundColor: "#fff",
      titleColor: "#1f2937",
      bodyColor: "#1f2937",
      borderColor: "#e5e7eb",
      borderWidth: 1,
      cornerRadius: 8,
      padding: 10,
    },
  },
  scales: {
    x: { grid: { display: false }, ticks: { color: "#6b7280" } },
    y: { grid: { color: "#e5e7eb" }, ticks: { color: "#6b7280" } },
  },
};

const pieData = {
  labels: ["Tech", "Fashion", "Food", "Other"],
  datasets: [
    {
      label: "Categories",
      data: [400, 300, 200, 100],
      backgroundColor: ["#4f46e5", "#10b981", "#f59e0b", "#ef4444"],
      borderWidth: 0,
      hoverOffset: 10,
    },
  ],
};

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "right", labels: { font: { size: 14 } } },
    tooltip: {
      backgroundColor: "#fff",
      titleColor: "#1f2937",
      bodyColor: "#1f2937",
      borderColor: "#e5e7eb",
      borderWidth: 1,
      cornerRadius: 8,
      padding: 10,
    },
  },
};

// Custom Chart Components
const CustomLineChart = () => (
  <div style={{ height: "300px" }}>
    <Line data={lineData} options={lineOptions} />
  </div>
);

const CustomBarChart = () => (
  <div style={{ height: "300px" }}>
    <Bar data={barData} options={barOptions} />
  </div>
);

const CustomPieChart = () => (
  <div style={{ height: "300px" }}>
    <Pie data={pieData} options={pieOptions} />
  </div>
);

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
    <DashboardWrapper>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "text.primary",
            letterSpacing: "-0.5px",
          }}
        >
          Dashboard
        </Typography>
        <Typography variant="body2" sx={{ color: "grey.600", mt: 1 }}>
          Real-time insights into your business performance
        </Typography>
        <Divider sx={{ mt: 2, borderColor: "grey.200" }} />
      </Box>

      {/* Stats */}
      <Grid2 container spacing={3} sx={{ mb: 4 }}>
        {[
          { title: "Total Users", value: "1,234", trend: "+12%" },
          { title: "Active Sessions", value: "567", trend: "+8%" },
          { title: "Sales Revenue", value: "$12,345", trend: "+15%" },
        ].map((stat) => (
          <Grid2 item xs={12} sm={6} md={4} key={stat.title}>
            <StatCard>
              <CardContent>
                <Typography variant="body2" sx={{ color: "grey.600" }}>
                  {stat.title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "baseline", mt: 1 }}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 600, color: "primary.main" }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      ml: 1,
                      color: stat.trend.startsWith("+")
                        ? "success.main"
                        : "error.main",
                    }}
                  >
                    {stat.trend}
                  </Typography>
                </Box>
              </CardContent>
            </StatCard>
          </Grid2>
        ))}
      </Grid2>

      {/* Charts */}
      <Grid2 container spacing={3}>
        <Grid2 item xs={12} md={8}>
          <ChartWrapper>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Sales Trend
            </Typography>
            <CustomLineChart />
          </ChartWrapper>
        </Grid2>
        <Grid2 item xs={12} md={4}>
          <ChartWrapper>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Category Distribution
            </Typography>
            <CustomPieChart />
          </ChartWrapper>
        </Grid2>
        <Grid2 item xs={12}>
          <ChartWrapper>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              User Growth
            </Typography>
            <CustomBarChart />
          </ChartWrapper>
        </Grid2>
        <Grid2 item xs={12}>
          <ChartWrapper>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Sales Data
            </Typography>
            <DataTable />
          </ChartWrapper>
        </Grid2>
      </Grid2>
    </DashboardWrapper>
  );
}
