import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import axios from "axios";


const AccountAuthInfo = () => {

    const [users, setUsers] = useState([]);

    // Users List 
    useEffect(() => {
        async function loadUsers() {
            const res = await axios.get('http://127.0.0.1:8000/users/list-user/');
            setUsers(res.data);
            console.log(res.data);
        }
        loadUsers();
    }, []);

    return (
        <div className="card p-4 me-5 rounded-3 my-4">
            <div className="card-body">
                <p className="text-start fs-5 fw-bold card-title">Informacion de la Cuenta</p>
                <hr />
                {users.map(user => (
                    <div key={user.id}>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text w-25" id="inputGroup-sizing-sm">Nombre de usuario</span>
                            <input type="text" className="form-control bg-white" disabled aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder={user.username} />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text w-25" id="inputGroup-sizing-sm">Correo Electronico</span>
                            <input type="text" className="form-control bg-white" disabled aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"  placeholder={user.email} />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text w-25" id="inputGroup-sizing-sm">Contrasena</span>
                            <input type="text" className="form-control bg-white" aria-disabled="true" disabled placeholder="........" />
                        </div>
                    </div>
                ))}
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-success text-center">
                        <FontAwesomeIcon className="me-2" icon={faCirclePlus} />
                        Editar Informacion
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AccountAuthInfo;
