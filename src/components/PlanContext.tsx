'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Workout } from '@/data/workouts';

export interface PlannedWorkout extends Workout {
  completed?: boolean;
}

interface PlanContextType {
  todayPlan: PlannedWorkout[];
  savedWorkouts: Workout[];
  toastMessage: { text: string; type: 'success' | 'warning' | 'info' } | null;
  togglePlan: (workout: Workout) => void;
  toggleSave: (workout: Workout) => void;
  toggleComplete: (id: number) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  showToast: (text: string, type?: 'success' | 'warning' | 'info') => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [todayPlan, setTodayPlan] = useState<PlannedWorkout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'warning' | 'info' } | null>(null);

  useEffect(() => {
    const savedPlan = localStorage.getItem('fitlog_plan');
    const savedFavs = localStorage.getItem('fitlog_saved');
    if (savedPlan) setTodayPlan(JSON.parse(savedPlan));
    if (savedFavs) setSavedWorkouts(JSON.parse(savedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem('fitlog_plan', JSON.stringify(todayPlan));
  }, [todayPlan]);

  useEffect(() => {
    localStorage.setItem('fitlog_saved', JSON.stringify(savedWorkouts));
  }, [savedWorkouts]);

  const showToast = (text: string, type: 'success' | 'warning' | 'info' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Updated togglePlan logic
  const togglePlan = (workout: Workout) => {
    const exists = todayPlan.some((item) => item.id === workout.id);
    
    if (exists) {
      showToast(`"${workout.name}" is already in your plan!`, 'warning');
      return;
    }

    if (todayPlan.length >= 5) {
      showToast("Cap reached! Maximum 5 lifts allowed for today's plan.", 'warning');
      return;
    }

    setTodayPlan((prev) => [...prev, { ...workout, completed: false }]);
    showToast(`Added "${workout.name}" to today's plan!`, 'success');
  };

  const toggleSave = (workout: Workout) => {
    const exists = savedWorkouts.some((item) => item.id === workout.id);
    if (exists) {
      setSavedWorkouts((prev) => prev.filter((item) => item.id !== workout.id));
      showToast(`Removed "${workout.name}" from saved`, 'info');
    } else {
      setSavedWorkouts((prev) => [...prev, workout]);
      showToast(`Saved "${workout.name}" for later!`, 'success');
    }
  };

  const toggleComplete = (id: number) => {
    setTodayPlan((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextStatus = !item.completed;
          showToast(
            nextStatus ? `Marked "${item.name}" as done!` : `Unmarked "${item.name}"`,
            nextStatus ? 'success' : 'info'
          );
          return { ...item, completed: nextStatus };
        }
        return item;
      })
    );
  };

  const removeFromPlan = (id: number) => {
    const item = todayPlan.find((i) => i.id === id);
    setTodayPlan((prev) => prev.filter((i) => i.id !== id));
    if (item) showToast(`Removed "${item.name}" from today's plan`, 'info');
  };

  const removeFromSaved = (id: number) => {
    const item = savedWorkouts.find((i) => i.id === id);
    setSavedWorkouts((prev) => prev.filter((i) => i.id !== id));
    if (item) showToast(`Removed "${item.name}" from saved list`, 'info');
  };

  return (
    <PlanContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        toastMessage,
        togglePlan,
        toggleSave,
        toggleComplete,
        removeFromPlan,
        removeFromSaved,
        showToast
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error('usePlan must be used within a PlanProvider');
  }
  return context;
}