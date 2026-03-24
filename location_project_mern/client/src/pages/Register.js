import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleRegister = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        data
      );

      console.log(res.data);
      alert("User Registered Successfully");

    }catch (err) {
  console.log(err.response?.data || err.message);
  alert("Error: " + (err.response?.data || err.message));
} 
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) =>
          setData({ ...data, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setData({ ...data, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
      />

      <button onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}