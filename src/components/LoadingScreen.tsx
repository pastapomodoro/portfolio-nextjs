"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["Design", "Create", "Inspire"];
const DURATION_MS = 2700;

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const done = useCallback(onComplete, [onComplete]);

  useEffect(() => {
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / DURATION_MS, 1);
      const current = Math.floor(progress * 100);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(100);
        setTimeout(done, 400);
      }
    };

    const raf = requestAnimationFrame(tick);
    const wordTimer = setInterval(
      () => setWordIndex((i) => (i + 1) % WORDS.length),
      900
    );

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(wordTimer);
    };
  }, [done]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-background flex flex-col"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Top-left label */}
      <motion.div
        className="absolute top-6 left-6 md:top-10 md:left-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-[0.35em] font-light">
          Portfolio
        </span>
      </motion.div>

      {/* Center rotating word */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            className="text-4xl md:text-6xl lg:text-7xl text-foreground/75"
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontStyle: "italic",
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom-right counter */}
      <motion.div
        className="absolute bottom-10 right-6 md:bottom-14 md:right-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span
          className="text-7xl md:text-9xl text-foreground tabular-nums font-light select-none"
          style={{ fontFamily: "var(--font-instrument-serif), serif" }}
        >
          {String(count).padStart(3, "0")}
        </span>
      </motion.div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground/5">
        <div
          className="h-full origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            background: "linear-gradient(90deg, #89aacc 0%, #4e85bf 100%)",
            boxShadow: "0 0 10px rgba(137, 170, 204, 0.4)",
            transition: "transform 80ms linear",
          }}
        />
      </div>
    </motion.div>
  );
}
