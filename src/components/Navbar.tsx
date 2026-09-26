'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePlan } from './PlanContext';

export default function Navbar() {
  const pathname = usePathname();
  const { todayPlan, savedWorkouts } = usePlan();

  const isWorkoutActive = pathname === '/' || pathname.startsWith('/workout');
  const isPlanActive = pathname === '/my-plan';

  return (
    <header className="sticky top-0 z-40 bg-[#0b0c10]/90 backdrop-blur-md border-b border-zinc-800/80 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="/logo.png"
            alt="FitLog Icon"
            className="h-8 w-auto object-contain group-hover:scale-105 transition-transform"
          />
          <span className="font-black text-xl tracking-tight uppercase text-white group-hover:text-[#ccff00] transition-colors">
            FITLOG
          </span>
        </Link>

        
        <nav className="flex items-center gap-2 bg-[#13151b] p-1.5 rounded-full border border-zinc-800">
          <Link
            href="/"
            className={`px-5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase transition-all ${
              isWorkoutActive
                ? 'bg-zinc-800 text-[#ccff00] shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Workout
          </Link>
          <Link
            href="/my-plan"
            className={`px-5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase transition-all ${
              isPlanActive
                ? 'bg-zinc-800 text-[#ccff00] shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          
          <Link
            href="/my-plan?tab=plan"
            className="flex items-center gap-2 bg-[#ccff00] text-black font-extrabold text-xs px-3.5 py-1.5 rounded-full hover:bg-[#b8e600] transition-colors"
          >
            <span>Plan</span>
            <span className="w-5 h-5 rounded-full bg-black text-[#ccff00] text-[10px] flex items-center justify-center font-black">
              {todayPlan.length}
            </span>
          </Link>

          
          <Link
            href="/my-plan?tab=saved"
            className="flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-extrabold text-xs px-3.5 py-1.5 rounded-full transition-colors"
          >
            <span>Saved</span>
            <span className="w-5 h-5 rounded-full bg-zinc-800 text-white text-[10px] flex items-center justify-center font-black">
              {savedWorkouts.length}
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}