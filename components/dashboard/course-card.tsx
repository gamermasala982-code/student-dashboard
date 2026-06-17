"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import type { Course } from "@/lib/courses"
import { getCourseIcon } from "@/lib/course-icons"
import { BentoCard } from "./bento-card"
import { ProgressBar } from "./progress-bar"

export function CourseCard({ course, index }: { course: Course; index: number }) {
  const Icon = getCourseIcon(course.icon_name)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const count = useCountUp(inView ? course.progress : 0)

  return (
    <BentoCard as="article" className="flex flex-col gap-5">
      {/* Soft per-card glow that intensifies on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80 opacity-40"
      />

      <header className="flex items-start justify-between gap-3">
        <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-inset ring-primary/15">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <span
          ref={ref}
          className="text-2xl font-semibold tabular-nums tracking-tight"
        >
          {count}
          <span className="text-base text-muted-foreground">%</span>
        </span>
      </header>

      <div>
        <h3 className="text-pretty text-base font-medium leading-snug">
          {course.title}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">
          {course.progress >= 100
            ? "Completed"
            : course.progress === 0
              ? "Not started"
              : "In progress"}
        </p>
      </div>

      <div className="mt-auto">
        <ProgressBar value={course.progress} delay={0.2 + index * 0.05} />
      </div>
    </BentoCard>
  )
}

/** Smoothly counts up to `target` for a lively percentage label. */
function useCountUp(target: number, duration = 1000) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (target === 0) {
      setValue(0)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(eased * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])

  return value
}
