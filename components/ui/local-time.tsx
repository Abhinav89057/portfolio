"use client";

import { useEffect, useState } from "react";

export function LocalTime({ seconds = true }: { seconds?: boolean }) {
  const [t, setT] = useState(seconds ? "--:--:--" : "--:--");
  useEffect(() => {
    const tick = () => setT(new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: seconds ? "2-digit" : undefined, hour12: false, timeZone: "Asia/Kolkata" }));
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [seconds]);
  return <>{t} IST</>;
}
