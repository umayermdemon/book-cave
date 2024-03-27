import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography
} from "@material-tailwind/react";
import { IoMdStarOutline } from "react-icons/io";

import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const BookCard = ({card}) => {
  
  const {id,bookName, author, image, category, rating, tags}=card || {};

  return (
    <div>
      <Link to={`/bookDetails/${id}`}>
      <Card className="mt-2 lg:mt-6 w-[98%] lg:w-96 border border-gray-400 cursor-pointer">
      <CardHeader  className=" flex items-center justify-center shadow-none mt-4 mx-auto h-52 w-80 bg-[#13131326]">
        <img
          src={image}
          alt="card-image"
          className="w-28"
        />
      </CardHeader>
      <CardBody>
        <div className="flex flex-row gap-4 mb-2">
          {
            tags?.map((item,idx)=> <p key={idx} className=" bg-[#23BE0A0D] rounded-2xl p-2 text-[#23BE0A] text-sm">{item}</p>)
          }
        </div>
        <Typography variant="h5"  className="mb-2 text-[#131313] font-semibold text-xl">
          {bookName}
        </Typography>
        <Typography className="text-[#131313CC] font-medium text-sm">
         By: {author}
        </Typography>
        
      </CardBody>
      
      <CardFooter className="pt-0">
      <hr />
       <div className="flex justify-between items-center">
        <h1>{category}</h1>
        <div className="flex gap-1 items-center mt-4">
          <h2 className="text-lg font-medium font-sans">{rating}</h2>
          <h2 className="text-2xl"><IoMdStarOutline /></h2>
        </div>
       </div>
      </CardFooter>
      </Card>
      </Link>
      
    </div>
  );
};

BookCard.propTypes={
  card: PropTypes.object.isRequired
}

export default BookCard;