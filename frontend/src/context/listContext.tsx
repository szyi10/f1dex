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
      // TODO: Fetch all drivers
    };

    fetchData();
  }, []);

  const contextValue = { list, setList };

  return (
    <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>
  );
};

export default ListContext;
