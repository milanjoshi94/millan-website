import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifyAccess = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleVerify = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post('https://milan-website-backendfreelance-backend.onrender.com/api/payments/verify-purchase', { email });

      if (data.success) {
        localStorage.setItem('course_auth_token', data.token);
        navigate('/course-content');
      }
    } catch (err) {
      alert(err.response?.data?.message || "Verification failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h2>Success! Now enter your email to get access</h2>
      <input 
        type="email" 
        placeholder="Email used for payment"
        className="p-2 m-4 text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button 
        onClick={handleVerify}
        className="bg-blue-600 px-6 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Checking..." : "Get Access"}
      </button>
    </div>
  );
};

export default VerifyAccess;