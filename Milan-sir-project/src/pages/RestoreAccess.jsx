import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RestoreAccess = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRestore = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/payments/restore-access",
        { email }
      );

      if (data.success) {
        localStorage.setItem("course_token", data.token);
        navigate("/course-content");
      }
    } catch {
      alert("No purchase found with this email");
    }
  };

  return (
    <div>
      <h2>Restore Course Access</h2>
      <input
        type="email"
        placeholder="Enter email used for payment"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleRestore}>Restore Access</button>
    </div>
  );
};

export default RestoreAccess;