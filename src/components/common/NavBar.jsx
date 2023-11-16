import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { Link, useLocation, matchPath } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { IoMdArrowDropdown } from "react-icons/io";

const NavBar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { total } = useSelector((state) => state.cart);
  const location = useLocation();
  const [subLinks , setSubLinks] = useState([])
  // const subLinks = [
  //   {
  //     title: "Python",
  //     description: "",
  //   },
  //   {
  //     title: "web Development",
  //     description: "",
  //   },
  // ];

  async function getCategories() {
    try {
      console.log("API url", categories.CATEGORIES_API);
      const res = await apiConnector('GET', categories.CATEGORIES_API );
      

      setSubLinks(res.data.data)
      console.log("SubLinks deliver by backend :", res.data.data );
    } catch (err) {
      console.log(err);
      console.log("Could not fetch data...");
    }
  }

  useEffect(() => {
    getCategories();
  }, []);
  function matchRoute(rout) {
    return matchPath({ path: rout }, location.pathname);
  }
  return (
    <div className=" flex h-14    items-center  border-b-[1px] border-b-richblack-700">
      <div className=" w-11/12  mx-auto flex   max-w-maxContent  items-center  justify-between">
        <Link to="/">
          <img src={logo} width={160} height={42} />
        </Link>

        <nav>
          <ul className=" flex  gap-3 items-center justify-between text-white ">
            {NavbarLinks.map((ele, index) => (
              <li key={index}>
                {ele.title == "Catalog" ? (
                  <div className="  flex items-center justify-center cursor-pointer group">
                    {ele?.title}
                    <IoMdArrowDropdown />

                    <div className="  p-7  invisible group-hover:visible  opacity-0 absolute z-10  flex flex-col  top-14 w-[250px] left-[40%] right-[50%] bg-richblack-5 rounded-md  transition-all duration-200  group-hover:opacity-100">
                      

                      <div className=" absolute left-[50%] top-0  h-6 w-6 -translate-x-[100%] translate-y-[-45%]  rotate-45  rounded-sm bg-richblack-5 ">

                      </div>
                      {
                        subLinks.map((ele,index)=>{
                          return <Link key={index} className=" text-richblack-700">
                            {ele?.name}
                          </Link>
                        })
                      }
                      
                   
                    </div>
                   
                  
                  </div>
                ) : (
                  <Link
                    to={ele.path}
                    className={`${
                      matchRoute(ele?.path)
                        ? "text-yellow-25"
                        : " text-richblack-25"
                    }`}
                  >
                    {ele.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login sign up  */}

        <div className=" flex items-center justify-between gap-x-4">
          {user && user?.accountType != "Instructor" && (
            <Link to="/dashboard/cart" className=" text-white flex relative">
              <AiOutlineShoppingCart size={20} />
              <div className="  text-richblack-500  bg-caribbeangreen-100  rounded-full flex  items-center justify-center text-xs w-4 h-4 absolute translate-x-4 -translate-y-3">{total }</div>
            </Link>
          )}
          {token == null && (
            <Link to="/login">
              <button className="  border  border-richblack-300 bg-richblack-800 px-[12px] py-[8px]   text-richblack-25 rounded-md">
                Log In
              </button>
            </Link>
          )}
          {token == null && (
            <Link to="/signup">
              <button className="  border  border-richblack-300 bg-richblack-800 px-[12px] py-[8px]   text-richblack-25 rounded-md">
                Sign Up
              </button>
            </Link>
          )}
          {token != null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
