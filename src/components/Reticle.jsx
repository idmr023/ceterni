import { motion, useReducedMotion } from 'framer-motion'

export default function Reticle({ className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none select-none ${className}`}
      animate={reduce ? undefined : { rotate: 360 }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 26, ease: 'linear', repeat: Infinity }
      }
    >
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <circle
          cx="60"
          cy="60"
          r="56"
          fill="none"
          stroke="rgba(255,255,255,0.09)"
          strokeWidth="1"
        />
        <circle
          cx="60"
          cy="60"
          r="40"
          fill="none"
          stroke="rgba(246,165,94,0.18)"
          strokeWidth="1"
          strokeDasharray="3 7"
        />
        <circle
          cx="60"
          cy="60"
          r="12"
          fill="rgba(246,165,94,0.06)"
          stroke="rgba(246,165,94,0.35)"
          strokeWidth="1"
        />
        <circle cx="60" cy="60" r="2.2" fill="#f6a55e" />
        <path
          d="M60 2 V22 M60 98 V118 M2 60 H22 M98 60 H118"
          stroke="rgba(255,179,107,0.5)"
          strokeWidth="1.5"
        />
        <path
          d="M60 2 l4 12 h-8 z M60 106 l4 12 h-8 z M2 60 l12 -4 v8 z M106 60 l12 4 v-8 z"
          fill="rgba(255,0,84,0.7)"
        />
      </svg>
    </motion.div>
  )
}