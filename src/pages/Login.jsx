

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://os-project-server.vercel.app/auth/existinguser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);

        try {
          const [, payloadBase64] = data.token.split(".");
          const decodedPayload = JSON.parse(atob(payloadBase64));
          localStorage.setItem("userId", decodedPayload.userId);
        } catch (err) {
          console.error("Error decoding token payload", err);
        }

        navigate("/dashboard");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <>
      
<nav className="fixed max-h-full top-0 left-0 w-full z-50 bg-gradient-to-br from-blue-50 via-white to-green-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-start items-center">
          <h1 className="text-2xl font-bold">Avien Bank</h1>
        </div>
      </nav>

      <div className="min-h-screen w-full bg-gradient-to-br from-blue-500 via-white to-green-500 dark:from-[#020617] dark:via-[#0b1120] dark:to-[#0f172a] text-gray-800 dark:text-gray-100 pt-20 px-0 flex flex-col md:flex-row items-center justify-center gap-12  mx-auto">
        <div className="md:w-1/2 max-w-md text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-6">Welcome Back!</h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
            Securely access your accounts and manage your finances with ease.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Avien Bank offers smart banking solutions designed to make your life simpler and safer.
          </p>
        </div>

        <div className="md:w-1/2 max-w-md bg-white dark:bg-[#1e293b] rounded-xl shadow-xl p-8 w-full">
          <h3 className="text-2xl font-semibold mb-6 text-center">Login to your account</h3>
          <form className="space-y-6" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f172a] dark:border-gray-600 dark:placeholder-gray-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f172a] dark:border-gray-600 dark:placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
            >
              Login
            </button>

            <div className="text-sm text-center">
              <Link to="/forgot-password" className="text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <div className="text-sm text-center">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
