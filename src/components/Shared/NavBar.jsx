import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
      <NavLink to={'/'} 
      className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] p-3 rounded-xl font-medium text-base pr-4':"flex text-base items-center gap-2  pr-4"}
      >Home</NavLink>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
      <NavLink to={'/listedBooks'} 
      className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] p-3 rounded-xl font-medium text-base pr-4':"flex text-base items-center gap-2 pr-4"}
      >Listed Books</NavLink>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <NavLink to={'/readPages'} 
      className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] p-3 rounded-xl font-medium text-base pr-4':"flex text-base items-center gap-2  pr-4"}
      > Pages to Read</NavLink>
      </Typography>
    </List>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  return (
    <div>
      <Navbar className="mx-auto max-w-7xl px-0 py-2 shadow-none mt-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          
          variant="h6"
          className="mr-4 text-3xl cursor-pointer py-1.5 text-[#131313] font-bold"
        >
          <Link to={'/'}>Book Cave</Link>
          
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button  size="md"  className="bg-[#23BE0A] hover:bg-[#23BE0A]">
            Sign In
          </Button>
          <Button  size="md" className="bg-[#59C6D2] hover:bg-[#59C6D2]">
            Sign Up
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
    </div>
  );
};

export default NavBar;