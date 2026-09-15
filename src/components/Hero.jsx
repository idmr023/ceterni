import { motion, useReducedMotion } from 'framer-motion'
import Reticle from './Reticle'
import Sparkle from './Sparkle'
import { playClick } from '../lib/sound'

const SPARKLES = [
  { x: 12, y: 18, color: '#ffb1d0', size: 14, delay: 0 },
  { x: 22, y: 68, color: '#00e5ff', size: 10, delay: 0.8 },
  { x: 42, y: 12, color: '#ff0054', size: 16, delay: 1.6 },
  { x: 58, y: 78, color: '#ffb1d0', size: 12, delay: 0.4 },
  { x: 74, y: 22, color: '#f6a55e', size: 15, delay: 2.1 },
  { x: 86, y: 60, color: '#00e5ff', size: 11, delay: 1.2 },
  { x: 66, y: 88, color: '#ffb36b', size: 9, delay: 2.6 },
  { x: 8, y: 40, color: '#f6a55e', size: 12, delay: 3.1 },
  { x: 92, y: 36, color: '#ffb1d0', size: 14, delay: 0.2 },
]

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh flex-col overflow-hidden bg-carbon-950"
    >
      {/* ground vault */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-56 opacity-[0.12]"
        style={{
          background:
            'linear-gradient(180deg, rgba(246,165,94,0.5), transparent 60%)',
          WebkitMaskImage: 'linear-gradient(180deg, black, transparent)',
          maskImage: 'linear-gradient(180deg, black, transparent)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-[0.14]"
        style={{
          background:
            'linear-gradient(0deg, rgba(255,0,84,0.6), transparent 60%)',
          WebkitMaskImage: 'linear-gradient(0deg, black, transparent)',
          maskImage: 'linear-gradient(0deg, black, transparent)',
        }}
      />

      {/* drifting light trails */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-32 top-[12%] h-80 w-80 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(246,165,94,0.5), transparent 65%)',
              filter: 'blur(48px)',
            }}
            animate={{ x: ['0vw', '18vw', '2vw'], y: ['0vh', '6vh', '0vh'] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-[-8rem] top-[45%] h-96 w-96 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,0,84,0.45), transparent 65%)',
              filter: 'blur(56px)',
            }}
            animate={{ x: ['0vw', '-16vw', '0vw'], y: ['0vh', '-8vh', '0vh'] }}
            transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-[30%] top-[70%] h-72 w-72 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,179,107,0.4), transparent 65%)',
              filter: 'blur(52px)',
            }}
            animate={{ x: ['0vw', '12vw', '-4vw'], y: ['0vh', '-10vh', '0vh'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* photon streaks */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              aria-hidden
              className="pointer-events-none absolute h-px w-64 skew-x-12"
              style={{
                top: `${20 + i * 22}%`,
                background:
                  'linear-gradient(90deg, transparent, rgba(246,165,94,0.8), rgba(255,0,84,0.9), transparent)',
                filter: 'drop-shadow(0 0 6px rgba(255,0,84,0.8))',
              }}
              animate={{ left: ['-20%', '120%'] }}
              transition={{
                duration: 6 + i * 2,
                delay: i * 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </>
      )}

      {/* sniper reticle */}
      <div className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 opacity-70 lg:block">
        <Reticle className="h-[480px] w-[480px]" />
      </div>

      {/* k-pop sparkles */}
      {SPARKLES.map((s, i) => (
        <Sparkle key={i} {...s} />
      ))}

      {/* scanlines + grain overlays */}
      <div className="scanlines pointer-events-none absolute inset-0 opacity-60" />
      <div className="grain pointer-events-none absolute inset-0" />

      {/* content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-5 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-6 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="clip-tag bg-neon-magenta/90 px-3 py-1 font-mono text-[11px] tracking-widest text-carbon-950">
            AGENTE: TU MEJOR AMIGO 
          </span>
          <span className="clip-tag border border-neon-apricot/40 bg-neon-apricot/10 px-3 py-1 font-mono text-[11px] tracking-widest text-neon-apricot">
            RANGO: MEJOR AMIGA
          </span>
          <span className="clip-tag border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] tracking-widest text-white/60">
            SERVIDOR 001 · CND JAKARTA
          </span>
          <span className="clip-tag border border-neon-cyan/40 bg-neon-cyan/10 px-3 py-1 font-mono text-[11px] tracking-widest text-neon-cyan">
            🍭 CANDY BONG ∞
          </span>
          <span className="clip-tag bg-pastel-pink/15 px-2.5 py-1 font-mono text-[11px] tracking-widest text-pastel-pink">
            ✨
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-2 font-mono text-xs tracking-[0.4em] text-neon-apricot/80"
        >
          // NUEVO CONTRATO DISPONIBLE //
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="font-display uppercase leading-[0.9]"
        >
          <span
            data-text="MISIÓN:"
            className="glitch block text-[clamp(3.5rem,12vw,9rem)] tracking-wide text-white"
          >
            MISIÓN:
          </span>
          <span className="text-kpop block text-[clamp(2.2rem,8vw,6rem)] tracking-wide [-webkit-text-stroke:1px_rgba(0,0,0,0.6)]">
            HAPPY BIRTHDAY
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 max-w-xl text-balance text-base font-medium leading-relaxed text-white/70 sm:text-lg"
        >
          Un protocolo de seguridad creó este lobby solo para ti. Mientras las
          estrellas del escenario brillan sobre el campo de batalla, tu dúo
          declara: esta partida va por la reyna.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => {
              playClick('confirm')
              scrollTo('mensaje')
            }}
            className="clip-btn group relative cursor-pointer bg-neon-magenta px-8 py-3.5 font-display text-lg tracking-widest text-carbon-950 transition-colors glow-magenta hover:bg-neon-pink"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="clip-btn bg-white/25 px-2 py-1 font-mono text-[10px] tracking-widest">
              ⌘
            </span>
            INICIAR MISIÓN
          </motion.button>

          <motion.button
            onClick={() => {
              playClick()
              scrollTo('objetivos')
            }}
            className="clip-btn cursor-pointer border border-neon-cyan/50 bg-neon-cyan/5 px-8 py-3.5 font-display text-lg tracking-widest text-neon-cyan transition-colors glow-cyan hover:bg-neon-cyan/15"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VER CONTRATOS
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 flex items-center gap-3 font-mono text-[11px] tracking-[0.35em] text-white/40"
        >
          <motion.span
            aria-hidden
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            ▼
          </motion.span>
          {reduce ? 'DESCENDER' : 'DESCENDER'}
        </motion.div>
      </div>
    </section>
  )
}