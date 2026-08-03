import { useState } from "react";
import { getToken } from "../utils/auth";

function LostItemForm() {
  const [form, setForm] = useState({});

  const handleSubmit = async () => {
    const token = getToken();

    const data = new FormData();
    Object.keys(form).forEach((key) => {
      data.append(key, form[key]);
    });

    await fetch("http://127.0.0.1:8000/lost-item", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    alert("Lost item submitted");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Report Lost Item</h2>

      <input placeholder="Item Name" className="input" onChange={(e)=>setForm({...form,item_name:e.target.value})}/>
      <input placeholder="Category" className="input" onChange={(e)=>setForm({...form,category:e.target.value})}/>
      <input placeholder="Description" className="input" onChange={(e)=>setForm({...form,description:e.target.value})}/>
      <input type="date" className="input" onChange={(e)=>setForm({...form,date_lost:e.target.value})}/>
      <input placeholder="Location" className="input" onChange={(e)=>setForm({...form,location:e.target.value})}/>
      <input type="file" className="input" onChange={(e)=>setForm({...form,image:e.target.files[0]})}/>

      <button onClick={handleSubmit} className="btn">
        Submit
      </button>
    </div>
  );
}

export default LostItemForm;