import SelectedStats from "../selectedDriver/SelectedStats";
import SelectedDetails from "../selectedDriver/SelectedDetails";
import { twMerge } from "tailwind-merge";
import { driverNamesColors } from "../../../lib/constants";
import type { Driver } from "shared.types";

const MobileCard = ({ data }: { data: Driver }) => {
  const statsData = [
    {
      label: "wins",
      icon: "W",
      stat: data.wins,
      color: "yellow",
    },
    {
      label: "pole positions",
      icon: "PP",
      stat: data.polePositions,
      color: "red",
    },
    {
      label: "fastest laps",
      icon: "FL",
      stat: data.fastestLaps,
      color: "violet",
    },
    {
      label: "podiums",
      icon: "PD",
      stat: data.podiums,
      color: "green",
    },
    {
      label: "GP's entered",
      icon: "GP",
      stat: data.gpEntered,
      color: "orange",
    },
    {
      label: "retirements",
      icon: "RET",
      stat: data.retirements,
      color: "blue",
    },
    {
      label: "points",
      icon: "PTS",
      stat: data.pointsScored,
      color: "neutral",
    },
  ];

  return (
    <div
      className={twMerge(
        "block lg:hidden text-slate-800 transition-opacity duration-300"
      )}
    >
      <img src={data.portrait} alt={data.name} className="w-3/4 mx-auto" />
      <div className="bg-neutral-50 rounded-xl -mt-28 pt-32 px-5 pb-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <div className="flex flex-col items-center">
          <small className="text-base uppercase font-bold text-neutral-400 tracking-widest">
            #{data.number}
          </small>
          <h2
            className={twMerge(
              `text-xl font-bold ${driverNamesColors}`,
              `text-${data.tailwindColor}`
            )}
          >
            {data.name}
          </h2>
          <p className="text-sm text-neutral-400">{data.team}</p>
        </div>
        <SelectedDetails
          age={data.age}
          country={data.country}
          height={data.height}
          weight={data.weight}
        />
        <SelectedStats stats={statsData} />
      </div>
    </div>
  );
};

export default MobileCard;
