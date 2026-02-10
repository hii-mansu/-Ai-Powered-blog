import { useQuery } from "@tanstack/react-query";
import { blogApi } from "../apis/blogs";

export const usePublicBlogs = () => {
  return useQuery({
    queryKey: ["public-blogs"],
    queryFn: blogApi.getPublicBlogs,
    staleTime: 1000 * 60 * 5,
  });
};

export const useAllBlogs = () => {
  return useQuery({
    queryKey: ["allBlogsForAdmin"],
    queryFn: blogApi.getAllBlogs,
    refetchOnWindowFocus: false,
  });
};

export const useSiteSettings = () => {
  return useQuery({
    queryKey: ["siteinfoForAdmin"],
    queryFn: blogApi.getSiteSettings,
    refetchOnWindowFocus: false,
  });
};
