import { useState } from 'react'

interface ProjectImageProps {
  src: string
  alt: string
  name: string
}

export default function ProjectImage({ src, alt, name }: ProjectImageProps) {
  const [errored, setErrored] = useState(false)

  return (
    <div className="mb-[clamp(28px,5vh,48px)] overflow-hidden rounded-2xl border border-line shadow-[var(--shadowHi)]">
      {errored ? (
        <div
          className="flex aspect-[16/9] items-center justify-center bg-[linear-gradient(152deg,var(--sheen),transparent_58%),var(--panel)]"
          role="img"
          aria-label={alt}
        >
          <span className="font-martian text-[13px] uppercase tracking-[0.08em] text-ink4">
            {name} — screenshot coming soon
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="block aspect-[16/9] w-full object-cover"
          onError={() => setErrored(true)}
        />
      )}
    </div>
  )
}
