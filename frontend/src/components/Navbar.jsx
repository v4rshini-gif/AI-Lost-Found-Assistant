import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white border-b px-8 py-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-800">
        AI Lost & Found
      </h1>

      <div className="flex gap-6 text-sm text-gray-600">
        <Link to="/" className="hover:text-indigo-600">Login</Link>
        <Link to="/register" className="hover:text-indigo-600">Register</Link>
        <Link to="/dashboard" className="hover:text-indigo-600">Dashboard</Link>
      </div>
    </div>
  );
}

export default Navbar;