import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import BookCards from "../../components/BookCards/BookCards";


const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Book Cave | Home</title>
      </Helmet>
      <Banner/>
      <div className="my-12">
        <h1 className=" text-[#131313] text-4xl font-semibold text-center">Books</h1>
        <BookCards/>
      </div>
    </div>
  );
};

export default Home;