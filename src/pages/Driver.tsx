import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDriver } from "../lib/firebase";
import type { Driver } from "../types/driver";

const Driver = () => {
  const [currentDriver, setCurrentDriver] = useState<Driver | null>(null);
  const { slug } = useParams();

  const formatDriverName = (name: string | undefined): string => {
    if (!name) {
      return "";
    }

    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    const fetchData = async () => {
      const driverName = formatDriverName(slug);
      const data = await getDriver(driverName);

      setCurrentDriver(data);
    };

    fetchData();
  }, [slug]);

  if (!currentDriver) {
    return <p>Driver not found. Try again later!</p>;
  }

  return (
    <div>
      <p>Driver:</p>
      <h2>{currentDriver.name}</h2>
    </div>
  );
};

export default Driver;
