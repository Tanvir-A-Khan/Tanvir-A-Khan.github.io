import { useEffect, useRef } from 'react'
import { initParticleField } from '../lib/particles'

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const el = canvasRef.current
    if (!el) return
    const stop = initParticleField(el)
    return () => stop()
  }, [])

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            'radial-gradient(46% 38% at 22% 26%, var(--glow1), transparent 70%), radial-gradient(40% 34% at 82% 62%, var(--glow2), transparent 72%), radial-gradient(52% 40% at 50% 108%, var(--glow1), transparent 74%)',
        }}
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 h-full w-full"
        style={{
          maskImage: 'radial-gradient(78% 68% at 50% 50%, #000 12%, rgba(0,0,0,0.72) 52%, transparent 88%)',
          WebkitMaskImage:
            'radial-gradient(78% 68% at 50% 50%, #000 12%, rgba(0,0,0,0.72) 52%, transparent 88%)',
        }}
      />
    </>
  )
}
