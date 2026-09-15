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

export default function TasbeehArticle() {
  return (
    <Article>
      <CaseStudyHero
        kicker="Case study 04"
        title="Tasbeeh Noor"
        description="A digital prayer bead counter, designed, built and published to the Google Play Store under the T-Tech developer account."
        meta={[
          { label: 'ROLE', value: 'Design, build and release — solo' },
          { label: 'PLATFORM', value: 'Android · live on Google Play', accent: true },
          { label: 'STACK', value: 'React Native (Expo), Play Console' },
        ]}
      />

      <CaseStudySection title="The problem">
        <Prose>
          A tasbeeh is used in a quiet, repetitive, often eyes-down moment. An app standing in for
          one has to disappear: count reliably, hold the count, and ask nothing of the person using
          it. Most of the difficulty is in restraint rather than features.
        </Prose>
      </CaseStudySection>

      <CaseStudySection title="The approach">
        <Prose>
          Build it small and ship it properly. React Native with Expo kept the app itself to a
          single, simple surface, which put the real work where it belonged for this project — the
          production release pipeline. Running that pipeline end to end was the point: an app that
          is not in the store is not finished.
        </Prose>
      </CaseStudySection>

      <CaseStudySection title="The system">
        <SystemDiagram>
          <ArchitectureDiagram
            ariaLabel="Release pipeline: the Expo app is configured and signed, built into a release artifact, then published through Play Console to users."
            viewBoxHeight={436}
            rectX={20}
            rectWidth={280}
            rows={[
              'REACT NATIVE · EXPO APP',
              'PACKAGE CONFIG · SIGNING',
              'RELEASE BUILD',
              'PLAY CONSOLE · REVIEW',
              'PUBLISHED TO USERS',
            ]}
          />
        </SystemDiagram>
      </CaseStudySection>

      <CaseStudySection title="Engineering challenges">
        <ChallengesGrid>
          <ChallengeCard label="01">
            Package configuration and release signing are unforgiving: the application id and
            signing key are decisions you make once and live with for the life of the app. Getting
            them right before the first upload mattered more than anything in the app itself.
          </ChallengeCard>
          <ChallengeCard label="02">
            Store listing and review is its own delivery step — content rating, data-safety
            declarations, assets and metadata all have to be correct before a build reaches anyone.
            Treating it as part of engineering rather than an afterthought is what got the app
            through review.
          </ChallengeCard>
        </ChallengesGrid>
      </CaseStudySection>

      <CaseStudySection title="The solution">
        <Prose>
          A published Android app, live on Google Play under the T-Tech developer account, with the
          full pipeline owned solo from package configuration and release signing through store
          listing and review.
        </Prose>
      </CaseStudySection>

      <WhatILearned>
        Shipping is a skill separate from building. The code was the small part; the distribution
        path — signing, versioning, store requirements, review — was the part worth learning, and
        it is now the part I set up first on anything intended for release.
      </WhatILearned>
    </Article>
  )
}
