"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { GlobeMap } from "../components/GlobeMap";
import { useTheme } from "@/context/ThemeContext";

export default function HeroSection() {
  const { mode } = useTheme();

  return (
    <>
      <Navbar />
      <section
        className={`bg-opacity-90 bg-cover bg-center max-md:pt-10 ${
          mode === "dark" ? "bg-gray-900" : "bg-blue-50"
        }`}
        style={{ backgroundImage: "url('/Hero-Image.webp')" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2 text-center md:text-left">
            <h1
              className={`text-4xl pr-5 font-bold sm:text-5xl ${
                mode === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Understand Business Intelligence Around the World with{" "}
              <span className="text-blue-600">BI Tool</span>
            </h1>
            <p
              className={`mt-4 text-lg ${
                mode === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Use our tool to see business data easily. Track sales, users, and
              more with simple charts and tables.
            </p>
            <p
              className={`mt-4 text-lg font-semibold ${
                mode === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Make smart business choices with clear insights!
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/register"
                className={`px-6 py-3 rounded-lg font-semibold text-lg transition duration-300 ${
                  mode === "dark"
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Start Now
              </Link>
              <Link
                href="/dashboard"
                className={`px-6 py-3 border rounded-lg font-semibold text-lg transition duration-300 ${
                  mode === "dark"
                    ? "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                    : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                See Dashboard
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 w-full overflow-hidden px-5 pt-4 pb-8 flex flex-col gap-y-4">
            <GlobeMap />
          </div>
        </div>
      </section>
    </>
  );
}
