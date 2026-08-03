import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getDashboardData } from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
    lost_count: 0,
    found_count: 0,
    match_count: 0,
    recent_activity: [],
  });

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const res = await getDashboardData();
        setStats(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    loadDashboard();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-slate-500">Lost Items</p>
            <h2 className="text-2xl font-bold">{stats.lost_count}</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-slate-500">Found Items</p>
            <h2 className="text-2xl font-bold">{stats.found_count}</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-slate-500">Matches</p>
            <h2 className="text-2xl font-bold">{stats.match_count}</h2>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

          {stats.recent_activity.length === 0 ? (
            <p className="text-slate-500">No recent activity yet.</p>
          ) : (
            <ul className="space-y-2 text-slate-600">
              {stats.recent_activity.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;