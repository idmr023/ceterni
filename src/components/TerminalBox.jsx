import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'
import { playClick } from '../lib/sound'

const TOKENS = [
  { t: '> ', c: 'text-neon-apricot' },
  { t: 'iniciando conexión segura...', c: 'text-neon-apricot' },
  { t: '\n', c: '' },
  { t: '> [', c: 'text-neon-apricot' },
  { t: 'Cifrado K-Pop activado', c: 'font-bold text-neon-pink' },
  { t: ']...', c: 'text-neon-apricot' },
  { t: '\n\n', c: '' },
  { t: '▚▚▚▚▚▚▚ 💖  LOVELY TRANSMISIÓN  💖 ▚▚▚▚▚▚▚', c: 'text-white/25' },
  { t: '\n\n', c: '' },
  { t: 'Feliz ', c: 'text-white/90' },
  { t: 'cumpleaños.', c: 'font-bold text-kpop' },
  { t: ' A lo largo de este tiempo he conocido a una ', c: 'text-white/85' },
  { t: 'persona muy divertida', c: 'text-neon-pink' },
  { t: ', ', c: 'text-white/85' },
  { t: 'llena de vida', c: 'text-neon-magenta' },
  { t: ' y con ', c: 'text-white/85' },
  { t: 'metas altas', c: 'text-neon-pink' },
  { t: ' que estoy seguro de que ', c: 'text-white/85' },
  { t: 'vas a lograr', c: 'text-neon-magenta' },
  { t: ', porque ', c: 'text-white/85' },
  { t: 'siempre le pones punche', c: 'font-bold text-kpop' },
  { t: ', te antepones a los problemas y ', c: 'text-white/85' },
  { t: 'persistes', c: 'text-neon-magenta' },
  { t: '. ', c: 'text-white/85' },
  { t: 'Eres mi mejor amiga', c: 'font-bold text-kpop' },
  { t: ' y quiero ', c: 'text-white/85' },
  { t: 'darte muchísimas gracias', c: 'text-neon-pink' },
  { t: ' por ayudarme cuando ', c: 'text-white/85' },
  { t: 'más lo necesité', c: 'text-neon-magenta' },
  { t: '. Jamás olvidaré cómo ', c: 'text-white/85' },
  { t: 'me escuchaste', c: 'text-neon-pink' },
  { t: ' aquel día en el break del trabajo cuando ', c: 'text-white/85' },
  { t: 'las lágrimas me ganaban', c: 'text-neon-magenta' },
  { t: ' y necesitaba desahogarme, ni cómo me diste las ', c: 'text-white/85' },
  { t: 'alertas y consejos correctos', c: 'text-neon-pink' },
  { t: ' desde el principio. Gracias por ', c: 'text-white/85' },
  { t: 'acompañarme', c: 'text-neon-pink' },
  { t: ' a entrenar a ese ', c: 'text-white/85' },
  { t: 'Smart Fit', c: 'text-neon-pink' },
  { t: ' en el ', c: 'text-white/85' },
  { t: 'Centro Cívico', c: 'text-neon-pink' },
  { t: ' y ser mi verdadero ', c: 'text-white/85' },
  { t: "'blindaje emocional'", c: 'font-bold text-kpop' },
  { t: ' cuando tenía que enfrentar ', c: 'text-white/85' },
  { t: 'recuerdos difíciles', c: 'text-neon-magenta' },
  { t: '. A pesar de que hoy no estemos compartiendo el mismo puesto laboral, quería darte esta ', c: 'text-white/85' },
  { t: 'pequeña muestra de mi enorme cariño y gratitud', c: 'text-neon-pink' },
  { t: '. Un saludo a la distancia, ', c: 'text-white/85' },
  { t: 'amiga mía', c: 'font-bold text-kpop' },
  { t: '. Nos vemos el sábado, ', c: 'text-white/85' },
  { t: 'cuídate mucho', c: 'text-neon-magenta' },
  { t: ' y sigue siendo tan ', c: 'text-white/85' },
  { t: 'random y espontánea', c: 'text-neon-pink' },
  { t: ' como eres.', c: 'text-white/85' },
  { t: ' 💖', c: 'text-neon-magenta' },
]

const FULL = TOKENS.reduce((acc, tok) => acc + tok.t.length, 0)
const PAD = 'x'.repeat(FULL)

