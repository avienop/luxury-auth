

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Banknote, CreditCard, PiggyBank, User, Settings, ClipboardList } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const loggedInUsername = localStorage.getItem("username");

        const res = await fetch("https://os-project-server.vercel.app/auth/users", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const users = await res.json();

        console.log("Fetched users data:", users);

        const matchedUser = users.find(user => user.username === loggedInUsername);

        if (matchedUser) {
          console.log("Matched user:", matchedUser);
          setUserData(matchedUser);
        } else {
          console.warn("No matching user found");
        }

      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUserData();
  }, []);

  const navOptions = [
    { title: "Accounts", icon: <Banknote className="w-12 h-12 text-green-600 dark:text-green-400" />, desc: "View your account balance and details", path: "/accounts" },
    { title: "Cards", icon: <CreditCard className="w-12 h-12 text-blue-600 dark:text-blue-400" />, desc: "Manage your credit and debit cards", path: "/cards" },
    { title: "Savings", icon: <PiggyBank className="w-12 h-12 text-yellow-600 dark:text-yellow-400" />, desc: "Track your savings and goals", path: "/savings" },
    { title: "Transactions", icon: <ClipboardList className="w-12 h-12 text-purple-600 dark:text-purple-400" />, desc: "Review recent transactions", path: "/transactions" },
    { title: "Profile", icon: <User className="w-12 h-12 text-pink-600 dark:text-pink-400" />, desc: "Update your personal info", path: "/profile" },
    { title: "Settings", icon: <Settings className="w-12 h-12 text-gray-600 dark:text-gray-300" />, desc: "Adjust your preferences", path: "/settings" },
  ];

  return (
    <>
      <Navbar onLogout={handleLogout} userData={userData} />

     <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-50 to-green-500 dark:from-[#020617] dark:via-[#0b1120] dark:to-[#0f172a] text-gray-800 dark:text-gray-100 pt-0 px-0 w-full">
  <header className="max-w-7xl mx-auto text-center mt-20 py-16">
    <h1 className="text-5xl font-extrabold mb-4">
      🏦 Welcome to Avien Bank
    </h1>
    {userData ? (
      <p className="text-lg text-gray-800 dark:text-white mb-4 font-bold">
        Logged in as <span className="font-bold">{userData.username}</span>
        {userData.email && ` (${userData.email})`}
      </p>
    ) : (
      <p>Loading user info...</p>
    )}
    <p className="text-xl text-gray-600 dark:text-white max-w-xl mx-auto">
      Secure, smart banking made simple. Navigate to the sections below to manage your finances.
    </p>
  </header>
  <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {navOptions.map(({ title, icon, desc, path }, i) => (
      <motion.div
        key={title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.15 }}
        className="bg-white dark:bg-[#1e293b] rounded-xl p-8 shadow-lg cursor-pointer hover:shadow-2xl transition"
        onClick={() => alert(`Navigate to: ${path}`)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            alert(`Navigate to: ${path}`);
          }
        }}
      >
        <div className="mb-4">{icon}</div>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-200">{desc}</p>
      </motion.div>
    ))}
  </section>
</div>

    </>
  );
};

export default Dashboard;
