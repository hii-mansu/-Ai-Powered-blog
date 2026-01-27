import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [role, setRole] = useState("");
  const [allBlogs, setAllBlogs] = useState([]);
  const [allPubBlogs, setAllPubBlogs] = useState([]);
  const [input, setInput] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  const fetchAllPublicBlog = async () => {
    try {
      const { data } = await axios.get("/api/blog/allblogs");
      if (data.success) {
        setAllPubBlogs(data.blogs);
        console.log(data.blogs);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const verifyToken = async () => {
    try {
      const { data } = await axios.get("/api/admin/verify");
      if (data.role !== "Admin") {
        setRole("");
        localStorage.removeItem("token");
      }
      localStorage.setItem("token", data.token);
      setRole(data.role);
    } catch (error) {
      console.log(error);
      setRole("");
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    fetchAllPublicBlog();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios.defaults.headers.common["Authorization"] =
        `${localStorage.getItem("token")}`;
      verifyToken();
    }
  }, []);

  const value = {
    axios,
    token,
    setToken,
    allBlogs,
    setAllBlogs,
    allPubBlogs,
    setAllPubBlogs,
    authLoading,
    setAuthLoading,
    input,
    setInput,
    role,
    setRole,
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export const useSiteContext = () => {
  return useContext(SiteContext);
};
