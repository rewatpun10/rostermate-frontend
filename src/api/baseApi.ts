import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});
