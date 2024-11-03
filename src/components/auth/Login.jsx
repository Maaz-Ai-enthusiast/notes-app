// src/components/auth/Login.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/slices/userSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login Attempt - Email:", email, "Password:", password ? "[PROVIDED]" : "[NOT PROVIDED]");

    if (!email || !password) {
      console.log("Email or password missing.");
      toast.error("Please enter both email and password.");
      return;
    }

    try {
      // Directly dispatch loginUser to handle login
      await dispatch(loginUser(email, password));
      navigate("/"); // Redirect to home on success
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded w-full">
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          New user?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
