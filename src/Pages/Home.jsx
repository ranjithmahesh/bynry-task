import { IoIosSearch } from "react-icons/io";
import React, { Fragment, useState } from "react";
import NavBar from "../components/NavBar";
import { UserData } from "../lib/data";
import Modal from "../components/Modal";
import CardMap from "../components/CardMap";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchResults, setSearchResults] = useState(UserData);
  const [genderFilter, setGenderFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState(null);
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const results = UserData.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.city.toLowerCase().includes(value)
    );
    setSearchResults(results);
  };

  const handleGenderFilter = (event) => {
    const value = event.target.value;
    setGenderFilter(value);
    const results =
      value === "all"
        ? UserData
        : UserData.filter((item) => item.gender.toLowerCase() === value);
    setSearchResults(results);
  };

  return (
    <Fragment>
      <div className="w-screen h-screen p-4 bg-[#f4f5f6] ">
        <NavBar>
          <div className="p-2 w-full h-full ">
            <h1 className="p-5 font-bold text-3xl">User List</h1>
            <div className="bg-white px-2 p-2 flex  justify-end">
              <div className="flex gap-1 border rounded-md items-center px-2 mr-5">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search..."
                  className="    focus:outline-none"
                />
                <IoIosSearch />
              </div>
              <div className=" flex items-center gap-2">
                <h1> Sort By Gender:</h1>
                <select
                  value={genderFilter}
                  onChange={handleGenderFilter}
                  className="border rounded-md mr-5"
                >
                  <option value="all">All</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className=" flex mt-5  p-2 rounded-md font-bold">
              <h1 className=" flex-1">Name</h1>

              <h1 className=" flex-1  ">Gender</h1>
              <h1 className=" flex-1  ">E-Mail</h1>
              <h1 className=" flex-1 ">Mobile NO</h1>
              <h1 className=" flex-1 mr-[15px] ">Adress</h1>
            </div>

            <div className="h-[350px] overflow-y-scroll scrollbar-hidden">
              {searchResults.map((item, i) => (
                <div
                  key={i}
                  className={`flex p-2 rounded-md items-center mt-1 ${
                    i % 2 !== 0 ? "bg-[#f8f8f8]" : "bg-white"
                  }`}
                >
                  <div className="flex-1 flex gap-2 items-center">
                    <img
                      className="object-cover overflow-hidden w-8 h-8 rounded-full"
                      src={item.img}
                      alt=""
                    />
                    <h1>{item.name}</h1>
                  </div>
                  <h1 className="flex-1">{item.gender}</h1>
                  <h1 className="flex-1 ">{item.email}</h1>
                  <h1 className="flex-1">{item.mobile}</h1>
                  <div className="flex-1 flex justify-between ">
                    <h1>{item.city}</h1>
                    <button
                      className="hover:underline text-blue-500"
                      onClick={() => {
                        setShowModal(true);
                        setSelectedUser(item);
                      }}
                    >
                      View
                    </button>
                  </div>
                  {/* <h1 className="pr-2">in Map</h1> */}
                </div>
              ))}
            </div>
          </div>
        </NavBar>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <CardMap data={selectedUser} />
      </Modal>
    </Fragment>
  );
}

export default Home;
