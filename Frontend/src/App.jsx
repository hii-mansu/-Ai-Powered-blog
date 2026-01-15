import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import Layout from "./pages/admin/Layout";
import DashBoard from "./pages/admin/DashBoard";
import AdminAuth from "./components/admin/global/Auth";
import AllBlogPosts from "./pages/admin/AllBlogPosts";
import Drafts from "./pages/admin/Drafts";

const App = () => {
  const { pathname } = useLocation();

  const removeNav = pathname.startsWith("/admin");
  return (
    <div className="bg-linear-to-b from-[#D9D9FF] to-[#F8F3F9]">
      {
        !removeNav && <Navbar />
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/admin" element={true ? <Layout /> : <AdminAuth />}>
          <Route index element={<DashBoard />} />
          <Route path="posts" element={<AllBlogPosts />} />
          <Route path="drafts" element={<Drafts />} />
        </Route>
      </Routes>
      {
        !removeNav && <Footer />
      }
    </div>
  );
};

export default App;
