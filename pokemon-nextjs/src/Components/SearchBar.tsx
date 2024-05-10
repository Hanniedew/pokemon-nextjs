function SearchBar() {
  return (
    <div className="flex justify-center">
      <div className="relative w-3/5 mt-8 flex items-center">
        {/* Search Input */}
        <input
          type="text"
          className="w-full h-12 px-8 py-3 border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
        />
   
        {/* Vertical Pipe */}
        <div className="absolute right-44 h-full flex items-center">
            <div className="h-full border-l border-gray-500"></div>
        </div>
        {/* First Icon */}
        <div className="absolute right-28 h-full flex items-center">
            <div className="flex items-center">
                <span>Filter</span>
            </div>
        </div>
        {/* Second Icon */}
        <div className="absolute right-8 h-full flex items-center">
            <div className="flex items-center">
                <span>Search</span>
            </div>
        </div>

      </div>
    </div>
  );
}

export default SearchBar;
