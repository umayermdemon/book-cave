
import BookCard from "../BookCard/BookCard";
import useFetchData from "../../Hooks/useFetchData";
import CustomSpinner from "../../CustomSpinner/CustomSpinner";


const BookCards = () => {
  const {bookCards,loader}=useFetchData();
  if(loader){
    return <CustomSpinner/>
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {
        bookCards.map((card,idx)=><BookCard key={idx} loader={loader}  card={card}></BookCard>)
      }
    </div>
  );
};

export default BookCards;