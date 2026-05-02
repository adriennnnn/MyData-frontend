import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

export default function EntityPage() {
  const { id } = useParams();

  const [entity, setEntity] = useState(null);
  const [attributes, setAttributes] = useState([]);
  const [events, setEvents] = useState([]);

  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");
  const [event, setEvent] = useState("");

  useEffect(() => {
    API.get(`/entities/${id}`).then(res => setEntity(res.data));
    API.get(`/attributes/${id}`).then(res => setAttributes(res.data));
    API.get(`/events/${id}`).then(res => setEvents(res.data));
  }, [id]);

  const addAttribute = async () => {
    await API.post("/attributes", {
      entity_id: id,
      label,
      value,
      tags: ""
    });

    location.reload();
  };

  const addEvent = async () => {
    await API.post("/events", {
      entity_id: id,
      description: event
    });

    location.reload();
  };

  return (
    <div>
      <h1>{entity?.name}</h1>
      <p>{entity?.type}</p>

      {/* Résumé */}
      <div style={{ background: "#0f172a", padding: 15, borderRadius: 10 }}>
        <h3>Résumé</h3>
        <p>Infos rapides ici</p>
      </div>

      {/* Attributs */}
      <h3>Attributs</h3>
      {attributes.map(a => (
        <div key={a.id}>
          <b>{a.label}</b> : {a.value}
        </div>
      ))}

      <input placeholder="Label" onChange={e => setLabel(e.target.value)} />
      <input placeholder="Valeur" onChange={e => setValue(e.target.value)} />
      <button onClick={addAttribute}>Ajouter</button>

      {/* Timeline */}
      <h3>Historique</h3>
      {events.map(e => (
        <div key={e.id}>📌 {e.description}</div>
      ))}

      <input placeholder="Event" onChange={e => setEvent(e.target.value)} />
      <button onClick={addEvent}>Ajouter</button>
    </div>
  );
}