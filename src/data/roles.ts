export interface Role {
  key: string
  period: string
  company: string
  title: string
  detail: string
  tech: string[]
  current?: boolean
}

export const ROLES: Role[] = [
  {
    key: 'rokomari',
    period: '2024',
    company: 'ROKOMARI.COM',
    title: 'Software Engineer Intern',
    detail:
      "Built Jachai, a QR-code book authenticity verification platform for Bangladesh's largest online bookstore. QR generation and lookup endpoints in Spring Boot and Hibernate, customer-facing verification flow in Next.js and TypeScript, plus catalogue and order features against MongoDB and MySQL in a high-traffic production environment.",
    tech: ['Java', 'Spring Boot', 'Hibernate', 'Next.js', 'MongoDB', 'MySQL'],
  },
  {
    key: 'kaz',
    period: '2024 — 25',
    company: 'KAZ SOFTWARE',
    title: 'Associate Software Engineer',
    detail:
      'Features for a Tax Research Platform serving a Netherlands-based client, focused on scalable data handling, visualization and reporting. Angular frontend against a Java Spring Boot and Hibernate backend on MySQL, with sprint tracking in Jira, feature design input, peer review and defect triage.',
    tech: ['Angular', 'Spring Boot', 'Hibernate', 'MySQL', 'Jira'],
  },
  {
    key: 'ttech',
    period: '2024 —',
    company: 'T-TECH',
    title: 'Founder & Software Engineer',
    detail:
      'Full-stack and mobile development for clients under an independently operated engineering brand. Cross-platform apps in React Native and Expo backed by Python/FastAPI services on Supabase and PostgreSQL, with the complete release pipeline owned end to end: package configuration, release signing, Alembic migrations and Google Play publishing.',
    tech: ['React Native', 'Expo', 'FastAPI', 'Supabase', 'Alembic', 'Play Console'],
  },
  {
    key: 'cognitus',
    period: '2024 — 26',
    company: 'COGNITUS',
    title: 'Software Engineer',
    detail:
      'Features for LambdaX, an enterprise agreement and contract management platform, in the lax-web-portal frontend. Built a full calendar module with two-way Google Calendar sync for events, tasks and milestones, and an in-app notification system with deep links to specific agreements and one-click attachment download. Resolved critical production defects affecting platform stability for enterprise users.',
    tech: ['React', 'TypeScript', 'Calendar sync', 'Notifications', 'Enterprise UI'],
  },
  {
    key: 'ibm',
    period: '2026 —',
    company: 'IBM',
    title: 'Junior Software Engineer',
    current: true,
    detail:
      "Continuing frontend development on LambdaX in React and TypeScript following the team's transition into IBM. Diagnosing and resolving production defects and shipping reviewed, released functionality within a distributed cross-timezone team.",
    tech: ['React', 'TypeScript', 'Enterprise UI', 'Distributed teams'],
  },
]
