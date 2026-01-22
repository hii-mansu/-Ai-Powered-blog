import React, { useEffect, useState } from "react";
import BlogCard from "../global/BlogCard";
import { useSiteContext } from "../../contexts/SiteContext";

const SearchResults = () => {

  const {allPubBlogs,input, setInput} = useSiteContext();

  const [searchFilteredBlog, setSearchFilteredBlog] = useState(allPubBlogs);


  const searchFilterFn = ()=>{
    if(input===''){
      setSearchFilteredBlog(allPubBlogs);
    }
    setSearchFilteredBlog(allPubBlogs.filter((blog)=>blog.title.toLowerCase().includes(input.toLowerCase())));
  }

  useEffect(()=>{
    searchFilterFn();
  },[input, allPubBlogs])


  return (
    <>
      <div className="flex bg-transparent flex-wrap items-center justify-center mt-7 mx-auto gap-4">
        {
            searchFilteredBlog.map(( item, index )=>
               ( <BlogCard blog={item}/>)
            )
        }
      </div>
    </>
  );
};

export default SearchResults;
