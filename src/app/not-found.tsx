"use client";
import hydration from "@/utils/hydration";

function NotFound() {
  hydration();
  return (
    <div className="relative flex flex-col justify-center items-center grow overflow-hidden">
      <h1 className="absolute text-dark-200 text-[35vw] opacity-15 font-bold select-none">
        404
      </h1>
      <p className="text-dark-100 text-2xl font-semibold">Page Not Found!</p>
      <p className="text-dark-200 text-lg">This page does not exist.</p>
    </div>
  );
}

export default NotFound;
