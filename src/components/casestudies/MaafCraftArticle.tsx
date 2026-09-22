import { PROJECTS } from '../../data/caseStudies'
import ArchitectureDiagram from './ArchitectureDiagram'
import ProjectImage from './ProjectImage'
import {
  Article,
  CaseStudyHero,
  CaseStudySection,
  ChallengeCard,
  ChallengesGrid,
  Prose,
  SystemDiagram,
  TechCategory,
  WhatILearned,
} from './shared'

const project = PROJECTS.find((p) => p.id === 'maafcraft')!

export default function MaafCraftArticle() {
  return (
    <Article>
      <ProjectImage src={project.image} alt={project.imageAlt} name={project.label} />
      <CaseStudyHero
        kicker="Case study 02"
        title="MaafCraft"
        description="A full-stack e-commerce platform — backend services, storefront, data model and production hosting, built and deployed independently."
        meta={[
          { label: 'ROLE', value: 'Sole engineer — architecture to deployment' },
          { label: 'STATUS', value: 'Live · maafcraft.com', accent: true, href: 'https://maafcraft.com' },
          { label: 'STACK', value: 'Spring Boot, Next.js, MongoDB, Cloudinary' },
        ]}
      />

      <CaseStudySection title="The problem">
        <p className="mb-3.5 max-w-[66ch] text-[16px] leading-[1.75] text-ink2">
          Running a product store means owning two things at once: a storefront customers trust,
          and a catalogue that stays manageable behind it. Hosted platforms solve the first and
          charge for the second, and neither handles the part that mattered most here — protecting
          seller photography, which is the main asset a small store has online.
        </p>
        <Prose>
          The constraint was a team of one and a single VPS. Every decision had to be something one
          engineer could operate: no service mesh, no build steps that need babysitting, and no
          image work happening on the same box that serves requests.
        </Prose>
      </CaseStudySection>

      <CaseStudySection title="The approach">
        <Prose>
          Two decisions carried the design. First, a clean split between a Spring Boot service
          layer and a Next.js storefront, so the catalogue API could be reasoned about and tested
          independently of rendering. Second, an image-processing service in the upload path: every
          product photo is watermarked automatically before it is stored, so protection is a
          property of the pipeline rather than a step someone has to remember. Cloudinary handles
          storage, transformation and delivery, keeping media traffic off the application server
          entirely.
        </Prose>
      </CaseStudySection>

      <CaseStudySection title="The system">
        <SystemDiagram>
          <ArchitectureDiagram
            ariaLabel="Architecture: user to Next.js application to API layer to MongoDB and cloud services."
            viewBoxHeight={400}
            rectX={70}
            rectWidth={180}
            rows={['USER', 'NEXT.JS STOREFRONT', 'SPRING BOOT API', 'MONGODB', 'CLOUDINARY']}
          />
        </SystemDiagram>
      </CaseStudySection>

      <CaseStudySection title="Engineering challenges">
        <ChallengesGrid>
          <ChallengeCard label="01 · THE UPLOAD PIPELINE">
            Watermarking has to happen exactly once, before storage, without blocking the seller on
            a slow request. The upload path became the one place in the system where ordering
            genuinely matters, so it stayed deliberately small and explicit rather than spread
            across handlers.
          </ChallengeCard>
          <ChallengeCard label="02 · MEDIA OFF THE APPLICATION SERVER">
            A storefront is mostly photographs, and a single VPS will not serve them well.
            Delegating transformation and delivery to Cloudinary meant the application server only
            ever handles the catalogue API and rendering, which is what kept a one-box deployment
            viable.
          </ChallengeCard>
          <ChallengeCard label="03 · CATALOGUE DATA MODEL">
            Products, variants and media references sit in MongoDB, shaped around how the
            storefront reads them rather than how they were entered. The trade-off is familiar:
            fast reads on product pages, more care required whenever a shared field changes.
          </ChallengeCard>
        </ChallengesGrid>
      </CaseStudySection>

      <CaseStudySection title="The solution">
        <Prose>
          A complete platform in production on a Hostinger VPS: Spring Boot services, a Next.js
          storefront, the MongoDB catalogue, and an image pipeline that watermarks and delivers
          every product photo without manual work. Designed, built, deployed and maintained by one
          person.
        </Prose>
      </CaseStudySection>

      <CaseStudySection title="Technologies">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6">
          <TechCategory label="FRONTEND" items={['Next.js', 'React', 'TypeScript']} />
          <TechCategory label="BACKEND" items={['Spring Boot', 'REST APIs']} />
          <TechCategory label="DATABASE" items={['MongoDB']} />
          <TechCategory label="INFRASTRUCTURE" items={['Hostinger VPS', 'Cloudinary']} />
        </div>
      </CaseStudySection>

      <WhatILearned>
        Put the rule in the pipeline, not in the process. Watermarking was originally something a
        seller would do before uploading; making it automatic removed an entire category of
        mistake. I now look for every place a manual step is quietly load-bearing and ask whether
        the system can hold it instead.
      </WhatILearned>
    </Article>
  )
}
