import { AppShell } from "@/components/dashboard/app-shell"
import { SettingsPanel } from "@/components/dashboard/settings-panel"
import { PageHeading } from "@/components/dashboard/page-heading"

export const metadata = {
  title: "Settings — Lumen",
}

export default function SettingsPage() {
  return (
    <AppShell>
      <PageHeading
        title="Settings"
        subtitle="Manage your profile and learning preferences."
      />
      <SettingsPanel />
    </AppShell>
  )
}
