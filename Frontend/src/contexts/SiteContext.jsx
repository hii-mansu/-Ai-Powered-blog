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
  const [allBlogs, setAllBlogs] = useState([]);
  const [allPubBlogs, setAllPubBlogs] = useState([]);
  const [input, setInput] = useState("");

  const fetchAllBlogs = async () => {
    try {
      const { data } = await axios.get("/api/admin/allblogs");
      setAllBlogs(data.blogs);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchAllPublicBlog = async () => {
    try {
      const { data } = await axios.get("/api/blog/allblogs");
      if(data.success){
        setAllPubBlogs(data.blogs);
        console.log(data.blogs);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAllPublicBlog();
  }, []);

  if (localStorage.getItem("token")) {
    useEffect(() => {
      axios.defaults.headers.common["Authorization"] = `${localStorage.getItem('token')}`;
      fetchAllBlogs();
    }, [localStorage.getItem("token")]);
  }

  const value = {
    axios,
    token,
    setToken,
    allBlogs,
    setAllBlogs,
    allPubBlogs,
    setAllPubBlogs,
    input,
    setInput,
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export const useSiteContext = () => {
  return useContext(SiteContext);
};
