export function CourseCardSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-5 rounded-3xl border border-border bg-card p-6">
      <div className="flex items-start justify-between">
        <div className="size-11 rounded-2xl bg-muted" />
        <div className="h-7 w-12 rounded-md bg-muted" />
      </div>
      <div className="space-y-2">
        <div className="h-4 w-3/4 rounded bg-muted" />
        <div className="h-3 w-1/3 rounded bg-muted" />
      </div>
      <div className="mt-auto h-2 w-full rounded-full bg-muted" />
    </div>
  )
}

export function CourseGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <CourseCardSkeleton key={i} />
      ))}
    </div>
  )
}

export function ProgressSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="flex animate-pulse flex-col items-center gap-4 rounded-3xl border border-border bg-card p-6">
        <div className="size-40 rounded-full bg-muted" />
        <div className="h-4 w-32 rounded bg-muted" />
      </div>
      <div className="animate-pulse rounded-3xl border border-border bg-card p-6 lg:col-span-2">
        <div className="mb-5 h-5 w-40 rounded bg-muted" />
        <div className="flex flex-col gap-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="size-9 rounded-xl bg-muted" />
              <div className="flex-1 space-y-2">
                <div className="h-3 w-1/2 rounded bg-muted" />
                <div className="h-2 w-full rounded-full bg-muted" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
