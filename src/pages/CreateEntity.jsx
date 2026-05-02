import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function CreateEntity() {
  const [name, setName] = useState("");
  const [type, setType] = useState("person");

  const navigate = useNavigate();

  const create = async () => {
    const res = await API.post("/entities", { name, type });

    navigate(`/entity/${res.data.id}`);
  };

  return (
    <div>
      <h2>Créer une fiche</h2>

      <input
        placeholder="Nom"
        onChange={(e) => setName(e.target.value)}
      />

      <select onChange={(e) => setType(e.target.value)}>
        <option value="person">Personne</option>
        <option value="organization">Organisation</option>
      </select>

      <button onClick={create}>Créer</button>
    </div>
  );
}