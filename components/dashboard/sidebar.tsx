"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { navItems } from "@/lib/nav"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside
      aria-label="Primary"
      className="sticky top-0 hidden h-dvh shrink-0 flex-col gap-2 border-r border-border bg-sidebar px-3 py-6 md:flex md:w-[76px] lg:w-64"
    >
      {/* Brand */}
      <Link
        href="/"
        className="mb-4 flex items-center gap-3 rounded-xl px-2 py-1.5 lg:px-3"
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <GraduationCap className="size-5" aria-hidden="true" />
        </span>
        <span className="hidden text-lg font-semibold tracking-tight lg:inline">
          Lumen
        </span>
      </Link>

      <nav className="flex flex-col gap-1" aria-label="Dashboard sections">
        {navItems.map((item) => {
          const active = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              title={item.label}
              className={cn(
                "group relative flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm font-medium transition-colors lg:px-3",
                "justify-center lg:justify-start",
                active
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {active && (
                <motion.span
                  layoutId="sidebar-active"
                  className="absolute inset-0 -z-10 rounded-xl bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <Icon className="size-5 shrink-0" aria-hidden="true" />
              <span className="hidden lg:inline">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Footer profile */}
      <div className="mt-auto flex items-center gap-3 rounded-xl border border-border bg-card/50 p-2 lg:p-3">
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-semibold text-accent"
          aria-hidden="true"
        >
          AX
        </span>
        <div className="hidden min-w-0 lg:block">
          <p className="truncate text-sm font-medium leading-tight">Alex Rivera</p>
          <p className="truncate text-xs text-muted-foreground">Pro member</p>
        </div>
      </div>
    </aside>
  )
}
