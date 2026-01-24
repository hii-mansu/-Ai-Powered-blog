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
import Comments from "./pages/admin/Comments";
import AddBlog from "./pages/admin/AddBlog";
import { useSiteContext } from "./contexts/SiteContext";
import 'quill/dist/quill.snow.css'
import SiteInfo from "./pages/admin/siteSettingPages/SiteInfo";
import UiDetails from "./pages/admin/siteSettingPages/UiDetails";
import SiteMeta from "./pages/admin/siteSettingPages/SiteMeta";
import IntegrationsAndTools from "./pages/admin/siteSettingPages/IntegrationsAndTools";
import CustomScripts from "./pages/admin/siteSettingPages/Scripts";

const App = () => {
  const { pathname } = useLocation();
  const {token} = useSiteContext();

  const removeNav = pathname.startsWith("/admin");
  return (
    <div className="bg-linear-to-b from-[#D9D9FF] to-[#ffffff] h-full">
      {
        !removeNav && <Navbar />
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:blogId" element={<Article />} />
        <Route path="/admin" element={token ? <Layout /> : <AdminAuth />}>
          <Route index element={<DashBoard />} />
          <Route path="posts" element={<AllBlogPosts />} />
          <Route path="drafts" element={<Drafts />} />
          <Route path="comments" element={<Comments />} />
          <Route path="write" element={<AddBlog />} />


          <Route path="site-info" element={<SiteInfo />} />
          <Route path="ui-details" element={<UiDetails />} />
          <Route path="site-meta" element={<SiteMeta />} />
          <Route path="tools" element={<IntegrationsAndTools />} />
          <Route path="scripts" element={<CustomScripts />} />
        </Route>
      </Routes>
      {
        !removeNav && <Footer />
      }
    </div>
  );
};

export default App;
