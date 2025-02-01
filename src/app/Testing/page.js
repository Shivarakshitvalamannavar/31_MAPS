"use client";
import { useEffect } from 'react';

export default function CarbonFootprintTracker() {
  useEffect(() => {
    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");
    const ctaBtn = document.getElementById("cta-btn");

    title.classList.add("fade-in-loaded");
    subtitle.classList.add("fade-in-loaded");
    ctaBtn.classList.add("fade-in-loaded");
  }, []);

  return (
    <div className="bg-green-50 flex items-center justify-center min-h-screen flex-col text-center relative">
      <h1
        className="text-4xl font-bold text-green-700 fade-in"
        id="title"
      >
        Track Your Carbon Footprint 🌍
      </h1>
      <p className="text-lg text-gray-600 mt-2 fade-in" id="subtitle">
        One small footprint tracked today, a giant leap for sustainability tomorrow.
      </p>
      <button
        className="mt-6 relative px-6 py-3 font-bold text-white bg-black rounded-lg shadow-lg 
          hover:scale-105 transition-transform fade-in"
        id="cta-btn"
      >
        Get Started 🚀
      </button>
      <div className="relative w-full h-32 overflow-hidden">
        <div className="absolute w-2 h-2 bg-green-400 rounded-full leaf-animation"></div>
        <div className="absolute w-3 h-3 bg-green-500 rounded-full leaf-animation delay-100"></div>
        <div className="absolute w-2 h-2 bg-green-600 rounded-full leaf-animation delay-200"></div>
      </div>

      {/* Plant Animations at Bottom of Screen */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-green-200 flex items-center justify-center">
        <div className="w-8 h-8 bg-green-500 rounded-full animate-ping mr-4"></div>
        <div className="w-8 h-8 bg-green-600 rounded-full animate-ping mr-4"></div>
        <div className="w-8 h-8 bg-green-700 rounded-full animate-ping"></div>
      </div>
    </div>
  );
}
