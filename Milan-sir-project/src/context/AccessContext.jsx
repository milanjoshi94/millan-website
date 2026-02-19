// context/AccessContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessContext = createContext();

export const AccessProvider = ({ children }) => {
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if they have the lifetime token on load
    const token = localStorage.getItem('course_token');
    if (token) setHasAccess(true);
    setLoading(false);
  }, []);

  return (
    <AccessContext.Provider value={{ hasAccess, setHasAccess, loading }}>
      {children}
    </AccessContext.Provider>
  );
};

export const useAccess = () => useContext(AccessContext);