"use client";
import { useEffect, useState } from "react";

export default function hydration() {
  const [hydrate, setHydrate] = useState(false);
  useEffect(() => {
    setHydrate(true);
  }, []);
  if (!hydrate) {
    return null;
  }
}
