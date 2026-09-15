import { useCallback, useEffect, useRef, useState } from 'react'

export function useTypewriter(text, { speed = 14, startDelay = 600 } = {}) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const raf = useRef(0)
  const delay = useRef(0)

  useEffect(() => {
    let cancelled = false
    let finished = false
    let last = 0

    const tick = (now) => {
      if (cancelled || finished) return
      if (now - last >= speed) {
        last = now
        setCount((c) => {
          const next = c + 1
          if (next >= text.length) {
            finished = true
            setDone(true)
          }
          return next
        })
      }
      if (!finished) raf.current = requestAnimationFrame(tick)
    }

    delay.current = setTimeout(() => {
      last = performance.now()
      raf.current = requestAnimationFrame(tick)
    }, startDelay)

    return () => {
      cancelled = true
      cancelAnimationFrame(raf.current)
      clearTimeout(delay.current)
    }
  }, [text, speed, startDelay])

  const skip = useCallback(() => {
    setCount(text.length)
    setDone(true)
    cancelAnimationFrame(raf.current)
    clearTimeout(delay.current)
  }, [text.length])

  return { typed: text.slice(0, count), done, skip }
}