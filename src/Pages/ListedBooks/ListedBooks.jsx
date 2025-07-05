import {   useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooks from "../../components/ReadBooks/ReadBooks";
import Wishlists from "../../components/Wishlists/Wishlists";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import { Helmet } from "react-helmet-async";
// import { getDataFromLocalStorage } from "../../utils/localStorage";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  // const [sortBy, setSortBy]=useState([]);
  // const getData=getDataFromLocalStorage();

  

  // const handleSort=(sort)=>{
  //   if(sort==='rating'){
  //     setSortBy( getData.slice().sort((a,b)=>b.rating-a.rating))
  //   }
  //   else if(sort==='totalPages'){
  //     setSortBy( getData.slice().sort((a,b)=>b.totalPages-a.totalPages))
  //   }
  //   else if(sort==='publishedYear'){
  //     setSortBy( getData.slice().sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing))
  //   }
   
  // }




  return (
    <div>
       <Helmet>
        <title>Book Cave | Listed Books</title>
      </Helmet>
      <div className="bg-[#1313130D] w-[96%] lg:max-w-7xl mx-2 lg:mx-auto rounded-xl">
        <h1 className="text-3xl lg:text-4xl font-bold p-8 text-center">Books</h1>
      </div>

      <div className="flex justify-center items-center max-w-7xl mx-auto my-6">
        <Menu>
          <MenuHandler>
    
              <Button className="flex flex-row items-center gap-4 bg-[#23BE0A]">
                <p>Sort By</p>
              <p>
                <IoIosArrowDown />
              </p>
              </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem /*onClick={()=>handleSort('rating')}       */ >Rating</MenuItem>
            <MenuItem /*onClick={()=>handleSort('totalPages')}   */ >No. Of Pages</MenuItem>
            <MenuItem /*onClick={()=>handleSort('publishedYear')}*/ >Published Year</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className="max-w-7xl mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>
          <TabPanel>
            <ReadBooks /*sortBy={sortBy}*/ />
          </TabPanel>
          <TabPanel>
            <Wishlists />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
