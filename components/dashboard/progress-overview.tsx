"use client"

import { motion } from "framer-motion"
import type { Course } from "@/lib/courses"
import { getCourseIcon } from "@/lib/course-icons"
import { StaggerContainer, itemVariants } from "./motion"
import { ProgressBar } from "./progress-bar"
import { ProgressRing } from "./progress-ring"

export function ProgressOverview({ courses }: { courses: Course[] }) {
  const overall =
    courses.length === 0
      ? 0
      : Math.round(
          courses.reduce((sum, c) => sum + c.progress, 0) / courses.length,
        )
  const completed = courses.filter((c) => c.progress >= 100).length
  const inProgress = courses.filter((c) => c.progress > 0 && c.progress < 100).length

  return (
    <StaggerContainer className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {/* Overall ring */}
      <motion.section
        variants={itemVariants}
        className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-card p-6 text-center"
        aria-label="Overall completion"
      >
        <ProgressRing value={overall} label="overall" />
        <div className="flex items-center gap-6">
          <div>
            <p className="text-xl font-semibold tabular-nums">{completed}</p>
            <p className="text-xs text-muted-foreground">Completed</p>
          </div>
          <div className="h-8 w-px bg-border" aria-hidden="true" />
          <div>
            <p className="text-xl font-semibold tabular-nums">{inProgress}</p>
            <p className="text-xs text-muted-foreground">In progress</p>
          </div>
        </div>
      </motion.section>

      {/* Per-course breakdown */}
      <motion.section
        variants={itemVariants}
        className="rounded-3xl border border-border bg-card p-6 lg:col-span-2"
        aria-label="Progress by course"
      >
        <h2 className="mb-5 text-base font-medium">Progress by course</h2>
        <ul className="flex flex-col gap-5">
          {courses.map((course, i) => {
            const Icon = getCourseIcon(course.icon_name)
            return (
              <li key={course.id} className="flex items-center gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <Icon className="size-4.5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 flex items-center justify-between gap-3">
                    <span className="truncate text-sm font-medium">{course.title}</span>
                    <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                      {course.progress}%
                    </span>
                  </div>
                  <ProgressBar value={course.progress} delay={0.15 + i * 0.06} />
                </div>
              </li>
            )
          })}
        </ul>
      </motion.section>
    </StaggerContainer>
  )
}
