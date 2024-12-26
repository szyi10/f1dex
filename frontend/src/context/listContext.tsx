import { createContext, ReactNode, useEffect, useState } from "react";
import type { Driver } from "shared.types";

interface Context {
  list: Driver[];
  setList: (list: Driver[]) => void;
}

const ListContext = createContext<Context>({
  list: [],
  setList: () => {},
});

export const ListContextProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<Driver[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "http://127.0.0.1:8080/drivers?sortBy=currentSeason.pointScored&order=desc"
      );
      const drivers = await data.json();

      setList(drivers);
    };

    fetchData();
  }, []);

  const contextValue = { list, setList };

  return (
    <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>
  );
};

export default ListContext;
