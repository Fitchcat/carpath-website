import React from "react";
import {
  IconOsStrategie,
  IconOsAcquisition,
  IconOsConversion,
  IconOsFidelisation,
  IconOsPilotage,
} from "./icons";

export function SystemDiagram() {
  const pillars = [
    { id: "strategie", label: "Stratégie", Icon: IconOsStrategie },
    { id: "acquisition", label: "Acquisition", Icon: IconOsAcquisition },
    { id: "conversion", label: "Conversion", Icon: IconOsConversion },
    { id: "fidelisation", label: "Fidélisation", Icon: IconOsFidelisation },
    { id: "pilotage", label: "Pilotage et optimisation", Icon: IconOsPilotage },
  ];

  return (
    <div className="w-full max-w-[500px] mx-auto py-8">
      <div className="relative aspect-square w-full bg-[var(--bg-surface)]/50 rounded-2xl p-6 border border-[var(--border-subtle)] flex items-center justify-center">
        {/* Interconnection Lines SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" fill="none">
          {/* Outer Pentagon Lines */}
          <polygon
            points="200,50 340,150 290,320 110,320 60,150"
            stroke="#C79A3B"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.6"
          />
          {/* Lines to center */}
          <line x1="200" y1="200" x2="200" y2="50" stroke="#C79A3B" strokeWidth="1" opacity="0.4" />
          <line x1="200" y1="200" x2="340" y2="150" stroke="#C79A3B" strokeWidth="1" opacity="0.4" />
          <line x1="200" y1="200" x2="290" y2="320" stroke="#C79A3B" strokeWidth="1" opacity="0.4" />
          <line x1="200" y1="200" x2="110" y2="320" stroke="#C79A3B" strokeWidth="1" opacity="0.4" />
          <line x1="200" y1="200" x2="60" y2="150" stroke="#C79A3B" strokeWidth="1" opacity="0.4" />
          <circle cx="200" cy="200" r="24" fill="var(--bg-base)" stroke="#C79A3B" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="4" fill="#C79A3B" />
        </svg>

        {/* Center label */}
        <div className="absolute z-10 text-center pointer-events-none">
          <span className="font-heading font-bold text-xs tracking-wider text-[#C79A3B]">
            CARPATH OS
          </span>
        </div>

        {/* 5 Nodes positioned on the pentagon */}
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-[var(--bg-base)] border border-[#C79A3B] flex items-center justify-center shadow-md">
            <IconOsStrategie size={24} className="text-[#C79A3B]" />
          </div>
          <span className="font-body text-xs font-semibold text-[var(--text-primary)] mt-1 bg-[var(--bg-base)]/80 px-2 py-0.5 rounded">
            Stratégie
          </span>
        </div>

        <div className="absolute top-[32%] right-[4%] flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-[var(--bg-base)] border border-[#C79A3B] flex items-center justify-center shadow-md">
            <IconOsAcquisition size={24} className="text-[#C79A3B]" />
          </div>
          <span className="font-body text-xs font-semibold text-[var(--text-primary)] mt-1 bg-[var(--bg-base)]/80 px-2 py-0.5 rounded">
            Acquisition
          </span>
        </div>

        <div className="absolute bottom-[10%] right-[16%] flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-[var(--bg-base)] border border-[#C79A3B] flex items-center justify-center shadow-md">
            <IconOsConversion size={24} className="text-[#C79A3B]" />
          </div>
          <span className="font-body text-xs font-semibold text-[var(--text-primary)] mt-1 bg-[var(--bg-base)]/80 px-2 py-0.5 rounded">
            Conversion
          </span>
        </div>

        <div className="absolute bottom-[10%] left-[16%] flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-[var(--bg-base)] border border-[#C79A3B] flex items-center justify-center shadow-md">
            <IconOsFidelisation size={24} className="text-[#C79A3B]" />
          </div>
          <span className="font-body text-xs font-semibold text-[var(--text-primary)] mt-1 bg-[var(--bg-base)]/80 px-2 py-0.5 rounded">
            Fidélisation
          </span>
        </div>

        <div className="absolute top-[32%] left-[4%] flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-[var(--bg-base)] border border-[#C79A3B] flex items-center justify-center shadow-md">
            <IconOsPilotage size={24} className="text-[#C79A3B]" />
          </div>
          <span className="font-body text-xs font-semibold text-[var(--text-primary)] mt-1 bg-[var(--bg-base)]/80 px-2 py-0.5 rounded text-center max-w-[80px]">
            Pilotage
          </span>
        </div>
      </div>
    </div>
  );
}
