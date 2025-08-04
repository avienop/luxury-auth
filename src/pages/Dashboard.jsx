
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Banknote, CreditCard, PiggyBank, User, Settings, ClipboardList } from "lucide-react";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const navOptions = [
    {
      title: "Accounts",
      icon: <Banknote className="w-12 h-12 text-green-600" />,
      desc: "View your account balance and details",
      path: "/accounts",
    },
    {
      title: "Cards",
      icon: <CreditCard className="w-12 h-12 text-blue-600" />,
      desc: "Manage your credit and debit cards",
      path: "/cards",
    },
    {
      title: "Savings",
      icon: <PiggyBank className="w-12 h-12 text-yellow-600" />,
      desc: "Track your savings and goals",
      path: "/savings",
    },
    {
      title: "Transactions",
      icon: <ClipboardList className="w-12 h-12 text-purple-600" />,
      desc: "Review recent transactions",
      path: "/transactions",
    },
    {
      title: "Profile",
      icon: <User className="w-12 h-12 text-pink-600" />,
      desc: "Update your personal info",
      path: "/profile",
    },
    {
      title: "Settings",
      icon: <Settings className="w-12 h-12 text-gray-600" />,
      desc: "Adjust your preferences",
      path: "/settings",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-[#0a0f1c] dark:to-[#111827] text-gray-800 dark:text-white transition-all duration-500 ease-in-out pt-20 px-6">
       
        <header className="max-w-4xl mx-auto text-center py-16">
          <h1 className="text-5xl font-extrabold mb-4">🏦 Welcome to Avien Bank</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
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
              onClick={() => {
                alert(`Navigate to: ${path}`); // placeholder
              }}
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
              <p className="text-gray-600 dark:text-gray-300">{desc}</p>
            </motion.div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Dashboard;
