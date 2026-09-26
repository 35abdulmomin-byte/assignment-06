'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { usePlan } from '@/components/PlanContext';

type SortOption = 'duration' | 'calories' | 'rating';

function MyPlanContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');
  const [sortBy, setSortBy] = useState<SortOption>('duration');
  const [loading, setLoading] = useState(true);

  const {
    todayPlan,
    savedWorkouts,
    toggleComplete,
    removeFromPlan,
    removeFromSaved,
  } = usePlan();

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'saved') {
      setActiveTab('saved');
    } else if (tabParam === 'plan') {
      setActiveTab('plan');
    }
  }, [searchParams]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  
  const rawList = activeTab === 'plan' ? todayPlan : savedWorkouts;

  
  const sortedList = [...rawList].sort((a: any, b: any) => {
    if (sortBy === 'duration') {
      return (b.duration || 0) - (a.duration || 0);
    }
    if (sortBy === 'calories') {
      return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
    }
    if (sortBy === 'rating') {
      return (b.rating || 0) - (a.rating || 0);
    }
    return 0;
  });

 
  const totalMinutes = rawList.reduce((acc, curr) => acc + (curr.duration || 0), 0);
  const totalCalories = rawList.reduce((acc, curr) => acc + (curr.caloriesBurned || 0), 0);

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto space-y-10">
      
      
      <div>
        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
          MY PLAN
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base mt-2">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-[#13151b] border border-zinc-800 p-6 rounded-2xl space-y-1">
          <p className="text-zinc-500 font-bold text-xs uppercase">
            {activeTab === 'plan' ? 'Exercises' : 'Saved Lifts'}
          </p>
          <p className="text-3xl font-black text-[#ccff00]">
            {activeTab === 'plan' ? `${todayPlan.length} / 5` : savedWorkouts.length}
          </p>
        </div>
        <div className="bg-[#13151b] border border-zinc-800 p-6 rounded-2xl space-y-1">
          <p className="text-zinc-500 font-bold text-xs uppercase">Minutes</p>
          <p className="text-3xl font-black text-white">{totalMinutes} min</p>
        </div>
        <div className="bg-[#13151b] border border-zinc-800 p-6 rounded-2xl space-y-1">
          <p className="text-zinc-500 font-bold text-xs uppercase">Calories</p>
          <p className="text-3xl font-black text-white">{totalCalories} kcal</p>
        </div>
      </div>

     
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('plan')}
            className={`text-sm font-extrabold uppercase px-4 py-2 rounded-xl transition-all ${
              activeTab === 'plan'
                ? 'bg-[#ccff00] text-black'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Today&apos;s Plan ({todayPlan.length})
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`text-sm font-extrabold uppercase px-4 py-2 rounded-xl transition-all ${
              activeTab === 'saved'
                ? 'bg-[#ccff00] text-black'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Saved ({savedWorkouts.length})
          </button>
        </div>

        
        <div className="flex items-center gap-3">
          <span className="text-sm font-extrabold text-zinc-400">Sort By</span>
          <div className="relative inline-block">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="appearance-none bg-[#13151b] text-white border border-zinc-800 focus:border-zinc-600 rounded-xl px-4 py-2 pr-9 text-sm font-extrabold cursor-pointer outline-none transition-colors"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
           
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

      </div>

      {loading ? (
        <div className="py-20 text-center text-zinc-400 font-bold animate-pulse">
          Loading workouts…
        </div>
      ) : sortedList.length === 0 ? (
       
        <div className="bg-[#13151b] border border-zinc-800 rounded-3xl p-12 text-center space-y-4 max-w-md mx-auto my-10">
          <h3 className="text-2xl font-black uppercase text-white">NOTHING HERE YET</h3>
          <p className="text-zinc-400 text-sm">
            {activeTab === 'plan'
              ? 'Browse the library and add a lift to get today moving.'
              : 'Saved workouts will appear here for quick access later.'}
          </p>
          <Link
            href="/"
            className="inline-block bg-[#ccff00] text-black font-extrabold text-xs uppercase px-6 py-3 rounded-xl hover:bg-[#b8e600] transition-colors"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        
        <div className="space-y-4">
          {sortedList.map((item: any) => (
            <div
              key={item.id}
              className={`bg-[#13151b] border rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all ${
                item.completed ? 'border-zinc-800 opacity-60' : 'border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0"
                />
                <div>
                  <h4 className={`font-black uppercase text-base sm:text-lg ${item.completed ? 'line-through text-zinc-500' : 'text-white'}`}>
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-400">{item.equipment}</p>
                  <div className="flex items-center gap-3 text-xs text-zinc-400 font-bold mt-2">
                    <span className={sortBy === 'duration' ? 'text-[#ccff00]' : ''}>⏱️ {item.duration} min</span>
                    <span className={sortBy === 'calories' ? 'text-[#ccff00]' : ''}>🔥 {item.caloriesBurned} kcal</span>
                    <span className={sortBy === 'rating' ? 'text-[#ccff00]' : ''}>★ {item.rating}</span>
                  </div>
                </div>
              </div>

              
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-zinc-800">
                <Link
                  href={`/workout/${item.id}`}
                  className="text-xs font-extrabold uppercase px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition-colors"
                >
                  View Details
                </Link>

                {activeTab === 'plan' && (
                  <button
                    onClick={() => toggleComplete(item.id)}
                    className={`text-xs font-extrabold uppercase px-4 py-2 rounded-xl border transition-all ${
                      item.completed
                        ? 'bg-[#ccff00]/10 border-[#ccff00] text-[#ccff00]'
                        : 'border-zinc-700 text-zinc-300 hover:bg-zinc-800'
                    }`}
                  >
                    ✓ {item.completed ? 'Done' : 'Mark as Done'}
                  </button>
                )}

                <button
                  onClick={() =>
                    activeTab === 'plan'
                      ? removeFromPlan(item.id)
                      : removeFromSaved(item.id)
                  }
                  className="p-2 text-zinc-500 hover:text-red-400 transition-colors"
                  title="Remove"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default function MyPlanPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-zinc-400 font-bold animate-pulse">Loading workouts…</div>}>
      <MyPlanContent />
    </Suspense>
  );
}