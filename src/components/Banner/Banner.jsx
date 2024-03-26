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
       <Card className="mt-8 max-w-7xl mx-auto bg-[#1313130D]  flex-row-reverse">
      <CardHeader
        shadow={false}
        floated={false}
        className="mx-36 my-8  rounded-r-none"
      >
        <img
          src="/images/card-1.png"
          alt="card-image"
          className=" bg-[#1313130D]  p-4"
        />
      </CardHeader>
      <CardBody className="flex flex-col text-left justify-center items-start ">
        <Typography variant="h2"  className="mb-4 uppercase text-[#131313] font-semibold">
        Books to freshen up <br /> your bookshelf
        </Typography>
       
        <Link to={'/listedBooks'}>
        <Button size="lg" className="bg-[#23BE0A] text-base font-semibold">
          View The List
            
          </Button>
        </Link>

      </CardBody>
    </Card>
    </div>
  );
};

export default Banner;