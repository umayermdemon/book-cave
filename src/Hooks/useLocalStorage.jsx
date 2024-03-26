import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../utils/localStorage";


const useLocalStorage = () => {
  const [localdata, setLocaldata] =useState([]);

  useEffect(()=>{
    setLocaldata(getDataFromLocalStorage())
  },[])
  return {localdata};
};

export default useLocalStorage;