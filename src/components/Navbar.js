"use client";
import { Button, Box, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const { mode, toggleTheme } = useTheme();
  const router = useRouter();

  return (
    <header
      className={`xl:px-28 ${mode === "dark" ? "bg-[#1e1e1e]" : "bg-white"}`}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          bgcolor: "background.paper",
        }}
      >
        <Link href="/" className="text-2xl font-bold text-blue-600">
          BI Tool
        </Link>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={toggleTheme} sx={{ mr: 2 }}>
            {mode === "light" ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
          <Button
            variant="outlined"
            sx={{ mr: 2 }}
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
          <Button variant="contained" onClick={() => router.push("/register")}>
            Register
          </Button>
        </Box>
      </Box>
    </header>
  );
}
