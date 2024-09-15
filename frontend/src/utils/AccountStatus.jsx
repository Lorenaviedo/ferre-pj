import { useState, useEffect } from 'react';
import { ACCESS_TOKEN } from '../../utils/constants';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    setIsAuthenticated(!!token);  // Si hay token, está autenticado
  }, []);

  return isAuthenticated;
};
