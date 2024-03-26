import { getDataFromLocalStorage } from "../../utils/localStorage";
import Read from "../Read/Read";


const ReadBooks = () => {
  const getData=getDataFromLocalStorage()
  console.log(getData)
  return (
    <div>
      {
        getData?.map((data, idx)=> <Read key={idx} data={data}></Read>)
      }
    </div>
  );
};

export default ReadBooks;