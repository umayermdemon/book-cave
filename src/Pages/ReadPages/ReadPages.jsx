import { useState, useEffect } from "react";
import { getDataFromLocalStorage } from "../../utils/localStorage";
import ReadChart from "../../components/ReadChart/ReadChart";
import { Helmet } from "react-helmet-async";

export default function App() {
  const [books, setBooks] = useState([]);


  useEffect(() => {
  
    setBooks(getDataFromLocalStorage());
 
  }, []);


  const chartData = books.map((book) => ({
    name: book.bookName, 
    pages: book.totalPages,
   
  }));



  return (
    <div className="w-full lg:max-w-7xl mx-auto ">
       <Helmet>
        <title>Book Cave | Read Page</title>
      </Helmet>
      <div className="flex lg:flex-row flex-col">
        <ReadChart chartData={chartData} />
      </div>
    </div>
  );
}