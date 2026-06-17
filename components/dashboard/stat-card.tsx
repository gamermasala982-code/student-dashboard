"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { itemVariants } from "./motion"

export function StatCard({
  icon: Icon,
  label,
  value,
  suffix = "",
}: {
  icon: LucideIcon
  label: string
  value: number
  suffix?: string
}) {
  const count = useCountUp(value)

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.01, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="group relative flex flex-col justify-between gap-4 overflow-hidden rounded-3xl border border-border bg-card p-5 transition-colors duration-300 hover:border-primary/40"
    >
      <span className="flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-2xl font-semibold tabular-nums tracking-tight">
          {count}
          {suffix && <span className="text-base text-muted-foreground">{suffix}</span>}
        </p>
        <p className="text-xs text-muted-foreground">{label}</p>
      </div>
    </motion.article>
  )
}

function useCountUp(target: number, duration = 1000) {
  const [value, setValue] = useState(0)
  useEffect(() => {
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
