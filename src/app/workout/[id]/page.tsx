'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { workoutsData } from '@/data/workouts';
import { usePlan } from '@/components/PlanContext';

export default function WorkoutDetailPage() {
  const params = useParams();
  const rawId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const workoutId = Number(rawId);

  const workout = workoutsData.find((w) => w.id === workoutId);

  const { todayPlan, savedWorkouts, togglePlan, toggleSave } = usePlan();

  if (!workout) {
    notFound();
  }

  const isAddedToPlan = todayPlan.some((item) => item.id === workout.id);
  const isSaved = savedWorkouts.some((item) => item.id === workout.id);

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto space-y-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Workouts
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[600px] bg-[#13151b] border border-zinc-800 rounded-3xl overflow-hidden">
          <img
            src={workout.image}
            alt={workout.name}
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups?.map((group, idx) => (
                <span
                  key={idx}
                  className="bg-[#ccff00] text-black font-extrabold text-xs tracking-wider uppercase px-2.5 py-1 rounded"
                >
                  {group}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
              {workout.name}
            </h1>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {workout.description}
            </p>
          </div>

          
          <div className="bg-[#13151b] border border-zinc-800 rounded-2xl p-5 divide-y divide-zinc-800/80">
            <div className="flex justify-between py-2.5 text-xs sm:text-sm">
              <span className="text-zinc-500 font-bold uppercase">Equipment</span>
              <span className="text-zinc-200 font-semibold">{workout.equipment}</span>
            </div>
            <div className="flex justify-between py-2.5 text-xs sm:text-sm">
              <span className="text-zinc-500 font-bold uppercase">Difficulty</span>
              <span className="text-zinc-200 font-semibold">{workout.difficulty}</span>
            </div>
            <div className="flex justify-between py-2.5 text-xs sm:text-sm">
              <span className="text-zinc-500 font-bold uppercase">Sets</span>
              <span className="text-zinc-200 font-semibold">{workout.sets}</span>
            </div>
            <div className="flex justify-between py-2.5 text-xs sm:text-sm">
              <span className="text-zinc-500 font-bold uppercase">Reps</span>
              <span className="text-zinc-200 font-semibold">{workout.reps}</span>
            </div>
            <div className="flex justify-between py-2.5 text-xs sm:text-sm">
              <span className="text-zinc-500 font-bold uppercase">Duration</span>
              <span className="text-zinc-200 font-semibold">{workout.duration} min</span>
            </div>
            <div className="flex justify-between py-2.5 text-xs sm:text-sm">
              <span className="text-zinc-500 font-bold uppercase">Calories</span>
              <span className="text-zinc-200 font-semibold">{workout.caloriesBurned} kcal</span>
            </div>
            <div className="flex justify-between py-2.5 text-xs sm:text-sm">
              <span className="text-zinc-500 font-bold uppercase">Rating</span>
              <span className="text-zinc-200 font-semibold text-[#ccff00]">★ {workout.rating}</span>
            </div>
          </div>

        
          <div className="space-y-4">
            <h2 className="text-lg font-black uppercase tracking-wider text-white">
              INSTRUCTIONS
            </h2>
            <ol className="space-y-3">
              {workout.instructions?.map((step, index) => (
                <li key={index} className="flex items-start gap-3 bg-[#13151b] border border-zinc-800 p-3.5 rounded-xl text-sm text-zinc-300">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#ccff00]/10 text-[#ccff00] text-xs font-black shrink-0">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

      
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => togglePlan(workout)}
              className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm uppercase transition-all ${
                isAddedToPlan
                  ? 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                  : 'bg-[#ccff00] hover:bg-[#b8e600] text-black'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
              </svg>
              <span>{isAddedToPlan ? "Added to today's plan" : "Add to today's plan"}</span>
            </button>

            <button
              onClick={() => toggleSave(workout)}
              className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm uppercase border transition-all ${
                isSaved
                  ? 'bg-zinc-800 border-zinc-700 text-[#ccff00]'
                  : 'bg-transparent border-zinc-700 text-white hover:bg-zinc-800'
              }`}
            >
              <svg className="w-5 h-5" fill={isSaved ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <span>{isSaved ? 'Saved' : 'Save for later'}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}