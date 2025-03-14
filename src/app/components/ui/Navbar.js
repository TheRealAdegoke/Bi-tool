"use client";
import { Button, Box, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "@/app/context/ThemeContext";
import { useAuth } from "@/app/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { mode, toggleTheme } = useTheme();
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        bgcolor: "background.paper",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Link href="/" className="text-2xl font-bold text-blue-600">
        BI Tool
      </Link>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={toggleTheme} sx={{ mr: 2 }}>
          {mode === "light" ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
        {user ? (
          <>
            <Button
              variant="outlined"
              sx={{ mr: 2 }}
              onClick={() => router.push("/dashboard")}
            >
              Dashboard
            </Button>
            <Button variant="contained" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outlined"
              sx={{ mr: 2 }}
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
            <Button
              variant="contained"
              onClick={() => router.push("/register")}
            >
              Register
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
