'use client';

import React from 'react';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <section className="bg-[#0b0c10] text-white px-6 py-10 md:py-16">
      <div className="max-w-7xl mx-auto bg-[#13151b] rounded-3xl p-8 md:p-14 border border-zinc-800/60 flex flex-col-reverse md:flex-row items-center justify-between gap-10 overflow-hidden">
        
        
        <div className="flex-1 space-y-6">
         
          <div className="inline-block">
            <span className="text-[#ccff00] text-xs font-bold tracking-widest uppercase bg-[#ccff00]/10 px-3 py-1 rounded-md border border-[#ccff00]/20">
              WORKOUT LIBRARY
            </span>
          </div>

          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none uppercase font-sans">
            TRAIN WITH INTENT. <br />
            <span className="text-white">LOG EVERY SET.</span>
          </h1>

          
          <p className="text-zinc-400 text-sm md:text-base max-w-lg leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          
          <div>
            <a
              href="#library"
              className="inline-flex items-center gap-2 bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-sm px-6 py-3.5 rounded-xl uppercase transition-transform active:scale-95 shadow-lg shadow-[#ccff00]/10 cursor-pointer"
            >
              <span>BROWSE WORKOUTS</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>

        
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full max-w-md h-80 md:h-96">
            <Image
              src="/banner.png"
              alt="Workout Gym Banner"
              fill
              priority
              className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;