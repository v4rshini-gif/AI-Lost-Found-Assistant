import { useState } from "react";
import { reportLostItem } from "../services/api";

function LostItem() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await reportLostItem(form);
      alert("Lost item reported successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Error submitting item");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Report Lost Item</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Item name"
          className="w-full p-3 border rounded-lg"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          placeholder="Description"
          className="w-full p-3 border rounded-lg"
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full p-3 border rounded-lg"
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LostItem;