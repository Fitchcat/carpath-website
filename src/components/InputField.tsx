import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id: string;
}

export function InputField({ label, error, id, className = "", ...props }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      <label htmlFor={id} className="text-sm font-medium text-[var(--text-secondary)]">
        {label}
      </label>
      <input
        id={id}
        className={`h-12 px-4 rounded-md bg-[var(--bg-surface)] text-[var(--text-primary)] border ${
          error ? "border-red-500" : "border-[var(--border-subtle)]"
        } focus:border-[#C79A3B] focus:outline-none focus:ring-2 focus:ring-[#C79A3B]/40 placeholder:text-[var(--text-secondary)]/60 text-base transition-colors ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
