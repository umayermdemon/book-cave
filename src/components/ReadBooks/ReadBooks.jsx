import { getDataFromLocalStorage } from "../../utils/localStorage";
import Read from "../ReadWish/ReadWish";


const ReadBooks = () => {
  const getData=getDataFromLocalStorage()
  
  return (
    <div>
      {
        getData?.map((data, idx)=> <Read key={idx} data={data}></Read>)
      }
    </div>
  );
};

export default ReadBooks;