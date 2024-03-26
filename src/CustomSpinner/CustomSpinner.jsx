import { Spinner } from "@material-tailwind/react";


const CustomSpinner = () => {
  return (
    <div className="flex justify-center mt-8">
      <Spinner color="teal" className="h-8 w-8" />
    </div>
  );
};

export default CustomSpinner;