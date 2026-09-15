// Small, reused Tailwind class recipes for the frosted-glass panel look that
// recurs across almost every card/section in the design.

export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

// `background: linear-gradient(...), var(--card)` (the original CSS shorthand)
// lets the final layer fall back to a plain color. Tailwind's `bg-[...]`
// arbitrary value always compiles to a single `background-image` (or
// `background-color`) declaration, and `background-image: linear-gradient(...),
// var(--card)` is invalid CSS — a bare color isn't a valid image layer — so the
// whole declaration gets dropped and the surface renders with no background at
// all. Setting the gradient and the color as two separate properties gives the
// identical visual result and is valid.
// Blur radius kept modest on purpose: with dozens of these panels stacked
// over a continuously-animating canvas background, backdrop-filter cost adds
// up fast (the browser has to re-blur the backdrop under every panel on
// every canvas repaint). The panel's own solid bg-card/bg-panel fill already
// does most of the visual separation, so a heavy blur isn't buying much.
export function glass(bg: 'card' | 'panel' = 'card'): string {
  return `bg-${bg} bg-[image:linear-gradient(152deg,var(--sheen),transparent_58%)] backdrop-blur-[10px] backdrop-saturate-[1.2] shadow-[var(--shadow),inset_0_1px_0_var(--glassHi)]`
}

export const nodeDot =
  "inline-block w-[5px] h-[5px] rounded-full bg-retro animate-nodepulse"
