import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center space-y-6">
      <h1 className="text-8xl font-black text-[#ccff00]">404</h1>
      <h2 className="text-2xl sm:text-3xl font-black uppercase text-white">PAGE NOT FOUND</h2>
      <p className="text-zinc-400 max-w-md text-sm">
        The lift or page you are looking for does not exist in the FitLog system.
      </p>
      <Link
        href="/"
        className="bg-[#ccff00] text-black font-extrabold text-xs uppercase px-8 py-3.5 rounded-xl hover:bg-[#b8e600] transition-colors"
      >
        Back to Library
      </Link>
    </div>
  );
}