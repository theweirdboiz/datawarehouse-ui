import React from "react";

const Search = () => {
  const contentSearch =
    "content__search p-4 flex items-center gap-x-3 flex-1 rounded-xl shadow-lg";
  return (
    <div className={contentSearch}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        className="w-full bg-transparent"
        type="text"
        placeholder="Search location here"
      />
    </div>
  );
};

export default Search;
