import React from "react";

interface Step {
  number: string;
  label: string;
}

interface ProgressStepsProps {
  steps?: Step[];
  currentStep?: number;
  className?: string;
}

const defaultSteps: Step[] = [
  { number: "01", label: "Écouter" },
  { number: "02", label: "Concevoir" },
  { number: "03", label: "Piloter" },
  { number: "04", label: "Améliorer" },
];

export function ProgressSteps({
  steps = defaultSteps,
  currentStep = 1,
  className = "",
}: ProgressStepsProps) {
  return (
    <div className={`w-full max-w-[720px] mx-auto py-6 ${className}`}>
      {/* Desktop Horizontal View */}
      <div className="hidden md:flex items-center justify-between relative">
        {/* Connecting line */}
        <div className="absolute top-3 left-6 right-6 h-[1px] bg-[var(--border-subtle)] -z-0" />

        {steps.map((step, idx) => {
          const stepNum = idx + 1;
          const isActive = stepNum <= currentStep;

          return (
            <div key={step.number} className="relative z-10 flex flex-col items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  isActive
                    ? "bg-[#C79A3B] text-[#0D0D0D]"
                    : "bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                }`}
              >
                {step.number}
              </div>
              <span
                className={`text-xs font-medium font-body ${
                  isActive ? "text-[#C79A3B]" : "text-[var(--text-secondary)]"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Mobile Vertical Indicator */}
      <div className="flex md:hidden items-center justify-around bg-[var(--bg-surface)] p-3 rounded-lg border border-[var(--border-subtle)]">
        {steps.map((step, idx) => {
          const stepNum = idx + 1;
          const isActive = stepNum <= currentStep;
          return (
            <div key={step.number} className="flex items-center gap-1.5">
              <span
                className={`text-xs font-bold font-heading ${
                  isActive ? "text-[#C79A3B]" : "text-[var(--text-secondary)]"
                }`}
              >
                {step.number}
              </span>
              <span className="text-xs text-[var(--text-secondary)]">{step.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
