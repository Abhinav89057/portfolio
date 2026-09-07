"use client";

import { useEffect } from "react";

export function ConsoleMessage() {
  useEffect(() => {
    console.log(
      "%cABHINAV OS%c\n\nYou opened the console. Good instinct.\nPress / or Ctrl+K anywhere on the page to search.\nStack: Next.js 16 · React 19 · Tailwind 4 · Framer Motion\nFlagship: ESTIMO, ERP for printing & packaging",
      "font-family:monospace;font-size:16px;letter-spacing:.3em;color:#1f5aa6",
      "color:#667085;font-family:monospace",
    );
  }, []);
  return null;
}
