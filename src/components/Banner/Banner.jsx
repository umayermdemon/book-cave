import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 

const Banner = () => {
  return (
    <div>
       <Card className="mt-2 lg:mt-8 w-[96%] lg:max-w-7xl mx-2 lg:mx-auto bg-[#1313130D]  lg:flex-row-reverse">
      <CardHeader
        shadow={false}
        floated={false}
        className="mx-24 lg:mx-36 my-8  rounded-r-none"
      >
        <img
          src="/images/card-1.png"
          alt="card-image"
          className=" bg-[#1313130D]  p-4"
        />
      </CardHeader>
      <CardBody className="flex flex-col text-left justify-center items-start ">
        <Typography  className="mb-4 text-base lg:text-4xl uppercase text-[#131313] font-semibold">
        Books to freshen up 
        </Typography>
        <Typography className="mb-4 text-base lg:text-4xl uppercase text-[#131313] font-semibold">
        your bookshelf
        </Typography>
       
        <Link to={'/listedBooks'}>
        <Button size="lg" className="bg-[#23BE0A] text-xs lg:text-base font-semibold">
          View The List
            
          </Button>
        </Link>

      </CardBody>
    </Card>
    </div>
  );
};

export default Banner;