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

      const paymentId = searchParams.get('payment_id');

      if (!paymentId) return;

      try {

        const { data } = await axios.post(
          'http://localhost:5000/api/payments/verify-redirect',
          { payment_id: paymentId }
        );

        if (data.success) {
          localStorage.setItem('course_token', data.token);
          setHasAccess(true);
          navigate('/course-content');
        } else {
          navigate('/buy-course');
        }

      } catch (err) {
        alert("Verification failed. Please contact support.");
      }

    };

    verifyAndGrant();
  }, [searchParams]);

  return (
    <div className="text-white text-center mt-20">
      Verifying your membership...
    </div>
  );
};

export default VerifyAccess;