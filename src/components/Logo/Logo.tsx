import useEnv from "../../hooks/useEnv";

export default function Logo({ className }: { className?: string }) {
  const env = useEnv();

  return (
    <div
      className={`relative flex-center content-start gap-2 w-full pt-14 pb-14 select-none ${className}`}
    >
      <div className="ml-2 flex-center size-10">
        <img style={{ width: "100%" }} src="./svgs/logo.svg" alt="logo" />
      </div>
      <p className="ml-0 text-3xl font-semibold text-dark-300">Music Player</p>
      <span className="absolute text-xl bottom-6 text-dark-500">
        v{env.VITE_APP_VERSION}
      </span>
    </div>
  );
}
