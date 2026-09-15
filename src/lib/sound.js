let ctx = null

export function playClick(theme = 'ui') {
  try {
    if (typeof window === 'undefined') return
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    ctx ??= new AC()
    if (ctx.state === 'suspended') ctx.resume()

    const t0 = ctx.currentTime

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    if (theme === 'confirm') {
      osc.type = 'sine'
      osc.frequency.setValueAtTime(660, t0)
      osc.frequency.exponentialRampToValueAtTime(1320, t0 + 0.14)
      gain.gain.setValueAtTime(0.0001, t0)
      gain.gain.exponentialRampToValueAtTime(0.18, t0 + 0.02)
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.35)
    } else {
      osc.type = 'square'
      osc.frequency.setValueAtTime(1400, t0)
      osc.frequency.exponentialRampToValueAtTime(520, t0 + 0.06)
      gain.gain.setValueAtTime(0.0001, t0)
      gain.gain.exponentialRampToValueAtTime(0.05, t0 + 0.008)
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.09)
    }

    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(t0)
    osc.stop(t0 + 0.4)
  } catch {
    /* audio is optional — fail silently */
  }
}