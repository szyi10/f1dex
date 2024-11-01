import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DriverInfo, SelectedDriver } from "../components/feature";
import { useDriver } from "../hooks";

const Driver = () => {
  const { slug } = useParams();
  const { driver, setQuery } = useDriver();

  // Format slug name to regular one e.g. 'max-verstappen' to 'Max Verstappen'
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
      setQuery(driverName);
    };

    fetchData();
  }, [setQuery, slug]);

  if (!driver) {
    return <p>Driver not found. Try again later!</p>;
  }

  // LEFT SIDE - biography & news
  // RIGHT SIDE - everything else
  return (
    <main className="max-w-screen-xl w-full mx-auto mt-8 px-3 flex items-start">
      <div className="w-3/4">
        <DriverInfo data={driver} />
      </div>
      <div className="w-1/4 ml-5">
        <SelectedDriver withBio={false} withButton={false} />
        <div className="bg-neutral-50 rounded-xl p-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] mt-3">
          place of birth, some additional stats
        </div>
      </div>
    </main>
  );
};

export default Driver;
