import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  // 6 strings, 4 frets to show
  const numStrings = 6;
  const numFrets = 4;
  const stringSpacing = 50;
  const fretSpacing = 60;
  const startX = 100;
  const startY = 100;
  const width = startX * 2 + (numStrings - 1) * stringSpacing;
  const height = startY * 2 + numFrets * fretSpacing;

  // Animation sequence: simulate fingers pressing frets
  const fretAnimations = [
    { string: 5, fret: 1, delay: 0.1 }, // High E string, 1st fret
    { string: 4, fret: 1, delay: 0.2 }, // B string, 1st fret
    { string: 3, fret: 2, delay: 0.3 }, // G string, 2nd fret
    { string: 2, fret: 2, delay: 0.4 }, // D string, 2nd fret
    { string: 1, fret: 3, delay: 0.5 }, // A string, 3rd fret
    { string: 0, fret: 3, delay: 0.6 }, // Low E string, 3rd fret
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
    >
      {/* Guitar Fretboard */}
      <div className="relative flex flex-col items-center">
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full max-w-md"
        >
          {/* Fret lines */}
          {[...Array(numFrets + 1)].map((_, i) => (
            <line
              key={`fret-${i}`}
              x1={startX}
              y1={startY + i * fretSpacing}
              x2={startX + (numStrings - 1) * stringSpacing}
              y2={startY + i * fretSpacing}
              stroke="hsl(var(--muted-foreground))"
              strokeWidth={i === 0 ? 3 : 1}
              className={i === 0 ? "nut-line" : "fret-line"}
            />
          ))}

          {/* String lines */}
          {[...Array(numStrings)].map((_, i) => (
            <line
              key={`string-${i}`}
              x1={startX + i * stringSpacing}
              y1={startY}
              x2={startX + i * stringSpacing}
              y2={startY + numFrets * fretSpacing}
              stroke="hsl(var(--muted-foreground))"
              strokeWidth={1}
              className="string-line"
            />
          ))}

          {/* Animated finger positions (like playing a chord) */}
          {fretAnimations.map((fretAnim) => {
            const cx = startX + fretAnim.string * stringSpacing;
            const cy = startY + (fretAnim.fret - 0.5) * fretSpacing;

            return (
              <g key={`finger-${fretAnim.string}-${fretAnim.fret}`}>
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r={15}
                  fill="white"
                  stroke="hsl(var(--foreground))"
                  strokeWidth={2}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1.2, 1],
                    opacity: [0, 1, 1],
                  }}
                  transition={{
                    duration: 0.3,
                    delay: fretAnim.delay,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeOut",
                  }}
                />
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r={8}
                  fill="hsl(var(--foreground))"
                  initial={{ scale: 0 }}
                  animate={{
                    scale: [0, 1.2, 1],
                  }}
                  transition={{
                    duration: 0.3,
                    delay: fretAnim.delay + 0.1,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeOut",
                  }}
                />
              </g>
            );
          })}

          {/* Ripple effect when frets are pressed */}
          {fretAnimations.map((fretAnim, index) => {
            const cx = startX + fretAnim.string * stringSpacing;
            const cy = startY + (fretAnim.fret - 0.5) * fretSpacing;

            return (
              <motion.circle
                key={`ripple-${index}`}
                cx={cx}
                cy={cy}
                r={15}
                fill="none"
                stroke="hsl(var(--foreground))"
                strokeWidth={2}
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{
                  scale: [1, 2.5],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: fretAnim.delay,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </svg>

        {/* Title below fretboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-col items-center gap-4 w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <img
              src="/rockstar-face.png"
              alt="Rockstar"
              className="w-16 h-16 object-contain"
            />
          </motion.div>
          <h1 className="font-newsreader text-3xl font-bold text-foreground text-center">
            Strummm
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
