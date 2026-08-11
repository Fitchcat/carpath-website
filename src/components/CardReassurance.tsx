import React from "react";
import { Heading4, BodyBase } from "./Typography";
import { IconOsStrategie, IconOsPilotage, IconOsFidelisation } from "./icons";

interface CardReassuranceProps {
  icon?: React.ReactNode;
  iconType?: string;
  title: string;
  description: string;
}

export function CardReassurance({ icon, iconType, title, description }: CardReassuranceProps) {
  const renderIcon = () => {
    if (icon) return icon;
    if (iconType === "check") return <IconOsStrategie size={24} className="text-[#C79A3B]" />;
    if (iconType === "clock") return <IconOsPilotage size={24} className="text-[#C79A3B]" />;
    if (iconType === "document") return <IconOsFidelisation size={24} className="text-[#C79A3B]" />;
    return null;
  };

  return (
    <div className="h-full flex flex-col justify-between bg-[var(--bg-surface)] p-6 rounded-2xl border border-[var(--border-subtle)] space-y-3">
      <div className="space-y-3">
        {renderIcon() && <div className="text-[#C79A3B]">{renderIcon()}</div>}
        <Heading4>{title}</Heading4>
        <BodyBase className="text-sm">{description}</BodyBase>
      </div>
    </div>
  );
}
