import { useState } from "react";
import { reportFoundItem } from "../services/api";

function FoundItem() {
  const [form, setForm] = useState({
    description: "",
    location: "",
    image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.description || !form.location) {
      alert("Please fill all required fields.");
      return;
    }

    const data = new FormData();
    data.append("description", form.description);
    data.append("location", form.location);

    if (form.image) {
      data.append("image", form.image);
    }

    try {
      const res = await reportFoundItem(data);
      alert(res.data?.message || "Found item submitted!");
    } catch (err) {
      console.error(err);
      alert("Could not report found item");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Report Found Item</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md max-w-lg"
      >
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

        <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FoundItem;