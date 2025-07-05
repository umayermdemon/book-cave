import { useEffect, useState } from "react";


const useFetchData = () => {
  const [bookCards, setBookCards]=useState([]);
  const [loader, setLoader]=useState(true);

  useEffect(()=>{
    const fetchData= async()=>{
      setLoader(true)
      const res= await fetch('./data.json');
      const data= await res.json();
      setBookCards(data);
      setLoader(false)
    }
    fetchData()
  },[])
  return (
    {bookCards, loader}
  );
};

export default useFetchData;