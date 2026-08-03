import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded-lg transition ${
      location.pathname === path
        ? "bg-indigo-100 text-indigo-600"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <div className="w-64 h-screen bg-white border-r p-6 fixed">
      <h1 className="text-xl font-bold text-indigo-600 mb-10">AI Lost & Found</h1>

      <nav className="flex flex-col gap-3">
        <Link to="/dashboard" className={linkClass("/dashboard")}>📊 Dashboard</Link>
        <Link to="/lost" className={linkClass("/lost")}>🔍 Report Lost</Link>
        <Link to="/found" className={linkClass("/found")}>📦 Report Found</Link>
        <Link to="/matches" className={linkClass("/matches")}>🔗 Matches</Link>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
          className="mt-10 text-left text-red-500"
        >
          Logout
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;