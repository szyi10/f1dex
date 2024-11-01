import { Driver } from "../../../types/driver";
import DriverBadges from "./DriverBadges";
import DriverBiography from "./DriverBiography";
import DriverNews from "./DriverNews";

const DriverInfo = ({ data }: { data: Driver }) => {
  console.log(data);

  return (
    <div className="w-full flex flex-col gap-4">
      <div>
        <span className="mb-1 text-slate-700 font-bold text-base uppercase">
          Current Season
        </span>
        <p>...</p>
      </div>
      <DriverBadges badges={data.badges} />
      <DriverBiography />
      <DriverNews />
    </div>
  );
};

export default DriverInfo;
