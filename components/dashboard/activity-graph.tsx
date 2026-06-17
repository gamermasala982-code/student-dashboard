"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Activity } from "lucide-react"
import { itemVariants } from "./motion"
import { cn } from "@/lib/utils"

const WEEKS = 18
const DAYS = 7
const DAY_LABELS = ["Mon", "Wed", "Fri"]

/** Deterministic pseudo-random so the graph is stable across renders. */
function seeded(i: number) {
  const x = Math.sin(i * 999.7) * 10000
  return x - Math.floor(x)
}

function levelClass(level: number) {
  switch (level) {
    case 0:
      return "bg-muted"
    case 1:
      return "bg-primary/25"
    case 2:
      return "bg-primary/50"
    case 3:
      return "bg-primary/75"
    default:
      return "bg-primary"
  }
}

export function ActivityGraph() {
  const [hovered, setHovered] = useState<string | null>(null)

  const { cells, total } = useMemo(() => {
    let sum = 0
    const grid = Array.from({ length: WEEKS }, (_, w) =>
      Array.from({ length: DAYS }, (_, d) => {
        const r = seeded(w * DAYS + d)
        const level = r > 0.62 ? Math.ceil(r * 4) : r > 0.4 ? 1 : 0
        const contributions = level === 0 ? 0 : Math.ceil(r * 6)
        sum += contributions
        return { level: Math.min(level, 4), contributions }
      }),
    )
    return { cells: grid, total: sum }
  }, [])

  return (
    <motion.section
      variants={itemVariants}
      className="relative flex flex-col rounded-3xl border border-border bg-card p-5 sm:p-6 lg:col-span-2"
    >
      <header className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-accent/15 text-accent">
            <Activity className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-base font-medium leading-tight">Learning activity</h2>
            <p className="text-xs text-muted-foreground">
              {total} lessons in the last {WEEKS} weeks
            </p>
          </div>
        </div>
      </header>

      <div className="flex gap-2 overflow-x-auto scrollbar-slim pb-1">
        {/* Day labels */}
        <ul className="mr-1 hidden shrink-0 flex-col justify-between py-px text-[10px] text-muted-foreground sm:flex">
          {DAY_LABELS.map((d) => (
            <li key={d} className="h-3 leading-3">
              {d}
            </li>
          ))}
        </ul>

        <div className="flex gap-1" role="img" aria-label={`Contribution graph showing ${total} lessons over ${WEEKS} weeks`}>
          {cells.map((week, w) => (
            <div key={w} className="flex flex-col gap-1">
              {week.map((cell, d) => {
                const id = `${w}-${d}`
                return (
                  <motion.span
                    key={id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: (w * DAYS + d) * 0.004,
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered(null)}
                    className={cn(
                      "size-3 rounded-[3px] transition-transform",
                      levelClass(cell.level),
                      hovered === id && "ring-2 ring-foreground/60",
                    )}
                    title={`${cell.contributions} lesson${cell.contributions === 1 ? "" : "s"}`}
                    aria-hidden="true"
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <footer className="mt-4 flex items-center justify-end gap-2 text-[10px] text-muted-foreground">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <span key={l} className={cn("size-3 rounded-[3px]", levelClass(l))} aria-hidden="true" />
        ))}
        <span>More</span>
      </footer>
    </motion.section>
  )
}
