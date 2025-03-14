"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!keepLoggedIn && user) {
      const timer = setTimeout(() => {
        logout();
      }, 60 * 1000); // 1 minute
      return () => clearTimeout(timer);
    }
  }, [user, keepLoggedIn]);

  const login = async (email, password, keep) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const data = await response.json();
      setUser(data);
      setKeepLoggedIn(keep);
      router.push("/dashboard");
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const register = async (email, password, fullName) => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, fullName }),
    });
    if (response.ok) {
      const data = await response.json();
      setUser(data);
      router.push("/dashboard");
    } else {
      throw new Error("Registration failed");
    }
  };

  const logout = () => {
    setUser(null);
    setKeepLoggedIn(false);
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, keepLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
