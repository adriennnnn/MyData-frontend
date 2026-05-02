import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    API.get("/entities").then((res) => setEntities(res.data));
  }, []);

  return (
    <div>
      <h1>Mes fiches</h1>

      {entities.map((e) => (
        <div key={e.id} style={{
          background: "#1e293b",
          padding: 15,
          margin: "10px 0",
          borderRadius: 10
        }}>
          <h3>{e.name}</h3>
          <p>{e.type}</p>

          <Link to={`/entity/${e.id}`}>Voir</Link>
        </div>
      ))}
    </div>
  );
}