"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["Vision.", "Craft.", "Impact."];
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
        <span className="text-xs text-white/50 uppercase tracking-[0.35em] font-light">
          Portfolio
        </span>
      </motion.div>

      {/* Top-right name */}
      <motion.div
        className="absolute top-6 right-6 md:top-10 md:right-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <span className="text-xs text-white/30 uppercase tracking-[0.35em] font-light">
          Eugenio Bellini
        </span>
      </motion.div>

      {/* Center rotating word */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontStyle: "italic",
              color: wordIndex === 2 ? "#4ade80" : "#ececec",
            }}
            className="text-4xl md:text-6xl lg:text-7xl"
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

      {/* Progress bar — green */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
        <div
          className="h-full origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            background: "linear-gradient(90deg, #4ade80 0%, #22c55e 100%)",
            boxShadow: "0 0 12px rgba(74, 222, 128, 0.45)",
            transition: "transform 80ms linear",
          }}
        />
      </div>
    </motion.div>
  );
}
