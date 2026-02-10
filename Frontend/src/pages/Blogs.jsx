import React from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "../components/global/BlogCard";
import BlogCardSkeleton from "../components/global/BlogCardSkeleton";
import { usePublicBlogs } from "../hooks/useBlog";

const Blogs = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = usePublicBlogs();

  const blogs = data?.blogs
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    ?.slice(0, 8) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-violet-600 hover:underline"
      >
        ← Back
      </button>

      {/* Heading Section */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl mt-5 font-bold bg-gradient-to-r from-violet-600 to-gray-400 text-transparent bg-clip-text">
          Latest Blog Posts
        </h1>
        <p className="mt-3 bg-gradient-to-r from-violet-700 to-gray-700 text-transparent bg-clip-text max-w-2xl mx-auto">
          Explore our most recent articles, insights, and updates curated to keep you informed and inspired.
        </p>
      </div>

      {/* Content Section */}
      {isLoading ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
        </div>
      ) : isError ? (
        <div className="text-center text-red-500">
          {error.message}
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No blog posts available.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Blogs;
