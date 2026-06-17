"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * Progress bar that animates its fill from 0 to `value` on first render.
 */
export function ProgressBar({
  value,
  className,
  delay = 0,
}: {
  value: number
  className?: string
  delay?: number
}) {
  const clamped = Math.max(0, Math.min(100, value))

  return (
    <div
      className={cn("h-2 w-full overflow-hidden rounded-full bg-muted", className)}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="h-full rounded-full bg-primary"
        initial={{ width: "0%" }}
        animate={{ width: `${clamped}%` }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
      />
    </div>
  )
}
