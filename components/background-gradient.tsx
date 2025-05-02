export function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute top-1/2 left-1/3 w-[30vw] h-[30vw] rounded-full bg-fuchsia-900/40 dark:bg-fuchsia-800/30 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 w-[30vw] h-[30vw] rounded-full bg-indigo-900/40 dark:bg-indigo-800/30 blur-[100px]"
        aria-hidden="true"
      />
    </div>
  )
}

