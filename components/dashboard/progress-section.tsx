import { getCourses } from "@/lib/courses"
import { ProgressOverview } from "@/components/dashboard/progress-overview"
import { CoursesError } from "@/components/dashboard/courses-error"

export async function ProgressSection() {
  try {
    const courses = await getCourses()
    return <ProgressOverview courses={courses} />
  } catch {
    return <CoursesError />
  }
}
