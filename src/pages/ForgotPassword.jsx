// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import AuthForm from '../components/AuthForm';

// export default function ForgotPassword() {
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email) return alert("Please enter your email.");

//     setLoading(true);

//     try {
//       const response = await fetch('https://os-project-server.vercel.app/auth/send-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: email.trim() }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Server Error: Unable to send OTP");
//       }

//       console.log("OTP sent:", data);
//       alert("OTP sent to your email.");

//       // ✅ Redirect to ChangePassword page and pass email
//       navigate('/change-password', { state: { email } });

//     } catch (error) {
//       console.error("Error sending OTP:", error.message);
//       alert(error.message || "Failed to send OTP.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
    
//     <AuthForm title="Reset Password">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 border rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="w-full bg-black text-white py-2 rounded"
//           disabled={loading}
//         >
//           {loading ? 'Sending...' : 'Send OTP'}
//         </button>
//         <div className="text-sm text-center">
//           <Link to="/login" className="text-blue-500">Back to Login</Link>
//         </div>
//       </form>
//     </AuthForm>
//   );
// }
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email.");

    setLoading(true);

    try {
      const response = await fetch('https://os-project-server.vercel.app/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Server Error: Unable to send OTP");
      }

      alert("OTP sent to your email.");
      console.log("OTP sent:", data);

      // ✅ Redirect to ChangePassword page and pass email
      navigate('/change-password', { state: { email } });

    } catch (error) {
      console.error("Error sending OTP:", error.message);
      alert(error.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
    
  };

  return (
    <>
      {/* ✅ Same Navbar as Login */}
      <nav className="fixed max-h-full top-0 left-0 w-full z-50 bg-gradient-to-br from-blue-50 via-white to-green-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-start items-center">
          <h1 className="text-2xl font-bold">Avien Bank</h1>
        </div>
      </nav>

      {/* ✅ Same gradient background and layout */}
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-500 via-white to-green-500 dark:from-[#020617] dark:via-[#0b1120] dark:to-[#0f172a] text-gray-800 dark:text-gray-100 pt-20 px-0 flex flex-col md:flex-row items-center justify-center gap-12mx-auto">
        {/* Left section */}
        <div className="md:w-1/2 max-w-md text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-6">Reset Your Password</h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
            Enter your registered email and we’ll send you an OTP to reset your password.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Make sure to check your inbox (and spam folder) for the OTP email.
          </p>
        </div>

        {/* Right section (form card) */}
        <div className="md:w-1/2 max-w-md bg-white dark:bg-[#1e293b] rounded-xl shadow-xl p-8 w-full">
          <h3 className="text-2xl font-semibold mb-6 text-center">Forgot Password</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f172a] dark:border-gray-600 dark:placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send OTP'}
            </button>

            <div className="text-sm text-center">
              <Link to="/login" className="text-blue-500 hover:underline">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
