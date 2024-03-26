import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";


const BookCards = () => {
  const [bookCards, setBookCards]=useState([]);

  useEffect(()=>{
    const fetchData= async()=>{
      const res= await fetch('./data.json');
      const data= await res.json();
      setBookCards(data)
    }
    fetchData()
  },[])
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {
        bookCards.map((card,idx)=><BookCard key={idx} card={card}></BookCard>)
      }
    </div>
  );
};

export default BookCards;