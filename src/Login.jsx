// Login.jsx
import "./App.css";
import { FcGoogle } from "react-icons/fc"; // Go

function Login({ handleLogin }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <button
        onClick={handleLogin}
        className="flex items-center px-4 py-2 space-x-3 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg shadow-md transition-all duration-300 ease-in-out"
      >
        <FcGoogle className="text-xl" /> {/* Google icon */}
        <span>Sign In With Google</span>
      </button>
    </div>
  );
}

export default Login;
