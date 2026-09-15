// Abstract particle-wave background: a dot grid displaced by layered sine waves.
// Dots brighten where rows compress, which is what reads as folds in the surface.

type RGB = [number, number, number]

function hexToRgb(str: string): RGB {
  const s = str.trim()
  if (s.startsWith('#')) {
    const h = s.length === 4 ? s[1] + s[1] + s[2] + s[2] + s[3] + s[3] : s.slice(1, 7)
    const n = parseInt(h, 16)
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
  }
  const m = s.match(/(\d+(?:\.\d+)?)/g)
  return m ? [+m[0], +m[1], +m[2]] : [255, 154, 61]
}

export function initParticleField(canvas: HTMLCanvasElement): () => void {
  const ctx2d = canvas.getContext('2d')
  if (!ctx2d) return function () {}
  const ctx: CanvasRenderingContext2D = ctx2d

  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  // A wider grid and a capped backing-store resolution cut the per-frame cell
  // count dramatically. This matters more than it looks: the canvas sits
  // behind dozens of backdrop-blur panels, so every repaint here forces the
  // browser to re-blur every one of them, not just redraw the canvas itself.
  const STEP = 22
  let w = 0,
    h = 0,
    dpr = 1,
    cols = 0,
    rows = 0
  let cA: RGB = [255, 154, 61]
  let cB: RGB = [232, 163, 61]
  // A light background needs noticeably more ink than a dark one for the same
  // dot to read as visible: the dark accent colors used in light mode sit much
  // closer in luminance to the page than the bright accent does to a near-
  // black page, so identical alpha values look far fainter here.
  let alphaBoost = 1
  let raf = 0,
    last = 0,
    lastTheme = 0

  function readTheme() {
    const cs = getComputedStyle(document.documentElement)
    cA = hexToRgb(cs.getPropertyValue('--accent') || '#FF9A3D')
    cB = hexToRgb(cs.getPropertyValue('--retro') || '#E8A33D')
    alphaBoost = document.documentElement.getAttribute('data-theme') === 'light' ? 2.4 : 1
  }

  function resize(): boolean {
    const rect = canvas.getBoundingClientRect()
    const mw = canvas.clientWidth || rect.width || window.innerWidth
    const mh = canvas.clientHeight || rect.height || window.innerHeight
    if (mw < 1 || mh < 1) return false // never latch a zero-size backing store
    dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    w = mw
    h = mh
    canvas.width = Math.floor(w * dpr)
    canvas.height = Math.floor(h * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    cols = Math.ceil(w / STEP) + 2
    rows = Math.ceil(h / STEP) + 2
    return true
  }

  // Layered sines standing in for noise. Each layer drifts at its own slow rate,
  // so the surface never repeats a beat and the motion stays smooth.
  function field(nx: number, ny: number, t: number): number {
    const sway = Math.sin(t * 0.21) * 0.22
    return (
      Math.sin((nx + sway) * 5.4 + t * 0.85) * 27 +
      Math.sin(nx * 3.1 + ny * 4.3 - t * 0.54) * 22 +
      Math.sin(ny * 4.8 + t * 0.33) * 16 +
      Math.sin(nx * 8.6 - ny * 1.9 + t * 0.19) * 9 +
      Math.sin(nx * 1.7 + ny * 1.3 - t * 0.12) * 12
    )
  }

  // Row buffers so each grid point's field value is computed once, not twice
  // (once as "this row", once as "the row above's next row") — halves the
  // trig-call count for the same visual result.
  let rowBuf: Float32Array = new Float32Array(0)
  let nextRowBuf: Float32Array = new Float32Array(0)

  function draw(t: number) {
    if (w < 1 || h < 1) return
    ctx.clearRect(0, 0, w, h)
    const dy = STEP / h
    // slow lateral drift of the whole field
    const driftX = Math.sin(t * 0.16) * STEP * 1.4
    const driftY = Math.cos(t * 0.11) * STEP * 0.7
    const cx = 0.5,
      cy = 0.5
    if (rowBuf.length !== cols) {
      rowBuf = new Float32Array(cols)
      nextRowBuf = new Float32Array(cols)
    }
    for (let i = 0; i < cols; i++) {
      const nx = (i * STEP - STEP) / w
      rowBuf[i] = field(nx, -STEP / h, t)
    }
    for (let j = 0; j < rows; j++) {
      const y = j * STEP - STEP
      const ny = y / h
      const ddy = (ny - cy) * 1.9
      for (let i = 0; i < cols; i++) {
        const x = i * STEP - STEP
        const nx = x / w
        const d = rowBuf[i]
        nextRowBuf[i] = field(nx, ny + dy, t)
        // vertical compression between this row and the next
        const comp = 1 - (STEP + (nextRowBuf[i] - d) * 0.62) / STEP
        const m = Math.min(1, Math.max(0, comp * 3.3 + 0.22))
        // brightest through the middle band of the screen
        const ddx = (nx - cx) * 1.25
        const fall = Math.max(0, 1 - (ddx * ddx + ddy * ddy))
        const center = fall * fall
        const a = Math.min(0.95, (0.1 + 0.72 * m * m) * (0.28 + 0.72 * center) * alphaBoost)
        if (a < 0.012) continue
        const r = 1.1 + 1.6 * m * m * (0.5 + 0.5 * center)
        const k = m * m
        ctx.fillStyle =
          'rgba(' +
          Math.round(cB[0] + (cA[0] - cB[0]) * k) +
          ',' +
          Math.round(cB[1] + (cA[1] - cB[1]) * k) +
          ',' +
          Math.round(cB[2] + (cA[2] - cB[2]) * k) +
          ',' +
          a.toFixed(3) +
          ')'
        ctx.fillRect(x + driftX * (0.4 + 0.6 * ny), y + driftY + d * 0.62, r, r)
      }
      // This row's "next" values become next iteration's "current" row.
      const swap = rowBuf
      rowBuf = nextRowBuf
      nextRowBuf = swap
    }
  }

  function frame(now: number) {
    raf = requestAnimationFrame(frame)
    if (now - last < 33) return // ~30fps — plenty smooth for a soft background, far less compositor pressure
    last = now
    if (w < 1 || h < 1) {
      resize()
      return
    } // still unsized; retry next frame
    if (now - lastTheme > 400) {
      readTheme()
      lastTheme = now
    }
    draw(now / 13000)
  }

  readTheme()
  const sized = resize()
  if (sized) draw(0.6) // paint immediately; rAF is paused while the tab is hidden

  if (!reduce) raf = requestAnimationFrame(frame)

  const paint = () => {
    readTheme()
    if (resize()) draw(reduce ? 0.6 : performance.now() / 13000)
  }
  const onVisible = () => {
    if (document.hidden) return
    if (!reduce && !raf) raf = requestAnimationFrame(frame)
    paint()
  }

  // The component can mount before the document has layout, so the box may
  // still be 0x0 here. Watch it and paint the moment it gets a real size.
  let ro: ResizeObserver | null = null
  if (typeof ResizeObserver !== 'undefined') {
    ro = new ResizeObserver(() => {
      paint()
    })
    ro.observe(canvas)
  }
  // Theme toggles only flip data-theme, which is not a repaint trigger on its
  // own — reduced-motion visitors have no frame loop to pick the change up.
  let mo: MutationObserver | null = null
  if (typeof MutationObserver !== 'undefined') {
    mo = new MutationObserver(() => {
      paint()
    })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  }
  window.addEventListener('resize', paint)
  document.addEventListener('visibilitychange', onVisible)

  // rAF and ResizeObserver are both suspended while the document is hidden, so
  // a background-tab load has no way back. Timers still run (throttled), so
  // poll until the box is measurable.
  let poll = 0
  if (!sized) {
    let tries = 0
    poll = window.setInterval(function () {
      if (resize()) {
        clearInterval(poll)
        poll = 0
        readTheme()
        draw(reduce ? 0.6 : performance.now() / 13000)
      } else if (++tries > 40) {
        clearInterval(poll)
        poll = 0
      }
    }, 250)
  }

  return function cleanup() {
    if (raf) cancelAnimationFrame(raf)
    raf = 0
    if (poll) clearInterval(poll)
    if (ro) ro.disconnect()
    if (mo) mo.disconnect()
    window.removeEventListener('resize', paint)
    document.removeEventListener('visibilitychange', onVisible)
  }
}
