import { useEffect, useState } from "react";
import { Driver } from "../../../types/driver";
import { getDrivers } from "../../../lib/firebase";
import DriverCard from "./DriverCard";

const DriversList = () => {
  const [drivers, setDrivers] = useState<Driver[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDrivers();
      setDrivers(data);
    };

    fetchData();
  }, []);

  if (!drivers) {
    return <p>No drivers found...</p>;
  }

  return (
    <div className="w-full mt-6 grid grid-cols-3 gap-4">
      {drivers.map((driver: Driver) => (
        <DriverCard key={driver.name} data={driver} />
      ))}
    </div>
  );
};

export default DriversList;
