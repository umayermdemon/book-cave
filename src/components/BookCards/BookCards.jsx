
import BookCard from "../BookCard/BookCard";
import useFetchData from "../../Hooks/useFetchData";


const BookCards = () => {
  const {bookCards}=useFetchData();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {
        bookCards.map((card,idx)=><BookCard key={idx} card={card}></BookCard>)
      }
    </div>
  );
};

export default BookCards;