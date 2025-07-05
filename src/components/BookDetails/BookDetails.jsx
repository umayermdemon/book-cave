import { Button, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { setDataToLocalStorage, setWishlistToLocalStorage } from "../../utils/localStorage";
import { Helmet } from "react-helmet-async";



const BookDetails = () => {
  const [details, setDetails]=useState([])
  const {id}=useParams()
  const data=useLoaderData();

  useEffect(()=>{
    const findData=data.find(item=>item.id===+id);
    setDetails(findData)
  },[data, id])

  const handleRead=()=>{
      setDataToLocalStorage(details);
  }

  const handleWishlist=()=>{
    setWishlistToLocalStorage(details)
  }
  
  const {image,bookName, author, review, totalPages, rating, category, tags, publisher,yearOfPublishing}=details ||{};
  
  return (
    <div>
       <Helmet>
        <title>Book Cave | Book Details {id}</title>
      </Helmet>
      <Card className="w-full max-w-7xl shadow-none mx-auto min-h-[calc(100vh-450px)] mt-6 lg:flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="my-4  w-[90%] lg:w-2/5 shrink-0 rounded-xl bg-[#1313130D] flex items-center justify-center"
      >
        <img
          src={image}
          className="h-96 lg:h-[90%] w-full p-8"
        />
      </CardHeader>
      <CardBody>
        <Typography  color="gray" className="mb-4 uppercase text-[#131313] text-xl lg:text-4xl">
          {bookName}
        </Typography>
        <Typography   className="mb-2 text-[#131313CC] text-sm lg:text-xl">
          By: {author}
        </Typography>
        <hr />
        <Typography color="gray" className="my-4 font-normal">
         {category}
        </Typography>
          <hr />
        <Typography color="gray" className="mb-6 font-normal text-base text-justify">
         <span> Review:</span> {review}
        </Typography>
        <div className="mb-4 flex flex-row gap-4 lg:gap-8 items-center" >
          <p>Tags:</p>
          <div className="flex flex-row gap-4 items-center">
          {
            tags?.map((tag,idx)=><p key={idx} className=" bg-[#23BE0A0D] rounded-2xl p-2 text-[#23BE0A] text-xs lg:text-sm">{tag}</p>)
          }
          </div>
        </div>
        <hr />
        
        <Typography className="space-y-2 mt-4">
          <div className="flex flex-row gap-8"><h2 className="text-[#131313B2] text-sm">Number of Pages:</h2>    <h2 className="font-bold text-[#131313] text-sm">{totalPages}</h2></div>
          <div className="flex flex-row gap-8"><h2 className="text-[#131313B2] text-sm mr-[52px]">Publisher:</h2><h2 className="font-bold text-[#131313] text-sm">{publisher}</h2></div>
          <div className="flex flex-row gap-8"><h2 className="text-[#131313B2] text-sm">Year of Publishing:</h2> <h2 className="font-bold text-[#131313] text-sm">{yearOfPublishing}</h2></div>
          <div className="flex flex-row gap-8"><h2 className="text-[#131313B2] text-sm mr-[72px]">Rating:</h2>   <h2 className="font-bold text-[#131313] text-sm">{rating}</h2></div>
        </Typography>
        
       <div className="flex flex-row gap-4 mt-4">
        <Link> <Button onClick={handleRead} className="flex items-center gap-2 bg-white text-black border border-[#1313134D]">Read</Button></Link>
        <Link> <Button onClick={handleWishlist}  className="flex items-center gap-2 bg-[#50B1C9]">Wishlist</Button></Link>
       </div>
      </CardBody>
    </Card>
    
    </div>
  );
};

export default BookDetails;