import React from "react";
import SuperAdminLayout from "../../components/layouts/SuperAdminLayout";

const SuperAdminDashboard = () => {
  return (
    <SuperAdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-textDark">Users Overview</h1>
        <p className="text-sm text-gray-500 mb-4">Dashboard / Users</p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white shadow rounded-lg p-4">
            <p className="text-gray-500 text-sm">Total Companies</p>
            <p className="text-xl font-bold text-textDark">12</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <p className="text-gray-500 text-sm">Total Users</p>
            <p className="text-xl font-bold text-textDark">234</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <p className="text-gray-500 text-sm">Active Admins</p>
            <p className="text-xl font-bold text-primary">16</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <p className="text-gray-500 text-sm">Weekly Growth</p>
            <p className="text-xl font-bold text-success">+3.5%</p>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { name: "Jane Cooper", role: "Admin", company: "ABC Corp" },
                { name: "John Doe", role: "Staff", company: "XYZ Inc." },
                { name: "Kristin Watson", role: "Admin", company: "Acme Ltd" },
                { name: "Robert Fox", role: "Staff", company: "QRS Solutions" },
              ].map((user, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-indigo-600 hover:text-indigo-900 font-medium">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default SuperAdminDashboard;
