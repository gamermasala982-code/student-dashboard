import { getCourses } from "@/lib/courses"
import { CourseGrid } from "@/components/dashboard/course-grid"
import { CoursesError } from "@/components/dashboard/courses-error"

/**
 * Async Server Component — fetches courses on the server.
 * Wrapped in Suspense by the caller for skeleton streaming. Catches its own
 * errors so a fetch failure renders a graceful fallback instead of crashing
 * the whole page.
 */
export async function CoursesSection() {
  try {
    const courses = await getCourses()
    return <CourseGrid courses={courses} />
  } catch {
    return <CoursesError />
  }
}
