import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
// import { set } from "react-hook-form";

function Logout() {
  const [AuthUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...AuthUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error.message);
      setTimeout(() => {}, 1000);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md hover:scale-110 cursor-pointer duration-200"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
