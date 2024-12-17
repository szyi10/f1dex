import { twMerge } from "tailwind-merge";
import DriverBadges from "./DriverBadges";
import DriverBiography from "./DriverBiography";
// import DriverNews from "./DriverNews";
import { statsBgColors } from "@lib/constants";
import MobileCard from "./MobileCard";
import type { Driver } from "shared.types";

interface Stat {
  icon: string;
  stat: number;
  color: string;
}

const Stat = ({ icon, stat, color }: Stat) => {
  return (
    <div className="bg-slate-200 p-1 rounded-full flex items-center">
      <div
        className={twMerge(
          `rounded-full text-neutral-50 text-xs font-semibold h-[26px] w-[26px] flex items-center justify-center ${statsBgColors}`,
          `bg-${color}-500`
        )}
      >
        {icon}
      </div>
      <span className="text-sm text-slate-700 font-semibold mx-4 flex items-center justify-start">
        {stat}
      </span>
    </div>
  );
};

const DriverInfo = ({ data }: { data: Driver }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <MobileCard data={data} />
      <div>
        <span className="mb-1 text-slate-700 font-bold text-base uppercase">
          Current Season
        </span>
        <div className="flex gap-2 flex-wrap">
          <Stat icon="W" color="yellow" stat={data.currentSeason.wins} />
          <Stat icon="PP" color="red" stat={data.currentSeason.polePositions} />
          <Stat
            icon="FL"
            color="violet"
            stat={data.currentSeason.fastestLaps}
          />
          <Stat icon="PD" color="green" stat={data.currentSeason.podiums} />
          <Stat
            icon="PTS"
            color="neutral"
            stat={data.currentSeason.pointScored}
          />
        </div>
      </div>
      <DriverBadges badges={data.badges} />
      <DriverBiography data={data.fullBiography} />
      {/* <DriverNews /> */}
    </div>
  );
};

export default DriverInfo;
