import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
