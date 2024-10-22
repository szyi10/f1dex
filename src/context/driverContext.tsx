import { useState, createContext, ReactNode, useEffect } from "react";
import { Driver } from "../types/driver";
import { getDriver } from "../lib/firebase";

interface ContextProps {
  query: string;
  driver: Driver | null;
  setQuery: (query: string) => void;
}

const DriverContext = createContext<ContextProps>({
  query: "Max Verstappen",
  driver: null,
  setQuery: () => {},
});

export const DriverContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [query, setQuery] = useState("");
  const [driver, setDriver] = useState<Driver | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let data;

      if (query == "") {
        data = await getDriver("Max Verstappen");
      } else {
        data = await getDriver(query);
      }

      setDriver(data);
    };

    fetchData();
  }, [query]);

  const contextValue = { setQuery, driver, query };

  return (
    <DriverContext.Provider value={contextValue}>
      {children}
    </DriverContext.Provider>
  );
};

export default DriverContext;
