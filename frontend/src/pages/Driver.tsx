import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useDriver from "@hooks/useDriver";
import { NoResults } from "@components/shared";
import { DriverInfo, SelectedDriver } from "@components/feature";

const Driver = () => {
  const { slug } = useParams();
  const { driver, setQuery } = useDriver();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://127.0.0.1:8080/drivers/slug/${slug}`);
      const data = await res.json();

      setQuery(data.id);
    };

    fetchData();
  }, [setQuery, slug]);

  if (!driver) {
    return <NoResults />;
  }

  return (
    <main className="max-w-screen-xl w-full mx-auto mt-8 px-3 flex items-start">
      <div className="w-full lg:w-3/4">
        <DriverInfo data={driver} />
      </div>
      <div className="hidden lg:block w-1/4 ml-5">
        <SelectedDriver withBio={false} withButton={false} />
        {/* <div className="bg-neutral-50 rounded-xl p-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] mt-3">
          place of birth, some additional stats
        </div> */}
      </div>
    </main>
  );
};

export default Driver;
