"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/profile";

const logs = ["initializing ABHINAV_OS v1.0", "loading estimo.core ............ ok", "mounting components ........... ok", "connecting sql_server ......... ok", "warming ai_assistants ......... ok"];

export function BootScreen() {
  const [show, setShow] = useState(true);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const seen = sessionStorage.getItem("booted");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) {
      requestAnimationFrame(() => setShow(false));
      return;
    }
    let p = 0;
    const id = setInterval(() => {
      p = Math.min(100, p + 3 + Math.random() * 6);
      setPct(Math.round(p));
      if (p >= 100) {
        clearInterval(id);
        sessionStorage.setItem("booted", "1");
        setTimeout(() => setShow(false), 450);
      }
    }, 40);
    return () => clearInterval(id);
  }, []);

  const visibleLogs = Math.min(logs.length, Math.floor(pct / 20) + (pct > 0 ? 1 : 0));

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[60] flex items-center justify-center bg-bg"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="w-72">
            <div className="flex items-end justify-between">
              <span className="display text-4xl">{profile.firstName}</span>
              <span className="font-mono text-2xl text-accent">
                {pct}
                <span className="text-sm text-muted">%</span>
              </span>
            </div>
            <div className="mt-3 h-px w-full bg-line">
              <div className="h-px bg-accent transition-[width] duration-100" style={{ width: `${pct}%` }} />
            </div>
            <ul className="mt-5 space-y-1 font-mono text-[11px] text-muted">
              {logs.slice(0, visibleLogs).map((l) => (
                <li key={l}>› {l}</li>
              ))}
              {pct >= 100 && <li className="text-accent">✓ system ready.</li>}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
