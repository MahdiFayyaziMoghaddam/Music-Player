export default function Logo({ className }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center gap-1 select-none ${className}`}
    >
      <div className="flex items-center gap-1.5">
        <img src="./svgs/logo.svg" alt="logo" className="size-9" />
        <p className="text-2xl font-semibold text-dark-200">Music Player</p>
      </div>
      <span className="text-[0.7rem] text-dark-300 font-medium">
        Version: {process.env.NEXT_PUBLIC_APP_VERSION}
      </span>
    </div>
  );
}
