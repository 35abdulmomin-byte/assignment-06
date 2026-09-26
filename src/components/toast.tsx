'use client';

import React from 'react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'warning' | 'info';
}

export default function Toast({ message, type = 'success' }: ToastProps) {
  if (!message) return null;

  const bgColors = {
    success: 'bg-[#ccff00] text-black font-extrabold',
    warning: 'bg-amber-500 text-black font-extrabold',
    info: 'bg-blue-500 text-white font-bold'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className={`px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 ${bgColors[type]}`}>
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{message}</span>
      </div>
    </div>
  );
}