"use client"

import type { Course } from "@/lib/courses"
import { StaggerContainer } from "./motion"
import { CourseCard } from "./course-card"

export function CourseGrid({ courses }: { courses: Course[] }) {
  if (courses.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-border p-10 text-center">
        <p className="text-sm text-muted-foreground">
          No courses yet. Enroll in a course to get started.
        </p>
      </div>
    )
  }

  return (
    <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, i) => (
        <CourseCard key={course.id} course={course} index={i} />
      ))}
    </StaggerContainer>
  )
}
