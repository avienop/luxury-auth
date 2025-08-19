

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://os-project-server.vercel.app/auth/newuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 201) {
        alert("Registered successfully!");
        navigate("/login");
      } else {
        const data = await res.json();
        alert(data.error || "Registration failed");
      }
    } catch (err) {
      console.error("Register error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-blue-50 via-white to-green-50  shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-start items-center">
          <h1 className="text-2xl font-bold">Avien Bank</h1>
        </div>
      </nav>

      <div className="min-h-screen w-full bg-gradient-to-br from-blue-500 via-indigo-50 to-green-500 dark:from-[#020617] dark:via-[#0b1120] dark:to-[#0f172a] text-gray-800 dark:text-gray-100 pt-20 px-6 flex flex-col md:flex-row items-center justify-center gap-12 mx-auto">
       
        <div className="md:w-1/2 max-w-md text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-6">Join Avien Bank Today!</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Create your account and start managing your finances with confidence and ease.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Avien Bank offers secure, smart banking solutions tailored for your needs. Let’s build your financial future together.
          </p>
        </div>

        <div className="md:w-1/2 max-w-md bg-white dark:bg-[#1e293b] rounded-xl shadow-xl p-8 w-full">
          <h3 className="text-2xl font-semibold mb-6 text-center">Create Your Account</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Name"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f172a] dark:border-gray-600 dark:placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f172a] dark:border-gray-600 dark:placeholder-gray-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f172a] dark:border-gray-600 dark:placeholder-gray-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
            >
              Register
            </button>

            <div className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
