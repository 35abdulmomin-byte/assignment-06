'use client';

import React from 'react';
import Link from 'next/link';
import { Workout } from '@/data/workouts';

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout }) => {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group bg-[#13151b] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-[#ccff00]/50 transition-all duration-300 flex flex-col cursor-pointer w-full"
    >
      {/* 📷 Image Container with object-top / object-contain to prevent head cropping */}
      <div className="relative w-full h-56 bg-zinc-900 overflow-hidden flex items-center justify-center">
        <img
          src={workout.image}
          alt={workout.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col justify-between flex-1 space-y-4 text-left">
        <div className="space-y-2.5">
          {/* 🏷️ Muscle Group Badges */}
          <div className="flex flex-wrap items-center gap-1.5">
            {workout.muscleGroups.map((group, idx) => (
              <span
                key={idx}
                className="bg-[#ccff00] text-black font-extrabold text-[10px] tracking-wider uppercase px-2 py-0.5 rounded"
              >
                {group}
              </span>
            ))}
          </div>

          {/* 📛 Workout Title */}
          <h3 className="text-white font-extrabold text-base md:text-lg uppercase tracking-wide group-hover:text-[#ccff00] transition-colors leading-snug">
            {workout.name}
          </h3>

          {/* 🖇️ Equipment */}
          <p className="text-zinc-400 text-xs font-medium">
            {workout.equipment}
          </p>
        </div>

        {/* 🔴 Stats Footer */}
        <div className="flex items-center gap-4 text-zinc-400 text-xs pt-3 border-t border-zinc-800/60">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
            </svg>
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            </svg>
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-zinc-500 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;