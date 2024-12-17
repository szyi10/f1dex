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

const SelectedBadges = ({ badges }: { badges: Badge[] }) => {
  return (
    <div className="flex items-center justify-center gap-1 mt-2">
      {badges.map((badge: Badge) => (
        <Badge key={badge.label} label={badge.label} color={badge.color} />
      ))}
    </div>
  );
};

export default SelectedBadges;
