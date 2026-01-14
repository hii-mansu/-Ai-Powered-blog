import React from "react";
import BlogCard from "../global/BlogCard";

const SearchResults = () => {
  return (
    <>
      <div className="flex bg-transparent flex-wrap items-center justify-center mt-7 mx-auto gap-4">
        {
            [1,1,1,1].map(()=>(
                /*{<div className="w-56 h-80 bg-purple-700 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300">

                </div>}*/
                <BlogCard />

            ))
        }
      </div>
    </>
  );
};

export default SearchResults;
