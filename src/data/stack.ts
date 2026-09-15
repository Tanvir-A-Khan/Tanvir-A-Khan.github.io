export interface StackGroup {
  label: string
  items: Array<[name: string, note: string]>
}

export const STACK: StackGroup[] = [
  {
    label: 'FRONTEND & MOBILE',
    items: [
      ['React', 'The core of my enterprise UI work — complex, interactive interfaces that large teams maintain.'],
      ['TypeScript', 'Type safety across large frontend codebases, where component contracts matter more than speed of writing.'],
      ['Next.js', 'App structure, routing and rendering for production web products like MaafCraft and Jachai.'],
      ['React Native', 'Cross-platform mobile apps in Expo — Takafy and Tasbeeh Noor, both built and released end to end.'],
      ['Angular', 'Frontend for the Tax Research Platform at Kaz Software.'],
    ],
  },
  {
    label: 'BACKEND',
    items: [
      ['Java', 'The language behind most of my backend work — Spring Boot services at Rokomari and Kaz Software.'],
      ['Spring Boot', 'REST services, Hibernate data models and API design for e-commerce and enterprise platforms.'],
      ['Python', 'FastAPI services for my own products, plus parsing pipelines and scripting.'],
      ['FastAPI', 'Backend for Takafy — SQLAlchemy models, Alembic migrations and a layered SMS parsing pipeline.'],
      ['Node.js', 'Backend services for LambdaX at IBM — the part of the stack that made the role full-stack.'],
    ],
  },
  {
    label: 'DATA & AI',
    items: [
      ['PostgreSQL', 'Relational data on Supabase where integrity and query power matter.'],
      ['MongoDB', 'Document modelling for e-commerce and catalogue-driven products.'],
      ['MySQL', 'Relational work behind Spring Boot and Hibernate services.'],
      ['LLM integration', 'Gemini and Groq/Llama with multi-provider fallback, so cost and availability are both controlled.'],
      ['scikit-learn', 'IsolationForest anomaly detection to surface unusual spending in Takafy.'],
    ],
  },
  {
    label: 'TOOLS & DELIVERY',
    items: [
      ['Git / GitLab', 'Branching, reviews, and the day-to-day discipline of a shared team codebase.'],
      ['Play Console', 'Release signing, store listings and review — Tasbeeh Noor is live under the T-Tech account.'],
      ['Vercel', 'Deploying and previewing frontend applications continuously.'],
      ['Cloudinary', 'Media pipeline, watermarking and image delivery off the application server.'],
      ['Jira / Agile', 'Sprint planning, triage and the reporting side of delivery.'],
    ],
  },
]
