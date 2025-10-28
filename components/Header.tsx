"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const dt = new Date();
      setDate(dt.toLocaleDateString());
      setTime(dt.toLocaleTimeString());
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const messages = [
      "W E L C O M E . . .",
      "t o . . .",
      "o n l i n e   C A L C U L A T O R   a p p",
    ];
    let currentIndex = 0;

    const showText = () => {
      setAnimatedText(messages[currentIndex]);
      currentIndex = (currentIndex + 1) % messages.length;
    };

    showText();
    const interval = setInterval(showText, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      <div className="date-time-div">
        <p>
          Date: <span>{date}</span>
        </p>

        <div className="animated-text">
          <h3>{animatedText}</h3>
        </div>

        <p>
          Time: <span>{time}</span>
        </p>
      </div>
    </div>
  );
}
