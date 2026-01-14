import React from "react";

const BlogCard = () => {
  return (
    <div className="w-70 z-2 h-fit bg-transparent relative border-violet-300 shadow-lg  border-[1px] rounded-lg overflow-hidden object-cover hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      {
        /*<img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="Graphic Design"
        className="w-full h-48 object-cover"
      />*/
        <div className="w-full h-48 bg-violet-700"></div>
      }

      <div className="w-[40%] h-[30%] -z-1 bg-pink-500/30 blur-3xl absolute top-40 left-0"/>
      <div className="w-[40%] h-[30%] -z-1 bg-violet-700/30 blur-3xl absolute bottom-0 right-0"/>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-900 leading-snug">
          Top Graphic Design Courses Online
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consec adipiscing elit. In pretium
          venenatis sed finibus orci imperdiet et.
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5">
          {/* Author */}
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Author"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">
                By Samuyl Joshi
              </p>
              <p className="text-xs text-gray-500">Graphics Designer</p>
            </div>
          </div>

          {/* Date */}
          <div className="text-right">
            <p className="text-xs text-gray-400 font-medium">Date</p>
            <p className="text-xs text-gray-500">15 April, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
