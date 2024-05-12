"use client";
import Image from "next/image";
import FilterIcon from "../Icons/filter.svg";
import SearchIcon from "../Icons/search.svg";
import FilterModal from "./FilterModal";
import { useState } from "react";

function SearchBar({
  searchValue,
  setSearchValue,
}: {
  searchValue: String;
  setSearchValue: (value: string) => void;
}) {
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const handleFilter = () => {
    console.log("Filter button clicked");
    setIsFilterClicked(!isFilterClicked);
  };

  // const handleSearch = () => {
  //   console.log("Search button clicked");
  //   console.log("Search value: " + searchValue);
  // };

  return (
    <div className="flex justify-center">
      {/* Container for the whole search UI */}
      <div className="flex flex-col w-4/5 items-center">
        {/* Search portion */}
        <div className="relative w-full md:w-3/5 mt-8 flex ">
          {/* Search Input */}
          <input
            type="text"
            className="w-full text-lg h-12 px-8 py-3 pr-36 border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {/* Vertical Pipe */}
          <div className="absolute right-28 sm:right-32 h-full flex items-center">
            <div className="h-full border-l border-gray-500"></div>
          </div>

          {/* First Icon */}
          <div className="absolute right-12 h-full flex items-center mr-2  cursor-pointer">
            <div className="flex items-center">
              {/* <FilterModal /> */}
              <button onClick={handleFilter}>
                <Image
                  src={FilterIcon}
                  width={25}
                  height={25}
                  alt="Filter Icon"
                />
              </button>
            </div>
          </div>
          {/* Second Icon */}
          {/* <div className="absolute right-8 h-full flex items-center  cursor-pointer">
            <div className="flex items-center">
              <button onClick={handleSearch}>
                <Image
                  src={SearchIcon}
                  width={25}
                  height={25}
                  alt="Search Icon"
                />
              </button>
            </div>
          </div> */}
        </div>
        {/* Filter Modal */}
        {isFilterClicked && <FilterModal />}
      </div>
    </div>
  );
}

export default SearchBar;
