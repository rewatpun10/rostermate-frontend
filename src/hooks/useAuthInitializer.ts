import { jwtDecode } from "jwt-decode";
import { use, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, setCredentials } from "../features/auth/authSlice";

export const useAuthInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    try {
      const decodedToken: any = jwtDecode(token);
      const expiry = decodedToken.exp * 1000;
      const currentTime = Date.now();

      if (currentTime >= expiry) {
        dispatch(logout());
        localStorage.removeItem("token");
        localStorage.removeItem("role");
      } else {
        dispatch(
          setCredentials({
            token,
            user: {
              id: decodedToken.staffId,
              email: decodedToken.email,
              firstName: decodedToken.firstName,
              role: decodedToken.role,
            },
          })
        );
        localStorage.setItem("role", decodedToken.role);
        localStorage.setItem("token", token);
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      dispatch(logout());
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    }
  }, [dispatch]);
};
