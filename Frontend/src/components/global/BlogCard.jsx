import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({blog}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/article/${blog._id}`)} className="w-70 cursor-pointer z-2 h-fit bg-transparent relative border-violet-300 shadow-lg  border-[1px] rounded-lg overflow-hidden object-cover hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      {
        <img
        src={blog.image || "https://images.unsplash.com/photo-1506744038136-46273834b3fb"}
        alt="Graphic Design"
        className="w-full h-48 object-cover"
      />
      }

      <div className="w-[40%] h-[30%] -z-1 bg-pink-500/30 blur-3xl absolute top-40 left-0"/>
      <div className="w-[40%] h-[30%] -z-1 bg-violet-700/30 blur-3xl absolute bottom-0 right-0"/>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-900 leading-snug">
          {blog.title}
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          {blog.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5">
          {/* Author */}
          <div className="flex items-center gap-3">
            <img
              src={blog.authorImage || "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"}
              alt="Author"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">
                {"Admin"}
              </p>
              <p className="text-xs text-gray-500">{"Author"}</p>
            </div>
          </div>

          {/* Date */}
          <div className="text-right">
            <p className="text-xs text-gray-400 font-medium">Date</p>
            <p className="text-xs text-gray-500">{blog.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
