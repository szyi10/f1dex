import { useState, createContext, ReactNode, useEffect } from "react";
import type { Driver } from "shared.types";

interface Context {
  query: string;
  driver: Driver | null;
  setQuery: (query: string) => void;
  isPopupOpened: boolean;
  togglePopup: () => void;
}

const DriverContext = createContext<Context>({
  query: "Max Verstappen",
  driver: null,
  setQuery: () => {},
  isPopupOpened: false,
  togglePopup: () => {},
});

export const DriverContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [query, setQuery] = useState("");
  const [driver, setDriver] = useState<Driver | null>(null);
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const togglePopup = () => setIsPopupOpened((prevState) => !prevState);

  useEffect(() => {
    const fetchData = async () => {
      let data;

      if (query == "") {
        // TODO: Get driver with most points in CurrentSeason
        data = null;
      } else {
        // TODO: Get driver selected by user
        data = null;
      }

      setDriver(data);
    };

    fetchData();
  }, [query]);

  const contextValue = { setQuery, driver, query, isPopupOpened, togglePopup };

  return (
    <DriverContext.Provider value={contextValue}>
      {children}
    </DriverContext.Provider>
  );
};

export default DriverContext;
