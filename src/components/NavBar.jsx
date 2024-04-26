import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import React, { useState } from "react";
import { GoBell } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { NavMenu } from "../lib/data";
import logo from "../lib/logo.svg";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useNavBarContext } from "../reduser";

function NavBar({ children }) {
  const { isNavBarShown, setIsNavBarShown } = useNavBarContext();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className=" ">
      <div className="h-[50px] bg-white rounded-t-md flex items-center px-2 justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-12" />
          <h1 className=" text-[#378bba] font-extrabold text-xl">AHLFAGON</h1>
        </div>
        <div className="flex gap-5 text-xl items-center ">
          <GoBell />
          <IoSettingsOutline />
          <div className="rounded-full ">
            <img
              alt="kjh"
              className="object-cover overflow-hidden w-8 h-8 rounded-full "
              src={
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
              }
            />
          </div>
        </div>
      </div>
      <div className=" flex gap-6">
        {isNavBarShown ? (
          <div className=" bg-white w-1/6 mt-1 p-2  rounded-b-lg h-[500px] ">
            <div className=" flex justify-between items-center  ">
              <h1 className="text-sm text-slate-500">Menu</h1>
              <div className="cursor-pointer">
                {isNavBarShown ? (
                  <IoIosArrowDropleftCircle
                    className="-mr-[20px] text-2xl text-[#378bba]  "
                    onClick={() => setIsNavBarShown((prev) => !prev)}
                  />
                ) : (
                  <IoIosArrowDroprightCircle
                    className="-mr-[20px] text-2xl text-[#378bba]  "
                    onClick={() => setIsNavBarShown((prev) => !prev)}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col justify-between ">
              <div>
                {NavMenu.map((item, i) => (
                  <Link
                    to={item.Link}
                    className={`flex gap-5 items-center text-lg font-semibold text-[#378bba] mt-2 my-6 cursor-pointer ${
                      pathName === item.Link && "border-r-4 border-[#378bba]"
                    } `}
                    key={i}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className=" bg-white w-[60px] mt-1 p-2 rounded-l-sm h-[500px] ">
            <div className=" ml-[40px] cursor-pointer ">
              {isNavBarShown ? (
                <IoIosArrowDropleftCircle
                  className="-mr-[10px] text-2xl text-[#378bba]   "
                  onClick={() => setIsNavBarShown((prev) => !prev)}
                />
              ) : (
                <IoIosArrowDroprightCircle
                  className="-mr-[20px] text-2xl text-[#378bba]  "
                  onClick={() => setIsNavBarShown((prev) => !prev)}
                />
              )}
            </div>
            <div className="flex flex-col justify-between  mx-auto">
              <div>
                {NavMenu.map((item, i) => (
                  <Link
                    to={item.Link}
                    className={`ml-2 items-center text-lg font-semibold text-[#378bba] mt-2 my-6 cursor-pointer  flex -mr-[100px]   
                    
                     ${pathName === item.Link && "text-[#0a77b2] "}
                    
                     `}
                    key={i}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.icon}{" "}
                    <p className="text-sm ">
                      {hoveredItem === item.name && item.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="w-full h-full  ">{children}</div>
      </div>
    </div>
  );
}

export default NavBar;
