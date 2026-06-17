import { Suspense } from "react"
import { AppShell } from "@/components/dashboard/app-shell"
import { CoursesSection } from "@/components/dashboard/courses-section"
import { CourseGridSkeleton } from "@/components/dashboard/skeletons"
import { PageHeading } from "@/components/dashboard/page-heading"

export const metadata = {
  title: "Courses — Lumen",
}

export default function CoursesPage() {
  return (
    <AppShell>
      <PageHeading
        title="Your courses"
        subtitle="Pick up where you left off or explore something new."
      />
      <Suspense fallback={<CourseGridSkeleton />}>
        <CoursesSection />
      </Suspense>
    </AppShell>
  )
}
