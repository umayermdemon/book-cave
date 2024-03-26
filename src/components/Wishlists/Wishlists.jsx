import { getWishlistFromLocalStorage } from "../../utils/localStorage";
import Read from "../ReadWish/ReadWish";


const Wishlists = () => {
  const getData=getWishlistFromLocalStorage();
  
  return (
    <div>
      {
         getData?.map((data, idx)=> <Read key={idx} data={data}></Read>)
      }
    </div>
  );
};

export default Wishlists;