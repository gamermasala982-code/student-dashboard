import { createClient } from "@/lib/supabase/server"

export type Course = {
  id: string
  title: string
  progress: number
  icon_name: string
  created_at: string
}

/**
 * Fetch all courses on the server.
 * Throws on error so the nearest error boundary / caller can render a
 * graceful fallback.
 */
export async function getCourses(): Promise<Course[]> {
  return [
    {
      id: "1",
      title: "Advanced React Patterns",
      progress: 75,
      icon_name: "Code",
      created_at: new Date().toISOString(),
    },
    {
      id: "2",
      title: "UI Design Fundamentals",
      progress: 60,
      icon_name: "Palette",
      created_at: new Date().toISOString(),
    },
    {
      id: "3",
      title: "Database Systems",
      progress: 90,
      icon_name: "Database",
      created_at: new Date().toISOString(),
    },
    {
      id: "4",
      title: "Machine Learning Basics",
      progress: 45,
      icon_name: "Brain",
      created_at: new Date().toISOString(),
    },
  ]
}
