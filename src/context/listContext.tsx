import { createContext, ReactNode, useEffect, useState } from "react";
import { Driver } from "../types/driver";
import { getDrivers } from "../lib/firebase";

interface ContextProps {
  list: Driver[];
  setList: (list: Driver[]) => void;
}

const ListContext = createContext<ContextProps>({
  list: [],
  setList: () => {},
});

export const ListContextProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<Driver[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDrivers();
      setList(data);
    };

    fetchData();
  }, []);

  const contextValue = { list, setList };

  return (
    <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>
  );
};

export default ListContext;
