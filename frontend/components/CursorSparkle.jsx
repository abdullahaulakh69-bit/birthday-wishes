'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorSparkle() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    let id = 0;
    const handleMove = (e) => {
      if (Math.random() > 0.7) {
        const sparkleId = ++id;
        setSparkles((prev) => [
          ...prev.slice(-15),
          { id: sparkleId, x: e.clientX, y: e.clientY },
        ]);
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== sparkleId));
        }, 600);
      }
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[90]" aria-hidden="true">
      {sparkles.map((s) => (
        <motion.span
          key={s.id}
          className="absolute text-gold text-xs"
          style={{ left: s.x, top: s.y }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          ✨
        </motion.span>
      ))}
    </div>
  );
}
