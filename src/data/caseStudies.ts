export interface ProjectTab {
  id: string
  label: string
  image: string
  imageAlt: string
}

// Screenshots live in public/case-studies/<slug>.jpg — drop a real file at
// that path (any of jpg/png/webp, update the extension here if needed) and
// it replaces the placeholder automatically; ProjectImage falls back to a
// placeholder if the file is missing.
export const PROJECTS: ProjectTab[] = [
  { id: 'lambdax', label: 'LAMBDAX', image: '/case-studies/lambdax.jpg', imageAlt: 'LambdaX contract management platform' },
  { id: 'maafcraft', label: 'MAAFCRAFT', image: '/case-studies/maafcraft.jpg', imageAlt: 'MaafCraft e-commerce storefront' },
  { id: 'jachai', label: 'JACHAI', image: '/case-studies/jachai.jpg', imageAlt: 'Jachai book authenticity verification flow' },
  {
    id: 'tasbeeh-noor',
    label: 'TASBEEH NOOR',
    image: '/case-studies/tasbeeh-noor.jpg',
    imageAlt: 'Tasbeeh Noor prayer bead counter app',
  },
]
