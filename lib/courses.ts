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
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("courses")
    .select("id, title, progress, icon_name, created_at")
    .order("created_at", { ascending: true })

  if (error) {
    throw new Error(`Failed to load courses: ${error.message}`)
  }

  return (data ?? []) as Course[]
}
