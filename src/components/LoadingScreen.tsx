"use client";

import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const done = useCallback(onComplete, [onComplete]);

  useEffect(() => {
    const timer = setTimeout(done, 800);
    return () => clearTimeout(timer);
  }, [done]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.span
        className="text-sm tracking-[0.3em] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        Loading
      </motion.span>
    </motion.div>
  );
}
