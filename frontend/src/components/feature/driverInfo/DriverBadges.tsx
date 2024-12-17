import { twMerge } from "tailwind-merge";
import { badgesBgColors, badgesTextColors } from "@lib/constants";
import type { Badge } from "shared.types";

const Badge = ({ label, color }: Badge) => {
  return (
    <span
      className={twMerge(
        `${badgesBgColors} ${badgesTextColors} text-xs p-2 rounded-md font-bold uppercase`,
        ` bg-${color}-200 text-${color}-800`
      )}
    >
      {label}
    </span>
  );
};

const DriverBadges = ({ badges }: { badges: Badge[] }) => {
  return (
    <div>
      <span className="mb-1 text-slate-700 font-bold text-base uppercase">
        BADGES
      </span>
      <div className="flex gap-2">
        {badges.map((badge: Badge) => (
          <Badge key={badge.label} label={badge.label} color={badge.color} />
        ))}
      </div>
    </div>
  );
};

export default DriverBadges;
