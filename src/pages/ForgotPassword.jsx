

import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email.");

    setLoading(true);

    try {
      const response = await fetch('https://os-project-server.vercel.app/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Server Error: Unable to send OTP");
      }

      console.log("OTP sent:", data);
      alert("OTP sent to your email.");
    } catch (error) {
      console.error("Error sending OTP:", error.message);
      alert(error.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthForm title="Reset Password">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>
        <div className="text-sm text-center">
          <Link to="/login" className="text-blue-500">Back to Login</Link>
        </div>
      </form>
    </AuthForm>
  );
}
