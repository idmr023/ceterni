import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Sparkle from './Sparkle'
import { playClick } from '../lib/sound'

export default function CallToAction() {
  const [accepted, setAccepted] = useState(false)

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-carbon-950 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-56 opacity-20"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,0,84,0.4), transparent 70%)',
          WebkitMaskImage: 'linear-gradient(180deg, black, transparent)',
          maskImage: 'linear-gradient(180deg, black, transparent)',
        }}
      />
      {[14, 28, 44, 62, 80].map((x, i) => (
        <Sparkle
          key={i}
          x={x}
          y={20 + (i % 3) * 26}
          size={i % 2 ? 12 : 8}
          color={i % 2 ? '#00e5ff' : '#ffb1d0'}
          delay={i * 0.7}
        />
      ))}

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-mono text-xs tracking-[0.4em] text-neon-magenta">
            // ESTADO DE LA PARTIDA //
          </p>
          <h2 className="font-display text-4xl uppercase leading-tight tracking-wide text-white sm:text-5xl">
            Esta amistad{' '}
            <span className="text-kpop">no tiene cooldown</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-medium leading-relaxed text-white/65">
            Mejores momentos en la vida, mejores combos en la partida. Si algún
            día dudas de tu lugar, recuerda: en este lobby siempre serás la
            jugadora número uno.
          </p>
        </motion.div>

        <motion.button
          onClick={() => {
            playClick('confirm')
            setAccepted(true)
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="clip-btn glow-cyan mt-10 cursor-pointer bg-gradient-to-r from-pastel-pink via-white to-neon-cyan px-10 py-4 font-display text-xl tracking-[0.15em] text-carbon-950"
        >
          ACEPTAR CONTRATO ∞ 💖
        </motion.button>

        <AnimatePresence>
          {accepted && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="glass clip-card relative mx-auto mt-8 max-w-md overflow-hidden px-6 py-5"
            >
              <div aria-hidden className="holo" />
              <p className="font-mono text-xs tracking-[0.3em] text-neon-pink">
                ▸ CONTRATO ACEPTADO
              </p>
              <p className="mt-3 font-medium text-white/80">
                Oficialmente firmado: eres la dueña de este servidor y de cada
                ronda que venga. Gracias por existir. ✦
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-14 font-mono text-[11px] tracking-[0.35em] text-white/40"
        >
          TU RANK ESTÁ SEGURO CONMIGO, SIEMPRE
        </motion.p>
      </div>

      <footer className="mt-20 border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 font-mono text-[11px] tracking-[0.25em] text-white/35 sm:flex-row">
          <span>LOBBY PRIVADO Nº001 // SOLO PARA LA REYNA</span>
          <button
            onClick={() => {
              playClick()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            data-text="[VOLVER AL LOBBY ↑]"
            className="glitch cursor-pointer text-neon-apricot/70 transition-colors hover:text-neon-apricot"
          >
            [VOLVER AL LOBBY ↑]
          </button>
          <span>💖 HECHO CON CUIDADO PARA TI ✨</span>
        </div>
      </footer>
    </section>
  )
}