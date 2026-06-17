"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Bell, Moon, Globe, Check } from "lucide-react"
import { StaggerContainer, itemVariants } from "./motion"
import { cn } from "@/lib/utils"

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  label: string
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors",
        checked ? "bg-primary" : "bg-muted",
      )}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className={cn(
          "inline-block size-5 rounded-full bg-background shadow",
          checked ? "ml-[22px]" : "ml-0.5",
        )}
      />
    </button>
  )
}

export function SettingsPanel() {
  const [name, setName] = useState("Alex Rivera")
  const [email, setEmail] = useState("alex@lumen.app")
  const [notifications, setNotifications] = useState(true)
  const [reminders, setReminders] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [saved, setSaved] = useState(false)

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <StaggerContainer className="flex flex-col gap-4">
      {/* Profile */}
      <motion.form
        variants={itemVariants}
        onSubmit={handleSave}
        className="rounded-3xl border border-border bg-card p-6"
      >
        <div className="mb-5 flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary/12 text-primary">
            <User className="size-5" aria-hidden="true" />
          </span>
          <h2 className="text-base font-medium">Profile</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium">
              Full name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {saved ? <Check className="size-4" aria-hidden="true" /> : null}
            {saved ? "Saved" : "Save changes"}
          </button>
        </div>
      </motion.form>

      {/* Preferences */}
      <motion.section
        variants={itemVariants}
        className="rounded-3xl border border-border bg-card p-6"
      >
        <div className="mb-5 flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-accent/15 text-accent">
            <Bell className="size-5" aria-hidden="true" />
          </span>
          <h2 className="text-base font-medium">Preferences</h2>
        </div>

        <ul className="flex flex-col divide-y divide-border">
          <SettingRow
            icon={<Bell className="size-4" aria-hidden="true" />}
            title="Push notifications"
            description="Get notified about new lessons and replies."
          >
            <Toggle checked={notifications} onChange={setNotifications} label="Push notifications" />
          </SettingRow>
          <SettingRow
            icon={<Globe className="size-4" aria-hidden="true" />}
            title="Daily reminders"
            description="A gentle nudge to keep your streak alive."
          >
            <Toggle checked={reminders} onChange={setReminders} label="Daily reminders" />
          </SettingRow>
          <SettingRow
            icon={<Moon className="size-4" aria-hidden="true" />}
            title="Dark theme"
            description="Currently optimized for low-light learning."
          >
            <Toggle checked={darkMode} onChange={setDarkMode} label="Dark theme" />
          </SettingRow>
        </ul>
      </motion.section>
    </StaggerContainer>
  )
}

function SettingRow({
  icon,
  title,
  description,
  children,
}: {
  icon: React.ReactNode
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <li className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-muted-foreground">{icon}</span>
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
      {children}
    </li>
  )
}
