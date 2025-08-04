import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

export default function ChangePassword() {
  return (
    <AuthForm title="Change Password">
      <form className="space-y-4">
        <input type="password" placeholder="New Password" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded" />
        <button className="w-full bg-black text-white py-2 rounded">Change Password</button>
        <div className="text-sm text-center">
          <Link to="/login" className="text-blue-500">Back to Login</Link>
        </div>
      </form>
    </AuthForm>
  );
}