import { useState } from "react";
import { reportLostItem } from "../services/api";

function LostItem() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    location: "",
    image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.description || !form.location) {
      alert("Please fill all required fields.");
      return;
    }

    const data = new FormData();
    data.append("name", form.name);
    data.append("description", form.description);
    data.append("location", form.location);

    if (form.image) {
      data.append("image", form.image);
    }

    try {
      const res = await reportLostItem(data);
      alert(res.data?.message || "Lost item reported!");
    } catch (err) {
      console.error(err);
      alert("Could not report lost item");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Report Lost Item</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md max-w-lg"
      >
        <input
          placeholder="Item Name"
          className="w-full p-3 mb-4 border rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <textarea
          placeholder="Description"
          className="w-full p-3 mb-4 border rounded"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          placeholder="Location"
          className="w-full p-3 mb-4 border rounded"
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <input
          type="file"
          className="w-full p-3 mb-4 border rounded"
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
        />

        <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LostItem;