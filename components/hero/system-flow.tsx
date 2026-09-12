"use client";

import { motion, useReducedMotion } from "framer-motion";
import { systemFlow } from "@/data/profile";

const notes = ["Excel, calls, memory", "Data model, API edge", "C#, Next.js, SQL", "ERP, automation, AI", "Estimo, KhetFlow", "Plants, planners, farms"];

const W = 360;
const STEP = 84;
const NODE_W = 150;
const NODE_H = 40;
const X = 236; // node centre
const TOP = 32;
const ys = systemFlow.map((_, i) => TOP + i * STEP);
const last = ys[ys.length - 1];
const H = last + NODE_H + 24;

// The one page-load moment: the spine draws, nodes light up in order, then work keeps flowing.
export function SystemFlow() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const drawTime = 2.2;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full max-w-[26rem]" role="img" aria-label="How work flows: problem, design, code, system, product, real users">
      <motion.path
        d={`M${X} ${ys[0] + NODE_H} V${last}`}
        fill="none"
        stroke="var(--line-strong)"
        strokeWidth="1"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: drawTime, ease: "linear", delay: 0.3 }}
      />
      {systemFlow.map((label, i) => {
        const y = ys[i];
        const delay = reduce ? 0 : 0.3 + (i / (systemFlow.length - 1)) * drawTime;
        return (
          <motion.g key={label} initial={reduce ? false : { opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay, ease }}>
            <rect x={X - NODE_W / 2} y={y} width={NODE_W} height={NODE_H} fill="var(--surface)" stroke={i === systemFlow.length - 1 ? "var(--accent)" : "var(--line-strong)"} />
            {/* corner ticks, like a drawing sheet */}
            <path d={`M${X - NODE_W / 2 - 4} ${y} h-4 M${X + NODE_W / 2 + 4} ${y} h4 M${X - NODE_W / 2 - 4} ${y + NODE_H} h-4 M${X + NODE_W / 2 + 4} ${y + NODE_H} h4`} stroke="var(--line-strong)" strokeWidth="1" />
            <text x={X} y={y + NODE_H / 2 + 5} textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--fg)" fontFamily="var(--font-geist-sans)">
              {label}
            </text>
            <text x={X - NODE_W / 2 - 14} y={y + NODE_H / 2 + 4} textAnchor="end" fontSize="9.5" fill="var(--muted)" fontFamily="var(--font-geist-mono)">
              {notes[i]}
            </text>
            {i < systemFlow.length - 1 && <path d={`M${X - 4} ${y + NODE_H + STEP - NODE_H - 8} l4 6 4-6`} fill="none" stroke="var(--line-strong)" strokeWidth="1" />}
          </motion.g>
        );
      })}
      {!reduce && (
        <motion.circle
          r="3"
          cx={X}
          fill="var(--accent)"
          initial={{ cy: ys[0] + NODE_H, opacity: 0 }}
          animate={{ cy: [ys[0] + NODE_H, last], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3.4, ease: "linear", delay: drawTime + 0.8, repeat: Infinity, repeatDelay: 1.6 }}
        />
      )}
    </svg>
  );
}
