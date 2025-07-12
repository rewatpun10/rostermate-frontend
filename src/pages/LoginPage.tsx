import React from "react";
import LoginForm from "../features/auth/LoginForm";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-regular px-4 py-8">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Panel (Indigo) */}
        <div className="w-full md:w-1/2 bg-indigo-600 text-white flex flex-col justify-center items-center p-8">
          <h1 className="text-4xl font-bold mb-4 font-boldItalic">
            RosterMate
          </h1>
          <p className="text-lg font-regular text-center">
            Smart Rostering. Simplified.
          </p>
        </div>

        {/* Right Panel (Form) */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Let's Get You Signed In
          </h2>
          <p className="text-sm text-slate-500 mb-6">Sign in to your account</p>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
