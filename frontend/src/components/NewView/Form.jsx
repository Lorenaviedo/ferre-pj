import { useState } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constants";
import "../../styles/Form.css"
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
// eslint-disable-next-line react/prop-types
function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Iniciar sesión" : "Registrate";
    const name2 = method === "login" ? "¿No tienes una cuenta?" : "¿Tienes una cuenta?";
    const name4 = method === "login" ? "Registrate" : "Inicia sesión";
    const name3 = method === "login" ? '/registro' : '/login';
    const errorMessage = method === "login" ? 'Iniciar sesion' : 'Registrar';

    
    
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        
        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/admi-account")
            } else {
                navigate("/login")
            }
        } catch (error) {
            console.log     (error)
            toast.error(`Error al ${errorMessage}, Verifique los datos suministrados`, {
                position: 'top-center',
            });
        } finally {
            setLoading(false)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container bg-white border">
            <h1>{name}</h1>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nombre de usuario"
                />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
            />
            <button className="form-button" type="submit">
                {name}
            </button>
            <div className="d-flex gap-1 justify-content-center mt-1">
                <p>{name2}</p>
                <NavLink to={name3} className="text-decoration-none text-info fw-semibold">
                    {name4}
                </NavLink>
            </div>
        </form>
    );
}

export default Form;
  