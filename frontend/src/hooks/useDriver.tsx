import { useContext } from "react";
import DriverContext from "@context/driverContext";

const useDriver = () => {
  const { driver, isPopupOpened, query, setQuery, togglePopup } =
    useContext(DriverContext);

  return { driver, isPopupOpened, query, setQuery, togglePopup };
};

export default useDriver;
