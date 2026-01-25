import axios from "axios";

export const siteinfoForAdmin = async () => {
  const res = await axios.get("/api/admin/siteadminsettings");
  return res.data;
};
