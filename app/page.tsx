import { Suspense } from "react"
import { AppShell } from "@/components/dashboard/app-shell"
import { DashboardHero } from "@/components/dashboard/dashboard-hero"
import { CoursesSection } from "@/components/dashboard/courses-section"
import { ActivityGraph } from "@/components/dashboard/activity-graph"
import { CourseGridSkeleton } from "@/components/dashboard/skeletons"
import { SectionTitle } from "@/components/dashboard/page-heading"

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="flex flex-col gap-8">
        <DashboardHero />

        <section aria-labelledby="courses-heading">
          <div id="courses-heading">
            <SectionTitle>Continue learning</SectionTitle>
          </div>
          <Suspense fallback={<CourseGridSkeleton />}>
            <CoursesSection />
          </Suspense>
        </section>

        <section aria-labelledby="activity-heading">
          <h2 id="activity-heading" className="sr-only">
            Learning activity
          </h2>
          <ActivityGraph />
        </section>
      </div>
    </AppShell>
  )
}
