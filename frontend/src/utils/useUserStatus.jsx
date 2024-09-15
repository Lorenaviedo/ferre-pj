import { useState, useEffect } from "react";

const useUserStatus = () => {
  const [userStatus, setUserStatus] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token) {
      setUserStatus('/logout');  // Si el token existe, el usuario está logueado
    } else {
      setUserStatus('/login');   // Si no hay token, el usuario no está logueado
    }
  }, []);

  return userStatus;
};

export default useUserStatus;
