import { motion, useReducedMotion } from 'framer-motion'

const SPARKLE_PATH = 'M12 0 L14.4 9.6 L24 12 L14.4 14.4 L12 24 L9.6 14.4 L0 12 L9.6 9.6 Z'

export default function Sparkle({ color = '#ffb36b', size = 14, delay = 0, x = 0, y = 0, duration = 2.4 }) {
  const reduce = useReducedMotion()
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 24 24"
      width={size}
      height={size}
      style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, color }}
      fill="currentColor"
      initial={{ opacity: 0.15, scale: 0.5 }}
      animate={
        reduce
          ? { opacity: 0.8 }
          : {
              opacity: [0.15, 0.95, 0.15],
              scale: [0.55, 1, 0.55],
              rotate: [0, 90],
            }
      }
      transition={{
        delay,
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <path d={SPARKLE_PATH} />
    </motion.svg>
  )
}