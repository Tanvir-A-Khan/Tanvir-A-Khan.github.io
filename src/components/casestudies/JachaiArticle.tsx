import ArchitectureDiagram from './ArchitectureDiagram'
import {
  Article,
  CaseStudyHero,
  CaseStudySection,
  ChallengeCard,
  ChallengesGrid,
  Prose,
  SystemDiagram,
  WhatILearned,
} from './shared'

export default function JachaiArticle() {
  return (
    <Article>
      <CaseStudyHero
        kicker="Case study 02"
        title="Jachai"
        description="A QR-code book authenticity verification platform for Rokomari, Bangladesh's largest online bookstore — customers scan a code to confirm their copy is genuine rather than a counterfeit reprint."
        meta={[
          { label: 'ROLE', value: 'Backend and verification flow — Software Engineer Intern' },
          { label: 'STATUS', value: 'Shipped to production', accent: true },
          { label: 'STACK', value: 'Spring Boot, Hibernate, Next.js, MongoDB' },
        ]}
      />

      <CaseStudySection title="The problem">
        <Prose>
          Counterfeit reprints circulate widely in the Bangladeshi book market, and a customer
          holding a book has no way to tell an authentic copy from a good fake. For a bookstore at
          Rokomari's scale, that doubt attaches to every order, whether or not the copy is genuine.
        </Prose>
      </CaseStudySection>

      <CaseStudySection title="The approach">
        <Prose>
          Verification had to work for someone standing in their living room with a phone and no
          account. That ruled out anything behind a login: a scan resolves to a public page, the
          lookup is a single fast read, and the answer is legible in a second. On the backend, QR
          generation and lookup were kept as separate endpoints so issuing codes at catalogue scale
          never sits in the path of a customer verifying one.
        </Prose>
      </CaseStudySection>

      <CaseStudySection title="The system">
        <SystemDiagram>
          <ArchitectureDiagram
            ariaLabel="Architecture: customer scan to Next.js verification page to Spring Boot lookup API to the book records database."
            viewBoxHeight={352}
            rectX={20}
            rectWidth={280}
            rows={['CUSTOMER SCAN', 'NEXT.JS VERIFICATION', 'SPRING BOOT LOOKUP API', 'MONGODB · MYSQL']}
          />
        </SystemDiagram>
      </CaseStudySection>

      <CaseStudySection title="Engineering challenges">
        <ChallengesGrid>
          <ChallengeCard label="01">
            Codes have to be unique per copy and cheap to look up, while generation runs in bulk
            against a live catalogue. Keeping issuance and verification on separate paths meant a
            batch of new codes could never slow down a customer holding a book.
          </ChallengeCard>
          <ChallengeCard label="02">
            The result page is the whole product for most users. It had to render fast on a
            mid-range phone, state the outcome without hedging, and make the failure case — a code
            that does not resolve — just as clear as the success case.
          </ChallengeCard>
        </ChallengesGrid>
      </CaseStudySection>

      <CaseStudySection title="The solution">
        <Prose>
          QR generation and lookup endpoints in Spring Boot and Hibernate, backed by MongoDB and
          MySQL, with the customer-facing verification flow in Next.js, TypeScript and Material UI
          — running in a high-traffic production environment alongside catalogue and order features
          I contributed to during the internship.
        </Prose>
      </CaseStudySection>

      <WhatILearned>
        Trust features are judged on their worst path. Most of the work went into the seconds after
        a scan — one clear answer, no account, no waiting — because a verification tool that is
        slow or ambiguous is worse than none at all.
      </WhatILearned>
    </Article>
  )
}
