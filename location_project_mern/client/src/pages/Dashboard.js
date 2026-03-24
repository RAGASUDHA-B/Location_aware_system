import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar glass">
        <h3>Devices</h3>

        <p>📷 Home Camera</p>
        <p>🚗 Car Tracker</p>
        <p>🏢 Office Sensor</p>
        <p>🚲 Bike Tracker</p>
      </div>

      {/* Map */}
      <div className="map">
        <iframe
          title="location-map"
          src="https://maps.google.com/maps?q=chennai&z=13&output=embed"
          width="100%"
          height="100%"
        ></iframe>
      </div>

      {/* Right Panel */}
      <div className="panel glass">
        <h3>Device Details</h3>
        <p>Status: Moving</p>
        <p>Battery: 15%</p>
        <p>Signal: Good</p>

        <h4>Location History</h4>
        <ul>
          <li>12:45 PM - Entered zone</li>
          <li>12:30 PM - Moving North</li>
        </ul>
      </div>

    </div>
  );
}