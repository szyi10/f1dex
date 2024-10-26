import { useContext } from "react";
import ListContext from "../context/listContext";

const useList = () => {
  const { list, setList } = useContext(ListContext);

  return { list, setList };
};

export default useList;
