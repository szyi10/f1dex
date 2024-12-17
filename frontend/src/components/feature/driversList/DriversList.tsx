import useList from "@hooks/useList";
import DriverCard from "./DriverCard";
import type { Driver } from "shared.types";

const DriversList = () => {
  const { list } = useList();

  if (!list) {
    return <p>No drivers found...</p>;
  }

  return (
    <div className="w-full mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {list.map((driver: Driver) => (
        <DriverCard key={driver.name} data={driver} />
      ))}
    </div>
  );
};

export default DriversList;
