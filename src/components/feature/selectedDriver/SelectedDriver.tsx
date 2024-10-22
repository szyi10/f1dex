import { useState, useEffect } from "react";
import SelectedBadges from "./SelectedBadges";
import SelectedBio from "./SelectedBio";
import SelectedDetails from "./SelectedDetails";
import SelectedStats from "./SelectedStats";
import { twMerge } from "tailwind-merge";
import useDriver from "../../../hooks/useDriver";

const SelectedDriver = () => {
  const { driver } = useDriver();
  const [fade, setFade] = useState(false); // State for fade effect
  const [currentDriver, setCurrentDriver] = useState(driver); // State for current driver

  useEffect(() => {
    // Trigger fade out
    setFade(true);

    const timer = setTimeout(() => {
      setCurrentDriver(driver); // Update current driver
      setFade(false); // Trigger fade in
    }, 100); // Duration of fade-out

    return () => clearTimeout(timer); // Clean up timeout on unmount or driver change
  }, [driver]);

  if (!currentDriver) {
    return <p>No drivers found...</p>;
  }

  const statsData = [
    {
      label: "wins",
      icon: "W",
      stat: currentDriver.wins,
      color: "yellow",
    },
    {
      label: "pole positions",
      icon: "PP",
      stat: currentDriver.polePositions,
      color: "red",
    },
    {
      label: "fastest laps",
      icon: "FL",
      stat: currentDriver.fastestLaps,
      color: "violet",
    },
    {
      label: "podiums",
      icon: "PD",
      stat: currentDriver.podiums,
      color: "green",
    },
    {
      label: "GP's entered",
      icon: "GP",
      stat: currentDriver.gpEntered,
      color: "orange",
    },
    {
      label: "retirements",
      icon: "RET",
      stat: currentDriver.retirements,
      color: "blue",
    },
    {
      label: "points",
      icon: "PTS",
      stat: currentDriver.pointScored,
      color: "neutral",
    },
  ];

  return (
    <div
      className={twMerge(
        "text-slate-800 transition-opacity duration-300",
        fade ? "opacity-0" : "opacity-100"
      )}
    >
      <img
        src={currentDriver.portrait}
        alt={currentDriver.name}
        className="w-3/4 mx-auto"
      />
      <div className="bg-neutral-50 rounded-xl -mt-28 pt-32 px-5 pb-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <div className="flex flex-col items-center">
          <small className="text-base uppercase font-bold text-neutral-400 tracking-widest">
            #{currentDriver.number}
          </small>
          <h2
            className={twMerge(
              "text-xl font-bold text-teal-400",
              `text-${currentDriver.tailwindColor}`
            )}
          >
            {currentDriver.name}
          </h2>
          <p className="text-sm text-neutral-400">{currentDriver.team}</p>
        </div>
        <SelectedBadges badges={currentDriver.badges} />
        <SelectedBio text={currentDriver.bio} />
        <SelectedDetails
          age={currentDriver.age}
          country={currentDriver.country}
          height={currentDriver.height}
          weight={currentDriver.weight}
        />
        <SelectedStats stats={statsData} />
        <button className="mt-5 w-full bg-primary text-neutral-100 rounded-xl py-2 hover:scale-[1.02] shadow shadow-transparent transition-all hover:shadow-primary">
          Check More
        </button>
      </div>
    </div>
  );
};

export default SelectedDriver;
