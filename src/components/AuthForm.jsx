export default function AuthForm({ title, children }) {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      {children}
    </div>
  );
}