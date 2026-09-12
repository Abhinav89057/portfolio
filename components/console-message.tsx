"use client";

import { useEffect } from "react";

export function ConsoleMessage() {
  useEffect(() => {
    console.log(
      "%cPORTFOLIO.SYSTEM%c\n\nYou opened the console. Good instinct.\nPress / or Ctrl+K to search the system. Try: sudo abhinav\nBuilt with Next.js 16 · React 19 · Tailwind 4 · Framer Motion\nFlagship: Estimo, the ERP behind printing & packaging businesses",
      "font-family:monospace;font-size:14px;letter-spacing:.2em;color:#e9a23b",
      "color:#8b919b;font-family:monospace",
    );
  }, []);
  return null;
}
