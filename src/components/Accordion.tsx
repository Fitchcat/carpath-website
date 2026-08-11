"use client";

import React, { useState } from "react";
import { Heading4, BodyBase } from "./Typography";

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  icon?: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className = "" }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-3 w-full max-w-[720px] mx-auto ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={`border border-[var(--border-subtle)] rounded-lg overflow-hidden transition-colors ${
              isOpen ? "bg-[var(--bg-surface)]" : "bg-[var(--bg-base)]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none focus:ring-2 focus:ring-[#C79A3B]"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                {item.icon && <div>{item.icon}</div>}
                <Heading4 className="text-base md:text-lg">{item.title}</Heading4>
              </div>
              <svg
                className={`w-5 h-5 text-[var(--text-secondary)] transition-transform duration-slow ${
                  isOpen ? "transform rotate-180 text-[#C79A3B]" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-4 pb-5 md:px-5 md:pb-6 pt-1 border-t border-[var(--border-subtle)]/50">
                <BodyBase className="text-sm md:text-base">{item.content}</BodyBase>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
