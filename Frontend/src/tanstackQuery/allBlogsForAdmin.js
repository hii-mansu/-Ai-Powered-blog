import axios from "axios";

export const allBlogsForAdmin = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/admin/allblogs`);
  return res.data;
};
