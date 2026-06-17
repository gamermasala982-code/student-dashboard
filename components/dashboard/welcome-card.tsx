"use client"

import { motion } from "framer-motion"
import { Flame } from "lucide-react"
import { itemVariants } from "./motion"

const STREAK_DAYS = 12
const WEEK = ["M", "T", "W", "T", "F", "S", "S"]
// Which of the last 7 days were active (mock)
const ACTIVE = [true, true, true, false, true, true, true]

export function WelcomeCard({ name }: { name: string }) {
  const greeting = getGreeting()

  return (
    <motion.section
      variants={itemVariants}
      className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8"
    >
      {/* Gradient mesh background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(120% 120% at 0% 0%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 55%), radial-gradient(120% 120% at 100% 0%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 50%)",
        }}
      />

      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{greeting}</p>
          <h1 className="mt-1 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Welcome back, Alex
          </h1>
          <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            You&apos;re on a roll this week. Keep the momentum going and finish
            your next lesson to extend your streak.
          </p>
        </div>

        {/* Streak indicator */}
        <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-border bg-background/40 p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Flame className="size-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-2xl font-semibold leading-none tabular-nums">
                {STREAK_DAYS}
              </p>
              <p className="text-xs text-muted-foreground">day streak</p>
            </div>
          </div>
          <ul className="flex items-end gap-1.5" aria-label="Activity over the last 7 days">
            {WEEK.map((day, i) => (
              <li key={i} className="flex flex-col items-center gap-1.5">
                <motion.span
                  initial={{ height: 8, opacity: 0 }}
                  animate={{ height: ACTIVE[i] ? 28 : 12, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.05, type: "spring", stiffness: 240, damping: 20 }}
                  className={
                    ACTIVE[i]
                      ? "w-2 rounded-full bg-primary"
                      : "w-2 rounded-full bg-muted"
                  }
                  aria-hidden="true"
                />
                <span className="text-[10px] text-muted-foreground">{day}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return "Good morning"
  if (h < 18) return "Good afternoon"
  return "Good evening"
}
