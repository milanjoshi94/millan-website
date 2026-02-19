// pages/VerifyAccess.jsx
import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAccess } from '../context/AccessContext';

const VerifyAccess = () => {
  const [searchParams] = useSearchParams();
  const { setHasAccess } = useAccess();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAndGrant = async () => {
      const paymentId = searchParams.get('razorpay_payment_id');

      if (paymentId) {
        try {
          // Verify with your Node.js backend
          const { data } = await axios.post('http://localhost:5000/api/payments/verify-redirect', {
            payment_id: paymentId
          });

          if (data.success) {
            localStorage.setItem('course_token', data.token);
            setHasAccess(true);
            navigate('/course-content'); // Success!
          }
        } catch (err) {
          alert("Verification failed. Please contact support.");
        }
      }
    };
    verifyAndGrant();
  }, [searchParams]);

  return <div className="text-white text-center mt-20">Verifying your membership...</div>;
};

export default VerifyAccess;