import React from "react";
import { Label } from "./Typography";

interface CardMetricProps {
  value: string;
  label: string;
  className?: string;
}

export function CardMetric({ value, label, className = "" }: CardMetricProps) {
  return (
    <div className={`h-full flex flex-col justify-between p-6 text-center space-y-2 ${className}`}>
      <span className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#C79A3B] tracking-tight">
        {value}
      </span>
      <Label className="text-sm font-medium">{label}</Label>
    </div>
  );
}
