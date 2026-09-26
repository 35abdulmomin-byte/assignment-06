'use client';

import React from 'react';
import WorkoutCard from './WorkoutCard';
import { workoutsData, Workout } from '@/data/workouts';

interface LibrarySectionProps {
  workouts?: Workout[];
}

const LibrarySection: React.FC<LibrarySectionProps> = ({ workouts = workoutsData }) => {
  return (
    <section id="library" className="bg-[#0b0c10] text-white px-6 py-12 scroll-mt-16 w-full">
      <div className="max-w-7xl mx-auto space-y-6">
        
        
        <div className="space-y-1 text-left px-1">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase text-white">
            THE LIBRARY
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LibrarySection;