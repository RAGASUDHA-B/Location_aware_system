import Navbar from "../components/Navbar";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="hero glass">
        <h1>Location aware system platform</h1>
        <button>Get Started</button>
      </div>
    </div>
  );
}