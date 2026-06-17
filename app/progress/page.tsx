import { Suspense } from "react"
import { AppShell } from "@/components/dashboard/app-shell"
import { ProgressSection } from "@/components/dashboard/progress-section"
import { ActivityGraph } from "@/components/dashboard/activity-graph"
import { ProgressSkeleton } from "@/components/dashboard/skeletons"
import { PageHeading, SectionTitle } from "@/components/dashboard/page-heading"

export const metadata = {
  title: "Progress — Lumen",
}

export default function ProgressPage() {
  return (
    <AppShell>
      <PageHeading
        title="Your progress"
        subtitle="A clear view of how far you've come across every course."
      />

      <div className="flex flex-col gap-8">
        <Suspense fallback={<ProgressSkeleton />}>
          <ProgressSection />
        </Suspense>

        <section aria-labelledby="activity-heading">
          <SectionTitle>
            <span id="activity-heading">Activity</span>
          </SectionTitle>
          <ActivityGraph />
        </section>
      </div>
    </AppShell>
  )
}
