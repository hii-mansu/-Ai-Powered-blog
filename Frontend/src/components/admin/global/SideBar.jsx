import React, { useState } from "react";
import {
  Bell,
  Book,
  LayoutDashboard,
  MessageCircle,
  Plus,
  Ticket,
  ChevronDown,
  Menu,
  X,
  Info,
  Globe,
  BotIcon,
  PaintBucket,
  Brain,
  User,
  Code,
  ToolCase,
  BookLock,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`${settingsOpen} && min-w-64`}>
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white flex items-center justify-between p-4">
        <h1 className="font-semibold text-violet-700">Admin Panel</h1>
        <div className="flex flex-row gap-10 items-center justify-center">
          <button className="text-violet-700">
          <User />
        </button>
        <button onClick={() => setOpen(true)} className="text-violet-700">
          <Menu />
        </button>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-violet-200 border-b">
          <h2 className="text-lg font-semibold text-violet-700">Dashboard</h2>
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-2 text-sm">
          <Link to="/admin/"><MenuItem icon={<LayoutDashboard />} label="Dashboard" /></Link>

          <p className="text-xs text-violet-700 mt-4">Basic</p>

          <Link to="posts"><MenuItem icon={<Book />} label="Blog Posts" /></Link>
          <Link to="write" className="w-fit relative">
            <MenuItem icon={<Plus />} label="Write Blog" />
            <div className="bg-linear-to-b from-pink-500 to-pink-300 rounded-xl px-1.5 py-0.5 flex flex-row gap-1 items-center absolute top-1 right-0 -mt-2">
              <Brain
                size={11}
                className=" text-white"
              />
              <span className=" text-white text-xs">
                Ai Powerd
              </span>
            </div>
          </Link>
          <Link to="drafts"><MenuItem icon={<PaintBucket />} label="Drafts" /></Link>
          <Link to="comments"><MenuItem icon={<MessageCircle />} label="Comments" /></Link>
          <Link to="tickets"><MenuItem icon={<Ticket />} label="Tickets" /></Link>
          <Link to="subscribers"><MenuItem icon={<Bell />} label="Subscribers" /></Link>

          <p className="text-xs text-violet-700 mt-4">Site Settings</p>

          <Link to="site-info"><MenuItem icon={<Info />} label="Site Info" /></Link>
          <Link to="ui-details"><MenuItem icon={<BookLock />} label="UI Details" /></Link>
          <Link to="site-meta"><MenuItem icon={<Globe />} label="Site Meta" /></Link>
          <Link to="tools"><MenuItem icon={<ToolCase />} label="Tools" /></Link>
          <Link to="scripts"><MenuItem icon={<Code />} label="Custom Scripts" /></Link>

          {/* Sub Menu 
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-violet-50"
          >
            <span className="flex items-center gap-2">
              <LayoutDashboard size={16} className="text-violet-700" />
              Site Settings
            </span>
            <ChevronDown
              size={16}
              className={`transition ${settingsOpen ? "rotate-180" : ""}`}
            />
          </button>

          {settingsOpen && (
            <div className="ml-6 space-y-1">
              <SubItem label="Pie Charts" />
              <SubItem label="Line Charts" />
            </div>
          )}
          */}
        </nav>
      </aside>
    </div>
  );
};

/* Reusable Components */

const MenuItem = ({ icon, label }) => (
  <button className="w-full flex items-center cursor-pointer hover:font-semibold hover:text-violet-600 gap-2 px-3 py-2 my-2 rounded hover:bg-violet-50 text-left">
    {React.cloneElement(icon, { size: 16, className: "text-violet-700" })}
    {label}
  </button>
);

const SubItem = ({ label }) => (
  <button className="w-full text-left px-3 py-1 rounded hover:bg-violet-100">
    {label}
  </button>
);

export default SideBar;
