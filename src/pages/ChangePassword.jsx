
// import { useLocation, Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import AuthForm from '../components/AuthForm';

// export default function ChangePassword() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // State for inputs
//   const [email, setEmail] = useState(location.state?.email || '');
//   const [otp, setOtp] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !otp || !newPassword || !confirmPassword) {
//       return alert('All fields are required.');
//     }

//     if (newPassword !== confirmPassword) {
//       return alert("Passwords don't match.");
//     }

//     try {
//       const res = await fetch('https://os-project-server.vercel.app/auth/reset-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, otp, newPassword }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert(data.message || 'Password changed successfully!');
//         navigate('/login');
//       } else {
//         alert(data.message || data.error || 'Failed to reset password.');
//       }
//     } catch (err) {
//       console.error('Error resetting password:', err);
//       alert('Server error. Please try again.');
//     }
//   };

//   return (
//      <div className="bg-black">

//     <AuthForm title="Change Password">
//       <form className=" space-y-4" onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 border rounded "
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="OTP"
//           className="w-full p-2 border rounded"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="New Password"
//           className="w-full p-2 border rounded"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           className="w-full p-2 border rounded"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         <button className="w-full bg-black text-white py-2 rounded">
//           Change Password
//         </button>
//         <div className="text-sm text-center">
//           <Link to="/login" className="text-blue-500">
//             Back to Login
//           </Link>
//         </div>
//       </form>
//     </AuthForm>
//      </div>
//   );
// }
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ChangePassword() {
  const location = useLocation();
  const navigate = useNavigate();

  // State for inputs
  const [email, setEmail] = useState(location.state?.email || '');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !otp || !newPassword || !confirmPassword) {
      return alert('All fields are required.');
    }

    if (newPassword !== confirmPassword) {
      return alert("Passwords don't match.");
    }

    try {
      const res = await fetch('https://os-project-server.vercel.app/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp, newPassword }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message || 'Password changed successfully!');
        navigate('/login');
      } else {
        alert(data.message || data.error || 'Failed to reset password.');
      }
    } catch (err) {
      console.error('Error resetting password:', err);
      alert('Server error. Please try again.');
    }
  };

  return (
    <>
      {/* Same navbar as login */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-blue-50 via-white to-green-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-start items-center">
          <h1 className="text-2xl font-bold">Avien Bank</h1>
        </div>
      </nav>

      {/* Gradient background wrapper */}
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-500 via-white to-green-500 dark:from-[#020617] dark:via-[#0b1120] dark:to-[#0f172a] text-gray-800 dark:text-gray-100 pt-20 px-0 flex flex-col items-center justify-center">
        
        <div className="max-w-md w-full bg-white dark:bg-[#1e293b] rounded-xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Change Password</h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f172a] dark:border-gray-600 dark:placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="OTP"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f172a] dark:border-gray-600 dark:placeholder-gray-400"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f172a] dark:border-gray-600 dark:placeholder-gray-400"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f172a] dark:border-gray-600 dark:placeholder-gray-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
            >
              Change Password
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
