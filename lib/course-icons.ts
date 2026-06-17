import type { LucideIcon } from "lucide-react"
import {
  Atom,
  FileCode,
  Palette,
  Binary,
  Cloud,
  Brain,
  BookOpen,
} from "lucide-react"

/**
 * Maps the `icon_name` stored in Supabase to a Lucide icon component.
 * Falls back to a sensible default for unknown values.
 */
const iconMap: Record<string, LucideIcon> = {
  atom: Atom,
  "file-code": FileCode,
  palette: Palette,
  binary: Binary,
  cloud: Cloud,
  brain: Brain,
  "book-open": BookOpen,
}

export function getCourseIcon(name: string): LucideIcon {
  return iconMap[name] ?? BookOpen
}
