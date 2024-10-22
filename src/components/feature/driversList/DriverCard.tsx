import SelectedBadges from "../selectedDriver/SelectedBadges";
import { Driver } from "../../../types/driver";
import useDriver from "../../../hooks/useDriver";

const DriverCard = ({ data }: { data: Driver }) => {
  const { setQuery } = useDriver();

  const changeSelectedDriver = (e: React.MouseEvent) => {
    setQuery(e.currentTarget.id);
  };

  return (
    // TODO: Change to `data.name` to `data.id`
    <div
      id={data.name}
      className="cursor-pointer transition-all hover:scale-[1.02]"
      onClick={changeSelectedDriver}
    >
      <img src={data.portrait} alt={data.name} className="w-1/3 mx-auto" />
      <div className="bg-neutral-50 rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] -mt-10 pt-14 px-4 pb-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-neutral-400">{data.team}</p>
          <h3 className="text-xl font-bold">{data.name}</h3>
          <SelectedBadges badges={data.badges} />
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
