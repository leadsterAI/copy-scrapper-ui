// Logout.jsx
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      console.log("User logged out successfully");
      navigate("/login"); // Redirect to login page or any other page after logout
    } catch (error) {
      console.error("Error logging out:", error.message || error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1>Welcome!</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
