"use client";
import { Bus } from "lucide-react";
import { useEffect, useState } from "react";

export default function Loading() {
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    const texts = ["Loading", "Loading.", "Loading..", "Loading..."];
    let index = 0;
    const interval = setInterval(() => {
      setLoadingText(texts[index]);
      index = (index + 1) % texts.length;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-blue-600 text-white text-xl font-bold z-50">
      <div className="animate-bounce">
        <Bus size={48} />
      </div>
      <p className="mt-4 animate-pulse">{loadingText} By Eggar Developer...</p>
    </div>
  );
}
