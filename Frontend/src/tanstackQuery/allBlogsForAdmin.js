import axios from "axios";

export const allBlogsForAdmin = async () => {
  const res = await axios.get("/api/admin/allblogs");
  return res.data;
};
