const token = localStorage.getItem("token");

export const axiosConfig = {
  headers: {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
};