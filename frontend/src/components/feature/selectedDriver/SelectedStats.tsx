import { twMerge } from "tailwind-merge";
import { statsBgColors } from "@lib/constants";

interface Stat {
  label?: string;
  icon: string;
  stat: number;
  color: string;
}

const Stat = ({ icon, stat, color }: Stat) => {
  return (
    <div className="bg-slate-200 p-1 rounded-full w-full h-28">
      <div
        className={twMerge(
          `rounded-full text-neutral-50 text-xs font-semibold h-[34px] w-[34px] lg:h-[26px] lg:w-[26px] flex items-center justify-center ${statsBgColors}`,
          `bg-${color}-500`
        )}
      >
        {icon}
      </div>
      <span className="[writing-mode:vertical-lr] text-sm text-slate-700 font-semibold mt-2 h-16 w-full flex items-center justify-start">
        {stat}
      </span>
    </div>
  );
};

const SelectedStats = ({ stats }: { stats: Stat[] }) => {
  return (
    <div className="mt-4 flex flex-col items-center">
      <h3 className="mb-1 text-slate-700 font-bold text-sm">STATS</h3>
      <div className="flex items-start w-full gap-1">
        {stats.map((stat: Stat) => (
          <Stat
            key={stat.label}
            icon={stat.icon}
            stat={stat.stat}
            color={stat.color}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedStats;
