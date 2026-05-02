import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3001/register", {
      email,
      password,
    });

    alert("Inscription réussie");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inscription</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">S'inscrire</button>
    </form>
  );
}