function renderTokens(upto) {
  let remaining = upto
  const out = []
  for (let i = 0; i < TOKENS.length && remaining > 0; i++) {
    const tok = TOKENS[i]
    if (remaining < tok.t.length) {
      out.push(
        <span key={i} className={tok.c}>
          {tok.t.slice(0, remaining)}
        </span>,
      )
      remaining = 0
    } else {
      out.push(
        <span key={i} className={tok.c}>
          {tok.t}
        </span>,
      )
      remaining -= tok.t.length
    }
  }
  return out
}

function TerminalBody({ onReplay, muted }) {
  const reduce = useReducedMotion()
  const { typed, done, skip } = useTypewriter(reduce ? '' : PAD, {
    speed: reduce ? 5 : 12,
    startDelay: 700,
  })

  const count = done ? FULL : typed.length
  const progress = Math.round((count / FULL) * 100)

  return (
    <div className="relative px-5 py-5 sm:px-7 sm:py-6">
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-white/40">
        <span className="text-neon-pink/80">
          @TU_DUO {muted ? '[NTS-2026 // VOL]' : '[HABLAR]'} &gt;&gt;
        </span>
        <span>{String(progress).padStart(3, '0')}%</span>
      </div>

      <div className="min-h-[300px] whitespace-pre-line font-mono text-[13px] leading-relaxed sm:text-sm">
        {renderTokens(count)}
        <span className="caret ml-0.5 inline-block h-[1.1em] w-[9px] translate-y-[3px] bg-neon-pink/90" />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
        <div className="font-mono text-[10px] tracking-[0.25em] text-white/35">
          {done ? 'ESTADO: TRANSMISIÓN COMPLETA' : 'ESTADO: RECIBIENDO DATOS…'}
        </div>
        <div className="flex gap-3">
          {!done ? (
            <motion.button
              onClick={() => {
                playClick()
                skip()
              }}
              whileTap={{ scale: 0.94 }}
              className="clip-tag cursor-pointer bg-neon-magenta px-4 py-2 font-mono text-[11px] tracking-[0.2em] text-carbon-950 hover:bg-neon-pink"
            >
              SALTAR ▶
            </motion.button>
          ) : (
            <motion.button
              onClick={() => {
                playClick('confirm')
                onReplay()
              }}
              whileTap={{ scale: 0.94 }}
              className="clip-tag cursor-pointer border border-neon-apricot/50 bg-neon-apricot/10 px-4 py-2 font-mono text-[11px] tracking-[0.2em] text-neon-apricot hover:bg-neon-apricot/20"
            >
              REPRODUCIR ↻
            </motion.button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function TerminalBox() {
  const [runId, setRunId] = useState(0)
  const [muted, setMuted] = useState(false)

  return (
    <section
      id="mensaje"
      className="relative overflow-hidden border-t border-white/5 bg-carbon-850 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[70rem] -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(246,165,94,0.14), transparent)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-2 font-mono text-xs tracking-[0.4em] text-neon-apricot">
            // CANAL CIFRADO // LOBBY SOLO-INVITACIÓN
          </p>
          <h2 className="font-display text-4xl uppercase tracking-wide text-white sm:text-5xl">
            Transmisión{' '}
            <span className="text-kpop">Directa</span>{' '}
            para ti
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm font-medium leading-relaxed text-white/55">
            Solo tu dúo tiene la llave de este canal. Dale a reproducir y mira
            el parte de guerra completo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="glass clip-card relative overflow-hidden p-[1px]"
        >
          <div aria-hidden className="holo" />
          {/* header */}
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-neon-magenta" />
              </div>
              <span className="font-mono text-[11px] tracking-[0.2em] text-white/70 sm:text-xs">
                CHAT DE EQUIPO // PARTIDA PRIVADA
              </span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-widest">
              <span className="hidden items-center gap-1.5 text-neon-pink sm:flex">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-pink" />
                LIVE
              </span>
              <button
                aria-label={muted ? 'Activar sonido' : 'Silenciar sonido'}
                onClick={() => {
                  playClick()
                  setMuted((m) => !m)
                }}
                className="cursor-pointer text-white/50 transition-colors hover:text-neon-pink"
              >
                {muted ? '🔇' : '🔊'}
              </button>
            </div>
          </div>

          {/* body — keyed so replay fully remounts the typewriter */}
          <TerminalBody
            key={runId}
            muted={muted}
            onReplay={() => setRunId((r) => r + 1)}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-center font-mono text-[11px] tracking-[0.3em] text-white/40"
        >
          ✦ ESCRITO DE CORAZÓN, CIFRADO PARA SIEMPRE ✦
        </motion.p>
      </div>
    </section>
  )
}