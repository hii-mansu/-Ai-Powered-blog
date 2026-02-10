import axios from "axios";

export const siteinfoForAdmin = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/admin/siteadminsettings`);
  return res.data;
};
