import { motion } from 'framer-motion'

const CONTRACTS = [
  {
    num: '01',
    tag: 'OBJETIVO DE MISIÓN',
    title: 'LEALTAD ABSOLUTA',
    body: 'Cuando la partida se puso cuesta arriba y el minimapa se apagó, nunca soltaste la mano de tu dúo. Eso no se rinde: se honra.',
    status: 'CUMPLIDO · 100% SYNC',
  },
  {
    num: '02',
    tag: 'OBJETIVO DE MISIÓN',
    title: 'COBERTURA TOTAL',
    body: 'Siempre apareciste en mi retaguardia en las batallas más difíciles, recargando mis escudos cuando yo ya no daba más. Soporte nivel leyenda.',
    status: 'SIN COOLDOWN',
  },
  {
    num: '03',
    tag: 'CONTRATO DE AGENTE',
    title: 'ILUMINA EL LOBBY',
    body: 'Hay días con el servidor en penumbra y tú enciendes la luz del lobby. Entre la niebla tóxica siempre se ve tu brillo de estrella.',
    status: 'EFECTO ACTIVO ∞',
  },
]

const card = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function MissionCards() {
  return (
    <section
      id="objetivos"
      className="relative overflow-hidden border-t border-white/5 bg-carbon-900 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-[60rem] -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(255,0,84,0.18), transparent)',
          filter: 'blur(30px)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="mb-2 font-mono text-xs tracking-[0.4em] text-neon-magenta">
              // AGENDA DE HOY //
            </p>
            <h2 className="font-display text-4xl uppercase leading-none tracking-wide text-white sm:text-5xl">
              Contratos de{' '}
              <span className="text-kpop inline-block">Amistad</span>
            </h2>
          </div>
          <p className="max-w-xs border-l-2 border-neon-pink/50 pl-4 text-sm font-medium leading-relaxed text-white/60">
            Tres cláusulas firmadas con sangre de jugadora y brillantina de
            escenario. Sin fecha de expiración.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {CONTRACTS.map((c, i) => (
            <motion.article
              key={c.num}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="mission-card clip-card group relative flex flex-col border border-white/10 bg-carbon-800/80 p-6"
            >
              <div
                aria-hidden
                className="clip-tag absolute right-0 top-0 h-[3px] w-20 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-magenta opacity-80"
              />

              <div className="flex items-start justify-between">
                <span className="clip-tag bg-white/5 px-2.5 py-1 font-mono text-[10px] tracking-widest text-neon-apricot">
                  {c.tag}
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-sm border border-neon-cyan/30 bg-neon-cyan/10 text-xs transition-all duration-300 group-hover:border-neon-pink/50 group-hover:bg-neon-pink/15">
                  💖
                </span>
              </div>

              <div className="mt-5 flex items-baseline gap-3">
                <span className="pixel-spark mr-1 self-center" aria-hidden />
                <span className="font-mono text-4xl text-white/15 transition-colors duration-300 group-hover:text-neon-pink/60">
                  {c.num}
                </span>
                <h3
                  data-text={c.title}
                  className="glitch font-display text-xl uppercase leading-tight tracking-wide text-white"
                >
                  {c.title}
                </h3>
              </div>

              <p className="mt-4 flex-1 text-[15px] font-medium leading-relaxed text-white/65">
                {c.body}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10px] tracking-[0.25em] text-white/45">
                <span className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-neon-magenta" />
                  {c.status}
                </span>
                <span className="transition-colors group-hover:text-neon-pink">
                  [FIRMADO] 💖
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}