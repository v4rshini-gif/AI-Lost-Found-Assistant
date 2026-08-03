import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form);
      localStorage.setItem("token", res.data.access_token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg">
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-slate-600">
          New here? <Link to="/register" className="text-indigo-600">Create account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;