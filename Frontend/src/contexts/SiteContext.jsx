import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useSiteSettings } from "../hooks/useBlog";


//axios.defaults.baseURL = import.meta.env.VITE_BASE_URL || "http://apis.mansusingh.in/blog";


const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [role, setRole] = useState("");
  const [input, setInput] = useState("");
  const [authLoading, setAuthLoading] = useState(false);


  const verifyToken = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/admin/verify`);
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

  const siteinfo = ()=>{
    const {data, isLoading, error} = useSiteSettings();
  }

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
