"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { itemVariants } from "./motion"
import { cn } from "@/lib/utils"

/**
 * A Bento tile: enters with the parent stagger, and lifts + glows on hover
 * using a spring transition for a natural feel.
 */
export function BentoCard({
  children,
  className,
  interactive = true,
  as = "section",
  ...rest
}: {
  children: ReactNode
  className?: string
  interactive?: boolean
  as?: "section" | "article" | "div"
} & React.HTMLAttributes<HTMLElement>) {
  const MotionTag = motion[as]

  return (
    <MotionTag
      variants={itemVariants}
      whileHover={
        interactive
          ? { y: -4, scale: 1.01, transition: { type: "spring", stiffness: 300, damping: 20 } }
          : undefined
      }
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-card p-5 sm:p-6",
        "transition-[box-shadow,border-color] duration-300",
        interactive &&
          "hover:border-primary/40 hover:shadow-[0_8px_40px_-12px_var(--primary)]",
        className,
      )}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
