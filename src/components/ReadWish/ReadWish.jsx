import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { BiFileBlank } from "react-icons/bi";
import { Link } from "react-router-dom";

const ReadWish = ({ data }) => {
  const {
    id,
    bookName,
    author,
    image,
    category,
    rating,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = data || {};
  return (
    <div>
      <Card className="mt-6 mx-2 lg:mx-0 w-[96%] lg:w-full lg:flex-row border border-gray-400 cursor-pointer">
        <CardHeader className=" flex items-center justify-center shadow-none m-4  h-52 w-80 lg:w-60 bg-[#13131326]">
          <img src={image} alt="card-image" className="w-28" />
        </CardHeader>
        <CardBody>
          <Typography  color="blue-gray" className="mb-2 text-xl lg:text-2xl font-semibold">
            {bookName}
          </Typography>
          <Typography  color="gray" className="mb-4 text-sm lg:text-base font-semibold">
            By: {author}
          </Typography>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 items-start lg:items-center">
            <div className="flex flex-row gap-4 items-center">
              <p className="font-bold text-[#131313]">Tag</p>
              <div className="flex flex-row gap-4 items-center">
                {tags?.map((tag, idx) => (
                  <p
                    key={idx}
                    className=" bg-[#23BE0A0D] rounded-2xl p-2 text-[#23BE0A] text-xs"
                  >
                    #{tag}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <p><CiLocationOn /></p>
              <p className="font-sans text-xs text-[#131313CC]">Year of Publishing: {yearOfPublishing}</p>
            </div>
          </div>

          <div className="flex flex-row gap-8 items-center font-sans text-[#13131399] text-sm mt-4">
            <div className="flex flex-row gap-2 items-center">
              <p><FiUsers /></p>
              <p>Publisher: {publisher}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <p><BiFileBlank /></p>
              <p>Page: {totalPages}</p>
            </div>
          </div>

          <hr />

          <div className="flex flex-row gap-4 items-center mt-4">
          <p className="p-2 rounded-full text-xs bg-[#328EFF26] text-[#328EFF] text-center">Category: {category}</p>
          <p className="p-2 lg:p-3 rounded-full text-xs   text-center font-sans bg-[#FFAC3321] text-[#FFAC33]">Rating: {rating}</p>
          <Link to={`/bookDetails/${id}`}><Button  className="bg-[#23BE0A] text-xs lg:text-sm text-white">View Details</Button></Link>
          
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

ReadWish.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ReadWish;
