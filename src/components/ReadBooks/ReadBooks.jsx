
import { getDataFromLocalStorage } from "../../utils/localStorage";
import ReadWish from "../ReadWish/ReadWish";


const ReadBooks = (/*{sortBy}*/) => {
  const getData=getDataFromLocalStorage();
  
  return (
    <div>
      {
       /*sortBy*/getData?.map((data, idx)=> <ReadWish key={idx} data={data}></ReadWish>)
      }
    </div>
  );
};


export default ReadBooks;