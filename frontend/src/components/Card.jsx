function Card({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold text-gray-800 mt-2">
        {value}
      </h2>
    </div>
  );
}

export default Card;