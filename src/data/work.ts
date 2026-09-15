export interface ShippedProject {
  index: string
  slug: string
  name: string
  description: string
  stack: string[]
}

export const SHIPPED_PROJECTS: ShippedProject[] = [
  {
    index: '02',
    slug: 'jachai',
    name: 'Jachai',
    description:
      "A QR-code book authenticity verification platform for Rokomari, Bangladesh's largest online bookstore — customers scan to confirm a copy is genuine rather than a counterfeit reprint.",
    stack: ['Spring Boot', 'Hibernate', 'Next.js', 'TypeScript'],
  },
  {
    index: '03',
    slug: 'lambdax',
    name: 'LambdaX',
    description:
      'An enterprise agreement and contract management platform. I build its frontend — a calendar module with two-way Google Calendar sync, and in-app notifications that deep-link to agreements and their attachments.',
    stack: ['React', 'TypeScript', 'Google Calendar API'],
  },
  {
    index: '04',
    slug: 'tasbeeh-noor',
    name: 'Tasbeeh Noor',
    description:
      'A digital prayer bead counter, published on Google Play under the T-Tech developer account — designed, built and taken through the full release pipeline.',
    stack: ['React Native', 'Expo', 'Play Console'],
  },
]

export interface InDevelopmentProject {
  index: string
  name: string
  description: string
  stack: string[]
}

export const IN_DEVELOPMENT_PROJECTS: InDevelopmentProject[] = [
  {
    index: '05',
    name: 'Takafy',
    description:
      'An AI-powered personal finance assistant that turns transaction SMS from Bangladeshi mobile financial services into a structured ledger. A four-layer parsing pipeline — sender routing, per-sender regex, heuristic inference, then LLM fallback — resolves most messages deterministically, so API spend stays negligible.',
    stack: ['React Native', 'FastAPI', 'SQLAlchemy', 'Supabase', 'Gemini', 'Groq/Llama', 'scikit-learn'],
  },
  {
    index: '06',
    name: 'Traffic Rush Dhaka',
    description:
      'An endless lane-dodging arcade game themed on Dhaka traffic, built from the core gameplay loop through the art pipeline and Play Console release workflow.',
    stack: ['Godot 4', 'GDScript', 'Play Console'],
  },
]
