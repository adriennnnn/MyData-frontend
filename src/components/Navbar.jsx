// import { Link } from "react-router-dom";


// export default function Navbar() {
//   return (
//     <nav>
//       <Link to="/">Dashboard</Link>
//       <Link to="/create">Créer une entité</Link>
//       <Link to="/login">Connexion</Link>
//       <Link to="/register">Inscription</Link>
//     </nav>
//   );
// }
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      background: "#020617",
      borderBottom: "1px solid #1e293b"
    }}>
      <div>
        <Link to="/" style={{ marginRight: 15 }}>Dashboard</Link>
        <Link to="/create">Créer</Link>
      </div>

      <div>
        <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}