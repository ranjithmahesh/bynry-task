import { FaRegIdCard } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { SlGraduation } from "react-icons/sl";

import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import GoogleMap from "./GoogleMap";

function CardMap({ data }) {
  console.log(data);
  return (
    <div className="flex ">
      <div className="flex-1 p-5   bg-transparent bg-opacity-25 bg-slate-400 ">
        <div className="flex gap-5 ">
          <div>
            <img
              className="object-cover overflow-hidden w-[150px] aspect-square"
              src={data.img}
              alt=""
            />
          </div>
          <div className="w-full px-3">
            <h1 className="text-3xl font-semibold">{data.name}</h1>
            <div className="flex gap-2 justify-between">
              <p className="text-sm">{data.occupation}</p>
              <p className="text-sm flex items-center gap-1">
                <RxPerson />
                {data.gender}
              </p>
            </div>

            <div className="flex justify-between mt-5 items-center  ">
              <div className="flex  items-center">
                <CiLocationOn className="font-bold " /> {data.city}
              </div>
              <div className="flex gap-2 items-center">
                <FiPhone />
                {data.mobile}
              </div>
            </div>
            {/* // */}
            <div className="flex justify-between mt-5 items-center ">
              <div className="flex gap-1  items-center">
                <MdOutlineMailOutline />
                {data.email}
              </div>
              <div className="flex gap-2 items-center"></div>
            </div>
            {/* // */}
            <div className="flex gap-2  mt-5">
              <SlGraduation className="mt-1" />
              {data.education}
            </div>
            <div className="flex gap-2  mt-5">
              <FaRegIdCard className="text-[100px] -mt-[37px] " />
              <span className="line-clamp-3">{data.description}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-red-300 overflow-x-clip rounded-lg">
        <GoogleMap center={data.coordinates} />
      </div>
    </div>
  );
}

export default CardMap;
