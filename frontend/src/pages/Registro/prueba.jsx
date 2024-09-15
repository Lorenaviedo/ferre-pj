import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import { useEffect, useState } from "react";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const RegistroForm = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  /*useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/users/list-user/')
        setListUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);*/

  useEffect(() => {
    async function loadUsers() {
      const res = await axios.get('http://127.0.0.1:8000/users/list-user/');
      setUsers(res.data);
      console.log(res.data);
    }
    loadUsers();
  }, []);

  return (
    <div>
      <table className='table border'>
        <thead>
          <th>Id</th>
          <th>Email</th>
          <th>Nombre Usuario</th>
          <th>Password</th>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Perfil de Usuario</h1>
    </div>
  );
};

export default RegistroForm;