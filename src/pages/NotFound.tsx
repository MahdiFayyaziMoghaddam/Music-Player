import Link from "../components/ui/Link/Link";

export default function NotFound() {
  return (
    <>
    <p className="absolute h-[80vh] leading-[80vh] top-[10vh] z-0 text-[40vw] text-dark-600 opacity-10 select-none">404</p>
    <div className="relative z-10 flex flex-col items-center justify-between min-h-[30vh] top-[35vh] text-[5vh]">
      <h1 className="text-primary font-bold">Error <span className="font-bold">404</span>!</h1>
      <h2 className="text-dark-400 italic">Page Not Found :(</h2>
        <Link href="/" className="text-[3.5vh]"># Return to Home {""}</Link>
    </div>
    </>
  );
}
