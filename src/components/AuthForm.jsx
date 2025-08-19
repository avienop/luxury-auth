export default function AuthForm({ title, children }) {
  return (
    <div className="dark:bg-[#1e293b] rounded-xl shadow-xl p-8 w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      {children}
    </div>
  );
}