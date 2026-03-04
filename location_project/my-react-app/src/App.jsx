import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      setMessage("Please enter username and password");
      return;
    }

    // Simulating PHP backend check
    if (username === "admin" && password === "1234") {
      setMessage("Login successful!");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="main">
      <div className="left-panel">
        <div className="triangle"></div>

        <div className="login-box">
          <h2>Login</h2>

          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>

          {message && <p className="message">{message}</p>}
        </div>
      </div>

      <div className="divider"></div>

      <div className="right-panel">
        <div className="overlay">
          <h1>Welcome page</h1>
          <p>
            A map-centric smart system web application that enables real-time
            device tracking, geofencing, alerts, and location based automation
            through an intuitive dashboard interface.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;