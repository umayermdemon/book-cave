import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import ReadPages from "../Pages/ReadPages/ReadPages";

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/listedBooks',
        element: <ListedBooks/>
      },
      {
        path: '/readPages',
        element: <ReadPages/>
      }
    ]
  }
])

export default router;