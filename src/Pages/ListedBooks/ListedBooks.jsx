import { useState } from "react";
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

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <div className="bg-[#1313130D] max-w-7xl mx-auto rounded-xl">
        <h1 className="text-4xl font-bold p-8 text-center">Books</h1>
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
            <MenuItem>Rating</MenuItem>
            <MenuItem>No. Of Pages</MenuItem>
            <MenuItem>Published Year</MenuItem>
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
            <ReadBooks />
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
