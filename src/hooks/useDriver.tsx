import { useContext } from "react";
import DriverContext from "../context/driverContext";

const useDriver = () => {
  const { driver, query, setQuery, isPopupOpened, togglePopup } =
    useContext(DriverContext);

  return { driver, query, setQuery, isPopupOpened, togglePopup };
};

export default useDriver;
