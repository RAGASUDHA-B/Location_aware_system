import "./login.css";

export default function Login() {
  return (
    <div className="login">
      
      <div className="left">
        <h2>Login</h2>

        <input placeholder="Username" />
        <input placeholder="Password" type="password" />

        <button>Login</button>
      </div>

      <div className="right">
        <div className="glass content">
          <h1>Welcome page</h1>
          <p>
            A map-centric smart system web application that enables real-time
            device tracking, geofencing, alerts and automation.
          </p>
        </div>
      </div>

    </div>
  );
}