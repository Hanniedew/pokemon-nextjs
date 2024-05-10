"use client";
import Image from "next/image";
import FilterIcon from "../Icons/filter.svg";
import SearchIcon from "../Icons/search.svg";

const handleFilter = () => {
  console.log("Filter button clicked");
};

const handleSearch = () => {
  console.log("Search button clicked");
};

function SearchBar() {
  return (
    <div className="flex justify-center">
      <div className="relative w-4/5 md:w-3/5 mt-8 flex items-center">
        {/* Search Input */}
        <input
          type="text"
          className="w-full cursor-pointer text-lg h-12 px-8 py-3 pr-36 border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
        />
        {/* Vertical Pipe */}
        <div className="absolute right-28 sm:right-32 h-full flex items-center">
          <div className="h-full border-l border-gray-500"></div>
        </div>

        {/* First Icon */}
        <div className="absolute right-16 h-full flex items-center mr-2">
          <div className="flex items-center">
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
        <div className="absolute right-8 h-full flex items-center">
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
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
