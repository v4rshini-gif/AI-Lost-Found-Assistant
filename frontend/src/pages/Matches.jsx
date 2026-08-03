import { useEffect, useState } from "react";
import { getMatches } from "../services/api";

function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const loadMatches = async () => {
      try {
        const res = await getMatches();
        setMatches(res.data.matches || []);
      } catch (err) {
        console.error(err);
        setMatches([]);
      }
    };

    loadMatches();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Matches</h2>

      {matches.length === 0 ? (
        <p className="text-slate-500">No matches found yet.</p>
      ) : (
        matches.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow mb-3">
            <h4 className="font-semibold">{item.lost_item}</h4>
            <p className="text-slate-600">Found at {item.found_location}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Matches;