// import { Link } from 'react-router-dom';
// import AuthForm from '../components/AuthForm';

// export default function ChangePassword() {
//   return (
//     <AuthForm title="Change Password">
//       <form className="space-y-4">
//         <input type="password" placeholder="New Password" className="w-full p-2 border rounded" />
//         <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded" />
//         <button className="w-full bg-black text-white py-2 rounded">Change Password</button>
//         <div className="text-sm text-center">
//           <Link to="/login" className="text-blue-500">Back to Login</Link>
//         </div>
//       </form>
//     </AuthForm>
//   );
// }


import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthForm from '../components/AuthForm';

export default function ChangePassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Get email passed from ForgotPassword page
  const email = location.state?.email || '';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp || !newPassword || !confirmPassword) {
      return alert('All fields are required.');
    }

    if (newPassword !== confirmPassword) {
      return alert("Passwords don't match.");
    }

    try {
      const res = await fetch('https://os-project-server.vercel.app/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp, newPassword }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message || 'Password changed successfully!');
        navigate('/login');
      } else {
        alert(data.message || 'Failed to reset password.');
      }
    } catch (err) {
      console.error('Error resetting password:', err);
      alert('Server error. Please try again.');
    }
  };

  return (
    <AuthForm title="Change Password">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="OTP"
          className="w-full p-2 border rounded"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-2 border rounded"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border rounded"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="w-full bg-black text-white py-2 rounded">
          Change Password
        </button>
        <div className="text-sm text-center">
          <Link to="/login" className="text-blue-500">Back to Login</Link>
        </div>
      </form>
    </AuthForm>
  );
}
