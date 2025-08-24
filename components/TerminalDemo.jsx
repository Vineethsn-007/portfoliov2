"use client";
import React, { useState, useEffect, useRef } from "react";

export default function TerminalDemo() {
  const [terminalLineData, setTerminalLineData] = useState([
    {
      type: "output",
      content: "Welcome to Vineeth S N's Portfolio Terminal! 🚀",
      key: "welcome",
    },
    {
      type: "output",
      content: "Type 'help' to see all available commands.",
      key: "help1",
    },
    {
      type: "output",
      content:
        "Try commands like 'whoami', 'skills', 'resume', 'neofetch', 'joke', or 'coffee'",
      key: "help2",
    },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const inputRef = useRef(null);
  const terminalContentRef = useRef(null);

  useEffect(() => {
    // Focus the input field when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Auto-scroll to bottom when terminal content changes
  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop =
        terminalContentRef.current.scrollHeight;
    }
  }, [terminalLineData]);

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    const command = currentInput.trim();
    console.log("Processing command:", command);

    let response;

    switch (command.toLowerCase()) {
      case "help":
        response = [
          "Available commands:",
          "• whoami - Show user information",
          "• skills - Display technical skills",
          "• resume - Download resume",
          "• neofetch - System information",
          "• joke - Get a programming joke",
          "• coffee - Virtual coffee break",
          "• clear - Clear terminal",
          "• help - Show this help message",
        ];
        break;

      case "whoami":
        response = [
          "Vineeth S N — CSE (IoT & Cybersecurity) student, Web & IoT Developer 🚀",
        ];
        break;

      case "skills":
        response = [
          "Python | C | JavaScript | HTML | CSS",
          "React | Next.js | Flutter",
          "Firebase | MySQL | IoT | Cybersecurity",
        ];
        break;

      case "resume":
        response = ["Downloading resume.pdf... [link]"];
        break;

      case "neofetch":
        response = [
          "OS: VineethOS",
          "Shell: Portfolio v1.0",
          "Uptime: 3+ years coding",
          "Mood: Always learning 🔥",
        ];
        break;

      case "joke":
        response = [
          "Why do programmers prefer dark mode?",
          "Because light attracts bugs 🐞",
        ];
        break;

      case "coffee":
        response = ["☕ Virtual coffee served. Keep exploring!"];
        break;

      case "clear":
        setTerminalLineData([
          {
            type: "output",
            content: "Terminal cleared. Type 'help' to see available commands.",
            key: "cleared",
          },
        ]);
        setCurrentInput("");
        if (inputRef.current) inputRef.current.focus();
        return;

      default:
        response = [
          `Command '${command}' not found. Type 'help' for available commands.`,
        ];
        break;
    }

    // Add command and response to terminal
    const newLines = [
      ...terminalLineData,
      { type: "command", content: `$ ${command}`, key: `cmd-${Date.now()}` },
    ];

    // Add response lines
    response.forEach((line, index) => {
      newLines.push({
        type: "output",
        content: `> ${line}`,
        key: `resp-${Date.now()}-${index}`,
      });
    });

    setTerminalLineData(newLines);
    setCurrentInput("");

    // Focus input field again
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleInputSubmit(e);
    }
  };

  return (
    <div className="terminal-demo">
      <p>Interactive Portfolio Terminal - Type 'help' to get started!</p>
      <div className="terminal-container">
        <div className="custom-terminal">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <div className="terminal-button red"></div>
              <div className="terminal-button yellow"></div>
              <div className="terminal-button green"></div>
            </div>
            <div className="terminal-title">Vineeth S N Portfolio Terminal</div>
          </div>
          <div className="terminal-content" ref={terminalContentRef}>
            {terminalLineData.map((line) => (
              <div key={line.key} className={`terminal-line ${line.type}`}>
                {line.content}
              </div>
            ))}
            <form onSubmit={handleInputSubmit} className="terminal-input-line">
              <span className="terminal-prompt">$ </span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type a command..."
                className="terminal-input"
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
