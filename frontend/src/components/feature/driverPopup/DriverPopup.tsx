import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import useDriver from "@hooks/useDriver";
import { driverNamesColors } from "@lib/constants";
import SelectedBadges from "../selectedDriver/SelectedBadges";
import SelectedBio from "../selectedDriver/SelectedBio";

const DriverPopup = () => {
  const { driver, isPopupOpened, togglePopup } = useDriver();

  if (!driver) {
    return;
  }

  return (
    <>
      <div
        onClickCapture={togglePopup}
        className={twMerge(
          "lg:hidden left-0 top-0 w-full h-full fixed bg-slate-900/50 transition-opacity pointer-events-none opacity-0 duration-300",
          isPopupOpened && "opacity-100 pointer-events-auto"
        )}
      />
      <section
        className={twMerge(
          "flex items-end lg:hidden fixed left-0 -bottom-[650px] w-full transition-all duration-300 opacity-0 pointer-events-none",
          isPopupOpened && "bottom-0 opacity-100 pointer-events-auto"
        )}
      >
        <div className="w-full text-slate-800">
          <img
            src={driver.portrait}
            alt={driver.name}
            className="w-1/2 mx-auto"
          />
          <div className="bg-neutral-50 rounded-t-xl -mt-28 pt-32 px-5 pb-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <div className="flex flex-col items-center">
              <small className="text-base uppercase font-bold text-neutral-400 tracking-widest">
                #{driver.number}
              </small>
              <h2
                className={twMerge(
                  `text-xl font-bold ${driverNamesColors}`,
                  `text-${driver.tailwindColor}`
                )}
              >
                {driver.name}
              </h2>
              <p className="text-sm text-neutral-400">{driver.team}</p>
            </div>
            <SelectedBadges badges={driver.badges} />
            <SelectedBio text={driver.bio} />
            <Link to={`/driver/${driver.slug}`}>
              <button className="mt-5 w-full bg-blue-500 text-neutral-100 rounded-xl py-2 hover:scale-[1.02] shadow shadow-transparent transition-all hover:shadow-blue-500">
                Check More
              </button>
            </Link>
            <button
              onClick={togglePopup}
              className="mt-2 w-full bg-neutral-400 text-neutral-100 rounded-xl py-2 hover:scale-[1.02] shadow shadow-transparent transition-all hover:shadow-neutral-400"
            >
              Close
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DriverPopup;
