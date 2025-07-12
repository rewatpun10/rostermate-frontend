// src/layouts/SuperAdminLayout.tsx
import React, { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  Users,
  LogOut,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const navItems = [
  { name: "Home", icon: LayoutDashboard, path: "/superadmin/dashboard" },
  { name: "Companies", icon: Building2, path: "/superadmin/companies" },
  { name: "Users", icon: Users, path: "/superadmin/users" },
  { name: "Settings", icon: Settings, path: "/superadmin/settings" },
];

const SuperAdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col font-regular bg-background text-textDark">
      {/* Top bar */}
      <div className="bg-primary text-white px-4 py-3 flex justify-between items-center md:hidden">
        <div className="text-xl font-bold">RosterMate</div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Main content wrapper */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`bg-primary text-white w-64 p-4 space-y-6 transition-transform transform md:translate-x-0 z-50
          fixed md:static top-0 left-0 h-full md:h-auto md:flex-shrink-0
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="hidden md:block text-2xl font-bold mb-6">
            RosterMate
          </div>

          <nav className="space-y-2">
            {navItems.map(({ name, icon: Icon, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-2 rounded-lg transition
                   hover:bg-white/10 ${
                     isActive ? "bg-white/10 font-semibold" : ""
                   }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </NavLink>
            ))}
          </nav>

          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-red-300 hover:bg-white/10"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-25 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Page Content */}
        <main className="flex-1 p-4 mt-4 md:mt-0 overflow-x-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SuperAdminLayout;
