import { getWishlistFromLocalStorage } from "../../utils/localStorage";
import ReadWish from "../ReadWish/ReadWish";



const Wishlists = () => {
  const getData=getWishlistFromLocalStorage();
  
  return (
    <div>
      {
         getData?.map((data, idx)=> <ReadWish key={idx} data={data}></ReadWish>)
      }
    </div>
  );
};

export default Wishlists;