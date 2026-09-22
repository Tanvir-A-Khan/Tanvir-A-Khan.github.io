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
  WhatILearned,
} from './shared'

const project = PROJECTS.find((p) => p.id === 'lambdax')!

export default function LambdaXArticle() {
  return (
    <Article>
      <ProjectImage src={project.image} alt={project.imageAlt} name={project.label} />
      <CaseStudyHero
        kicker="Case study 01"
        title="LambdaX"
        description="An enterprise agreement and contract management platform. I work across the stack on the lax-web-portal codebase — first at Cognitus, now at IBM — from the contract editor and activity logger to the React frontend and Node.js services."
        meta={[
          { label: 'ROLE', value: 'Full-stack engineer — lax-web-portal' },
          { label: 'STATUS', value: 'In production · Cognitus, now IBM', accent: true },
          { label: 'STACK', value: 'React, TypeScript, Node.js, Google Calendar API' },
        ]}
      />

      <CaseStudySection title="The problem">
        <Prose>
          Contract work does not stay inside a contract platform. Renewal dates end up in someone's
          calendar, the notice that a deadline is approaching arrives by email, and the document it
          refers to is several clicks away. Every one of those handoffs is a chance for a date to
          be missed or the wrong version to be opened.
        </Prose>
      </CaseStudySection>

      <CaseStudySection title="The approach">
        <Prose>
          Bring the two surfaces users leave for — their calendar and their inbox — into the
          platform. The calendar module syncs both ways with Google Calendar so events, tasks and
          milestones stay correct wherever they are edited, with notifications fired ahead of each
          one. Notifications deep-link to the specific agreement rather than a dashboard, and offer
          one-click download of the related attachment, so a reference resolves to a document in a
          single step.
        </Prose>
      </CaseStudySection>

      <CaseStudySection title="The system">
        <SystemDiagram>
          <ArchitectureDiagram
            ariaLabel="Architecture: users work in the React portal, whose calendar module syncs two ways with Google Calendar and whose notifications deep-link into agreement records and attachments."
            viewBoxHeight={436}
            rectX={20}
            rectWidth={280}
            rows={[
              'ENTERPRISE USER',
              'LAX-WEB-PORTAL · REACT + TS + NODE',
              'CALENDAR MODULE ⇄ GOOGLE',
              'NOTIFICATIONS · DEEP LINKS',
              'AGREEMENTS · ATTACHMENTS',
            ]}
          />
        </SystemDiagram>
      </CaseStudySection>

      <CaseStudySection title="Engineering challenges">
        <ChallengesGrid>
          <ChallengeCard label="01">
            Two-way sync means two systems can both be right. An event edited in Google and the
            same event edited in the portal have to converge without echoing changes back and
            forth, and without a user ever seeing a duplicate of their own milestone.
          </ChallengeCard>
          <ChallengeCard label="02">
            A deep link has to land somewhere specific and still respect what the recipient is
            allowed to see. Getting from a notification to the referenced document in one click —
            rather than a dashboard and a search — was the point of the feature, so the routing and
            the attachment fetch had to be handled together.
          </ChallengeCard>
        </ChallengesGrid>
      </CaseStudySection>

      <CaseStudySection title="The solution">
        <Prose>
          A full calendar module with two-way Google Calendar synchronization, covering events,
          tasks and milestones with automated notifications ahead of each one, plus an in-app
          notification system with agreement deep links and one-click attachment download. That
          frontend work sits alongside full-stack ownership elsewhere in the platform — the
          contract editor and a Node.js-backed activity/audit logger — plus a steady stream of
          critical production defects diagnosed and resolved, measurably improving stability and
          responsiveness for enterprise users.
        </Prose>
      </CaseStudySection>

      <WhatILearned>
        Count the steps, not the features. The notification work shipped nothing visually
        impressive; it removed clicks between a reminder and the document it referred to, and that
        is what users noticed. Enterprise software earns its keep in the distance between intent
        and result.
      </WhatILearned>
    </Article>
  )
}
