import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogCardSkeleton = () => {
  return (
    <div className="w-70 h-fit bg-transparent relative border-violet-300 shadow-lg border-[1px] rounded-lg overflow-hidden">
      
      {/* Image Skeleton */}
      <Skeleton height={192} baseColor="#7E22CE1A" /> {/* 48 * 4 = 192px (h-48) */}

      <div className="p-5">
        
        {/* Title */}
        <Skeleton height={20} width="80%" baseColor="#7E22CE1A" />

        {/* Description */}
        <div className="mt-2">
          <Skeleton height={14} count={2} baseColor="#7E22CE1A" />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5">
          
          {/* Author */}
          <div className="flex items-center gap-3">
            <Skeleton circle width={36} height={36} baseColor="#7E22CE1A" />
            <div className="w-20">
              <Skeleton height={14} baseColor="#7E22CE1A" />
              <Skeleton height={12} width="70%" baseColor="#7E22CE1A" />
            </div>
          </div>

          {/* Date */}
          <div className="text-right w-16">
            <Skeleton height={12} baseColor="#7E22CE1A" />
            <Skeleton height={12} baseColor="#7E22CE1A" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
