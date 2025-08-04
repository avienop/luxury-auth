import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

export default function ForgotPassword() {
  return (
    <AuthForm title="Reset Password">
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <button className="w-full bg-black text-white py-2 rounded">Send Reset Link</button>
        <div className="text-sm text-center">
          <Link to="/login" className="text-blue-500">Back to Login</Link>
        </div>
      </form>
    </AuthForm>
  );
}