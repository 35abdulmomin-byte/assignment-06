import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0b0c10] border-t border-zinc-800/80 py-8 px-6 mt-20 text-xs sm:text-sm text-zinc-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="FitLog Icon" className="h-6 w-auto object-contain" />
          <span className="font-black text-white uppercase tracking-wider">FITLOG</span>
        </Link>
        <p className="text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}