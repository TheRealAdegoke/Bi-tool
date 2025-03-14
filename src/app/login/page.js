"use client";
import { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    try {
      await login(email, password, keepLoggedIn);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        p: 4,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
      >
        Sign In
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={keepLoggedIn}
              onChange={(e) => setKeepLoggedIn(e.target.checked)}
            />
          }
          label="Keep me logged in"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2, py: 1.5 }}
        >
          Login
        </Button>
        <Typography sx={{ mt: 2, textAlign: "center" }}>
          Don’t have an account?{" "}
          <Link href="/auth/register" className="text-blue-600">
            Register
          </Link>
        </Typography>
      </form>
    </Box>
  );
}
