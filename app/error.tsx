"use client"

import { AppShell } from "@/components/dashboard/app-shell"
import { CoursesError } from "@/components/dashboard/courses-error"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <AppShell>
      <div className="flex min-h-[60vh] items-center justify-center">
        <CoursesError reset={reset} />
      </div>
    </AppShell>
  )
}
