import React, { useState } from "react";
import { LoginResponse, useLoginMutation } from "../../api/authApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "./authSlice";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response: LoginResponse = await login({ email, password }).unwrap();
      console.log("response", response);

      //save to redux
      dispatch(
        setCredentials({
          token: response.token,
          user: {
            id: response.staffId,
            email: response.email,
            firstName: response.firstName,
            role: response.role,
          },
        })
      );

      // persisit token to localStorage
      localStorage.setItem("token", response.token);
      localStorage.setItem("role", response.role);

      //redirect based on role
      if (response.role === "SuperAdmin") {
        navigate("/dashboard");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.error("Login failed:", error);
      // TODO:  Handle error (e.g., show a TOAST notification)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-slate-700"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 w-full px-4 py-2 border rounded-md text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-regular"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-slate-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 w-full px-4 py-2 border rounded-md text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-regular"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition font-semiBold"
      >
        Sign In
      </button>

      {/* Optional footer */}
      <p className="text-sm text-center text-slate-500 font-regular">
        Forgot your password?{" "}
        <span className="text-emerald-600 hover:underline cursor-pointer">
          Reset
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
