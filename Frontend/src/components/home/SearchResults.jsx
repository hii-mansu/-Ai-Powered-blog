import React from "react";
import BlogCard from "../global/BlogCard";
import { useSiteContext } from "../../contexts/SiteContext";
import { usePublicBlogs } from "../../hooks/useBlog";
import BlogCardSkeleton from "../global/BlogCardSkeleton";

const SearchResults = () => {
  const { input } = useSiteContext();
  const { data, isLoading, isError, error } = usePublicBlogs();

  if (isLoading) {
    return (
      <div className="flex flex-wrap justify-center mt-7 gap-4">
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </div>
    );
  }

  if (isError) {
    return <p className="text-center mt-10 text-red-500">{error.message}</p>;
  }

  const blogs = data?.blogs || [];

  const filteredBlogs =
    input.trim() === ""
      ? blogs
      : blogs.filter((blog) =>
          blog.title.toLowerCase().includes(input.toLowerCase())
        );

  return (
    <div className="flex bg-transparent flex-wrap items-center justify-center mt-7 mx-auto gap-4">
      {filteredBlogs.length > 0 ? (
        filteredBlogs.slice(0,3).map((item) => (
          <BlogCard key={item._id} blog={item} />
        ))
      ) : (
        <p className="text-gray-500 mt-10">No blogs found</p>
      )}
    </div>
  );
};

export default SearchResults;
