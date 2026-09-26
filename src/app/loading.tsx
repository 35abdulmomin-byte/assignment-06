import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-zinc-800 border-t-[#ccff00] rounded-full animate-spin" />
        <p className="text-xs font-extrabold uppercase tracking-widest text-zinc-400">Loading FitLog…</p>
      </div>
    </div>
  );
}