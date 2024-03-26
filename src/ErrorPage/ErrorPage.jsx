import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="mt-72 max-w-3xl mx-auto">
      <div className="flex flex-col justify-center   p-8 rounded-xl">
      <h1 className="text-4xl font-bold text-center mb-4">Oops! Page Not Found</h1>
      <p className="text-lg text-justify mb-8 ">We are sorry, but the page you are looking for could not be found. It may have been moved, deleted, or never existed in the first place. Do not worry, though, we are here to help you get back on track!</p>
      <h2 className="text-xl font-semibold mb-2">Here are a few things you can try:</h2>
      <p className="text-lg font-sans"> <span className="text-lg font-bold font-sans">1. Check the URL:</span> Make sure you have entered the correct web address. Typos happen to the best of us!</p>
      <p className="text-xl font-semibold mb-2"> <span className="text-lg font-bold font-sans">2. Go to the Homepage:</span>  You can always start fresh by visiting our <span className="text-blue-700 underline"><Link to={'/'}>homepage.</Link></span></p>
      <p className="mt-4 text-center font-bold text-xl">Thanks for your understanding!</p>
    </div>
    </div>
  );
};

export default ErrorPage;