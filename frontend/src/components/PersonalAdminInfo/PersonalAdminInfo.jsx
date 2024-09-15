import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
// import { NavLink } from "react-router-dom";

const PersonalAdminInfo = () => {
    return (
        <div className="card p-4 me-5 rounded-3 my-4">
            <div className="card-body">
                <p className="text-start fs-5 fw-bold card-title">Informacion Personal</p>
                <hr />
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-sm">Nombre completo</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Maria Oviedo" />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-sm">Cedula</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="9029898092"/>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-sm">Telefono - celular</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="3015673425"/>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-success text-center">
                        <FontAwesomeIcon className="me-2" icon={faCirclePlus} />
                        Guardar cambios
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PersonalAdminInfo;