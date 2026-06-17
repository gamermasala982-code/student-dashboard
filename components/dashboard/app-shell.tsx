import type { ReactNode } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { MobileNav } from "@/components/dashboard/mobile-nav"

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-dvh bg-background">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-32 top-0 size-[420px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-24 top-1/3 size-[380px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <main
          id="main-content"
          className="mx-auto w-full max-w-6xl flex-1 scrollbar-slim px-4 pb-28 pt-6 sm:px-6 md:pb-10 lg:px-8"
        >
          {children}
        </main>
      </div>

      <MobileNav />
    </div>
  )
}
