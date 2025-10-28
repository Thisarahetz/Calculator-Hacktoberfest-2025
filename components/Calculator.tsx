"use client";

import { useState, useEffect, useCallback } from "react";
import { scientific } from "@/utils/calculate";
import Image from "next/image";
import sunIcon from "/assets/SunIcon.svg";
import moonIcon from "/assets/MoonIcon.svg";
import settingsIcon from "/assets/settings.svg";
import githubLight from "/assets/GitHubLight.svg";
import githubDark from "/assets/GitHubDark.svg";

interface CalculatorProps {
  theme: "light" | "dark" | "theme";
  toggleTheme: () => void;
  switchAlternateTheme: () => void;
}

export default function Calculator({
  theme,
  toggleTheme,
  switchAlternateTheme,
}: CalculatorProps) {
  const [result, setResult] = useState("");
  const [resultPulse, setResultPulse] = useState(false);
  const [toast, setToast] = useState("Calculator");
  const [scientificMode, setScientificMode] = useState(false);

  const handleCalculate = useCallback((value: string) => {
    let calculatedValue = NaN;
    if (value !== "") calculatedValue = scientific(value);

    if (isNaN(calculatedValue)) {
      if (value !== "") setResult("Invalid Expression");
      setTimeout(() => setResult(""), 1300);
    } else {
      setResult(String(calculatedValue));
    }
  }, []);

  // brief pulse animation when result changes
  useEffect(() => {
    if (result === "") return;
    setResultPulse(true);
    const t = setTimeout(() => setResultPulse(false), 350);
    return () => clearTimeout(t);
  }, [result]);

  const handleButtonClick = useCallback(
    (val: string, id: string) => {
      if (id === "calc") {
        handleCalculate(result);
      } else if (id === "clear-button") {
        setResult("");
      } else if (id === "del-button") {
        setResult((prev) => prev.substring(0, prev.length - 1));
      } else {
        setResult((prev) => prev + val);
      }
    },
    [result, handleCalculate]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      const key = e.key;
      const validKeys = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "+",
        "-",
        "*",
        "/",
        "^",
        ")",
        "(",
      ];

      if (key === "Enter") {
        handleCalculate(result);
      } else if (key === "Backspace") {
        setResult((prev) =>
          e.shiftKey ? "" : prev.substring(0, prev.length - 1)
        );
      } else if (validKeys.includes(key)) {
        setResult((prev) => prev + key);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [result, handleCalculate]);

  const handleThemeChange = () => {
    toggleTheme();
    setToast(theme === "dark" ? "Light Mode ☀️" : "Dark Mode 🌙");
    setTimeout(() => setToast("Calculator"), 1500);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="header-container">
          <h1 id="toast">{toast}</h1>
          <div className="top-buttons">
            <a
              href="https://github.com/Thisarahetz/Calculator-Hacktoberfest-2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={theme === "dark" ? githubDark : githubLight}
                alt="GitHub"
                height={22.5}
                width={22.5}
                className="github-icon"
              />
            </a>
            <button
              type="button"
              className="theme-button"
              onClick={handleThemeChange}
            >
              <Image
                src={theme === "dark" ? sunIcon : moonIcon}
                alt="Theme Icon"
                height={19}
                width={19}
                id="theme-icon"
              />
            </button>
            <button
              type="button"
              className="theme-change-button"
              onClick={switchAlternateTheme}
            >
              <Image
                src={settingsIcon}
                alt="Icon"
                height={25}
                width={25}
                className="change-theme-btn"
              />
            </button>
          </div>
        </div>

        <div className="first-row">
          <input
            type="text"
            value={result}
            placeholder="Result"
            className={`result-input ${resultPulse ? "pulse" : ""}`}
            readOnly
            aria-live="polite"
          />
        </div>

        <div className="clear-btn-row button-row">
          <input type="button" value="On" disabled />
          <button
            type="button"
            className="toggle-scientific"
            onClick={() => setScientificMode(!scientificMode)}
            id="scientific-button"
          >
            <span>S</span>
          </button>
          <input
            type="button"
            value="Del"
            id="del-button"
            onClick={() => handleButtonClick("", "del-button")}
          />
          <input
            type="button"
            value="C"
            id="clear-button"
            className="clear-button"
            onClick={() => handleButtonClick("", "clear-button")}
          />
        </div>

        <div className="second-row button-row">
          {scientificMode && (
            <input
              type="button"
              id="btn-openbrac"
              className="scientific-btn"
              value="("
              onClick={() => handleButtonClick("(", "btn-openbrac")}
            />
          )}
          <input
            type="button"
            id="btn-1"
            value="1"
            onClick={() => handleButtonClick("1", "btn-1")}
          />
          <input
            type="button"
            id="btn-2"
            value="2"
            onClick={() => handleButtonClick("2", "btn-2")}
          />
          <input
            type="button"
            id="btn-add"
            value="+"
            onClick={() => handleButtonClick("+", "btn-add")}
          />
        </div>

        <div className="third-row button-row">
          {scientificMode && (
            <input
              type="button"
              id="btn-closebrac"
              className="scientific-btn"
              value=")"
              onClick={() => handleButtonClick(")", "btn-closebrac")}
            />
          )}
          <input
            type="button"
            id="btn-4"
            value="4"
            onClick={() => handleButtonClick("4", "btn-4")}
          />
          <input
            type="button"
            id="btn-5"
            value="5"
            onClick={() => handleButtonClick("5", "btn-5")}
          />
          <input
            type="button"
            id="btn-sub"
            value="-"
            onClick={() => handleButtonClick("-", "btn-sub")}
          />
        </div>

        <div className="fourth-row button-row">
          {scientificMode && (
            <input
              type="button"
              id="btn-raisepow"
              className="scientific-btn"
              value="^"
              onClick={() => handleButtonClick("^", "btn-raisepow")}
            />
          )}
          <input
            type="button"
            id="btn-7"
            value="7"
            onClick={() => handleButtonClick("7", "btn-7")}
          />
          <input
            type="button"
            id="btn-8"
            value="8"
            onClick={() => handleButtonClick("8", "btn-8")}
          />
          <input
            type="button"
            id="btn-9"
            value="9"
            onClick={() => handleButtonClick("9", "btn-9")}
          />
          <input
            type="button"
            id="btn-mult"
            value="*"
            onClick={() => handleButtonClick("*", "btn-mult")}
          />
        </div>

        <div className="fifth-row button-row">
          {scientificMode && (
            <input
              type="button"
              id="btn-sqrt"
              className="scientific-btn"
              value="√"
              onClick={() => handleButtonClick("√", "btn-sqrt")}
            />
          )}
          <input
            type="button"
            id="btn-div"
            value="/"
            onClick={() => handleButtonClick("/", "btn-div")}
          />
          <input
            type="button"
            id="btn-0"
            value="0"
            onClick={() => handleButtonClick("0", "btn-0")}
          />
          <input
            type="button"
            id="btn-dot"
            value="."
            onClick={() => handleButtonClick(".", "btn-dot")}
          />
          <input
            type="button"
            id="calc"
            value="="
            onClick={() => handleButtonClick("", "calc")}
          />
        </div>
      </div>
    </div>
  );
}
