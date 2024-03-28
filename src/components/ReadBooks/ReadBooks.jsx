
import { getDataFromLocalStorage } from "../../utils/localStorage";
import ReadWish from "../ReadWish/ReadWish";


const ReadBooks = () => {
  const getData=getDataFromLocalStorage();
  
  return (
    <div>
      {
        getData?.map((data, idx)=> <ReadWish key={idx} data={data}></ReadWish>)
      }
    </div>
  );
};


export default ReadBooks;