
// import { Link } from "react-router-dom";

// export default function Login() {
//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-[#0a0f1c] dark:to-[#111827] text-gray-800 dark:text-white shadow-md">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-start items-center">
//           <h1 className="text-2xl font-bold">Avien Bank</h1>
//         </div>
//       </nav>

//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-[#0a0f1c] dark:to-[#111827] text-gray-800 dark:text-white pt-20 px-6 flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
        
//         <div className="md:w-1/2 max-w-md text-center md:text-left">
//           <h2 className="text-4xl font-extrabold mb-6">Welcome Back!</h2>
//           <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
//             Securely access your accounts and manage your finances with ease.
//           </p>
//           <p className="text-gray-600 dark:text-gray-400">
//             Avien Bank offers smart banking solutions designed to make your life simpler and safer.
//           </p>
//         </div>

//         <div className="md:w-1/2 max-w-md bg-white dark:bg-[#1e293b] rounded-xl shadow-xl p-8 w-full">
//           <h3 className="text-2xl font-semibold mb-6 text-center">Login to your account</h3>
//           <form className="space-y-6">
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f172a] dark:border-gray-600 dark:placeholder-gray-400"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f172a] dark:border-gray-600 dark:placeholder-gray-400"
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
//             >
//               Login
//             </button>

//             <div className="text-sm text-center">
//               <Link to="/forgot-password" className="text-blue-500 hover:underline">
//                 Forgot Password?
//               </Link>
//             </div>
//             <div className="text-sm text-center">
//               Don&apos;t have an account?{" "}
//               <Link to="/register" className="text-blue-500 hover:underline">
//                 Register
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("https://os-project-server.vercel.app/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         localStorage.setItem("token", data.token);

//         const [, payloadBase64] = data.token.split(".");
//         const decodedPayload = JSON.parse(atob(payloadBase64));
//         localStorage.setItem("user", JSON.stringify(decodedPayload));

//         navigate("/dashboard");
//       } else {
//         alert(data.message || "Login failed");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("An error occurred while logging in.");
//     }
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-[#0a0f1c] dark:to-[#111827] text-gray-800 dark:text-white shadow-md">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-start items-center">
//           <h1 className="text-2xl font-bold">Avien Bank</h1>
//         </div>
//       </nav>

//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-[#0a0f1c] dark:to-[#111827] text-gray-800 dark:text-white pt-20 px-6 flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
        
//         <div className="md:w-1/2 max-w-md text-center md:text-left">
//           <h2 className="text-4xl font-extrabold mb-6">Welcome Back!</h2>
//           <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
//             Securely access your accounts and manage your finances with ease.
//           </p>
//           <p className="text-gray-600 dark:text-gray-400">
//             Avien Bank offers smart banking solutions designed to make your life simpler and safer.
//           </p>
//         </div>

//         <div className="md:w-1/2 max-w-md bg-white dark:bg-[#1e293b] rounded-xl shadow-xl p-8 w-full">
//           <h3 className="text-2xl font-semibold mb-6 text-center">Login to your account</h3>
//           <form className="space-y-6" onSubmit={handleLogin}>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f172a] dark:border-gray-600 dark:placeholder-gray-400"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f172a] dark:border-gray-600 dark:placeholder-gray-400"
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
//             >
//               Login
//             </button>

//             <div className="text-sm text-center">
//               <Link to="/forgot-password" className="text-blue-500 hover:underline">
//                 Forgot Password?
//               </Link>
//             </div>
//             <div className="text-sm text-center">
//               Don&apos;t have an account?{" "}
//               <Link to="/register" className="text-blue-500 hover:underline">
//                 Register
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);

        const [, payloadBase64] = data.token.split(".");
        const decodedPayload = JSON.parse(atob(payloadBase64));
        localStorage.setItem("user", JSON.stringify(decodedPayload));

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
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-[#0a0f1c] dark:to-[#111827] text-gray-800 dark:text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-start items-center">
          <h1 className="text-2xl font-bold">Avien Bank</h1>
        </div>
      </nav>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-[#0a0f1c] dark:to-[#111827] text-gray-800 dark:text-white pt-20 px-6 flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
        
        <div className="md:w-1/2 max-w-md text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-6">Welcome Back!</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Securely access your accounts and manage your finances with ease.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
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
