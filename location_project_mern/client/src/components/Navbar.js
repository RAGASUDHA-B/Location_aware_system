import { FaUserCircle } from "react-icons/fa";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">📍</div>

      <div className="menu">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        <span>FAQ</span>
      </div>

      <FaUserCircle size={30} />
    </div>
  );
}