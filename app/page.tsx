"use client";

import { useState, useEffect } from "react";
import Calculator from "@/components/Calculator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark" | "theme">("dark");
  const [alternateTheme, setAlternateTheme] = useState<"light" | "theme">(
    "light"
  );

  useEffect(() => {
    // Apply theme class to body
    document.body.className = `theme-${
      theme === "theme" ? alternateTheme : theme
    }`;
  }, [theme, alternateTheme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const switchAlternateTheme = () => {
    if (theme !== "theme") {
      setTheme("theme");
    } else {
      setAlternateTheme((prev) => (prev === "light" ? "theme" : "light"));
    }
  };

  return (
    <div
      className={`wrapper theme-${theme === "theme" ? alternateTheme : theme}`}
    >
      <Header />
      <Calculator
        theme={theme}
        toggleTheme={toggleTheme}
        switchAlternateTheme={switchAlternateTheme}
      />
      <Footer />
    </div>
  );
}
