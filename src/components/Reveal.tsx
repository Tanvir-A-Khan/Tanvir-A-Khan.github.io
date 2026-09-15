import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

export default function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className ?? ''}`}
    >
      {children}
    </div>
  )
}
