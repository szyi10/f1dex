import { useContext } from "react";
import DriverContext from "../context/driverContext";

const useDriver = () => {
  const { driver, query, setQuery } = useContext(DriverContext);

  return { driver, query, setQuery };
};

export default useDriver;
