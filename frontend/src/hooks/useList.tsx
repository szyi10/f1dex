import ListContext from "@context/listContext";
import { useContext } from "react";

const useList = () => {
  const { list, setList } = useContext(ListContext);

  return { list, setList };
};

export default useList;
