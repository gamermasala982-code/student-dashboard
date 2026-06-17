"use client"

import { Trophy, Clock, Target } from "lucide-react"
import { StaggerContainer } from "./motion"
import { WelcomeCard } from "./welcome-card"
import { StatCard } from "./stat-card"

/** Top hero region: full-width welcome card + a row of quick stats. */
export function DashboardHero() {
  return (
    <StaggerContainer className="flex flex-col gap-4">
      <WelcomeCard name="Alex" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <StatCard icon={Trophy} label="Courses completed" value={8} />
        <StatCard icon={Clock} label="Hours this week" value={14} suffix="h" />
        <StatCard icon={Target} label="Weekly goal" value={82} suffix="%" />
      </div>
    </StaggerContainer>
  )
}
