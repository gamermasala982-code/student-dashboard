"use client"

import { motion } from "framer-motion"

export function PageHeading({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className="mb-6"
    >
      <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>
      )}
    </motion.header>
  )
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
      {children}
    </h2>
  )
}
