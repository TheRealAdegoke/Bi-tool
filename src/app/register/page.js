"use client";
import { useState } from "react";
import { TextField, Button, Typography, Box, Alert } from "@mui/material";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const { register } = useAuth();

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
    if (!fullName || fullName.length < 2) {
      setError("Full name must be at least 2 characters");
      return;
    }
    try {
      await register(email, password, fullName);
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
        Register
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
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
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2, py: 1.5 }}
        >
          Register
        </Button>
        <Typography sx={{ mt: 2, textAlign: "center" }}>
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-600">
            Login
          </Link>
        </Typography>
      </form>
    </Box>
  );
}
