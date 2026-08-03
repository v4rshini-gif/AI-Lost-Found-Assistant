function Topbar() {
  return (
    <div className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold text-gray-800">
        Dashboard
      </h2>

      <div className="text-sm text-gray-600">
        Welcome, User 👋
      </div>
    </div>
  );
}

export default Topbar;