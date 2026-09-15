export interface FeaturedProject {
  slug: string
  name: string
  statusLabel: string
  description: string
  stack: string[]
  scope: string
}

export const FEATURED_PROJECT: FeaturedProject = {
  slug: 'lambdax',
  name: 'LambdaX',
  statusLabel: 'IN PRODUCTION',
  description:
    'An enterprise agreement and contract management platform. I work across the stack on the lax-web-portal codebase — first at Cognitus, now at IBM — building the contract editor, calendar sync, in-app notifications and an activity/audit logger.',
  stack: ['React', 'TypeScript', 'Node.js', 'Google Calendar API'],
  scope: 'Contract editor, calendar sync, notifications and activity logging across frontend and Node.js services.',
}

export interface ShippedProject {
  index: string
  slug: string
  name: string
  description: string
  stack: string[]
  externalUrl?: string
  externalLabel?: string
}

export const SHIPPED_PROJECTS: ShippedProject[] = [
  {
    index: '02',
    slug: 'maafcraft',
    name: 'MaafCraft',
    description:
      'A full-stack e-commerce platform, independently designed, built and deployed — backend services, storefront, data model and production hosting. Every uploaded product image is watermarked automatically before storage.',
    stack: ['Next.js', 'TypeScript', 'Spring Boot', 'MongoDB', 'Cloudinary'],
    externalUrl: 'https://maafcraft.com',
    externalLabel: 'maafcraft.com',
  },
  {
    index: '03',
    slug: 'jachai',
    name: 'Jachai',
    description:
      "A QR-code book authenticity verification platform for Rokomari, Bangladesh's largest online bookstore — customers scan to confirm a copy is genuine rather than a counterfeit reprint.",
    stack: ['Spring Boot', 'Hibernate', 'Next.js', 'TypeScript'],
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
