
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ onLogout }) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  const navItems = [
    "Accounts",
    "Cards",
    "Savings",
    "Transactions",
    "Profile",
    "Settings",
    "Logout",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Avien Bank</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <ul
          className={`md:flex gap-8 items-center ${
            open ? "block" : "hidden"
          } md:block absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0`}
        >
          {navItems.map((item) => (
            <li
              key={item}
              className="py-2 md:py-0 hover:text-blue-500 cursor-pointer"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (item === "Logout") {
                    onLogout();
                  } else {
                    alert(`Navigate to: ${item}`);
                  }
                }
              }}
              onClick={() => {
                if (item === "Logout") {
                  onLogout();
                } else {
                  alert(`Navigate to: ${item}`);
                }
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
