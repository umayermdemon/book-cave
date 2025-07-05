
import BookCard from "../BookCard/BookCard";
import useFetchData from "../../Hooks/useFetchData";
import CustomSpinner from "../../CustomSpinner/CustomSpinner";



const BookCards = () => {
  const {bookCards,loader}=useFetchData();
  if(loader){
    return <CustomSpinner/>
  }
  
  return (
    <div className="grid  lg:grid-cols-3 gap-4 lg:gap-8 mt-4 lg:mt-12 mx-2">
      {
        bookCards.map((card,idx)=><BookCard key={idx}   card={card}></BookCard>)
      }
    </div>
  );
};

export default BookCards;