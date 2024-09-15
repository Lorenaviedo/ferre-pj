import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faLock, faLocationDot, faHomeUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

const MenuAdmin = () => {
    return (
        <div className="card p-2 ms-5 my-4">
            <img src="https://facturandord.com/wp-content/uploads/2024/01/Sistema-de-Facturacion-para-Ferreterias-Punto-de-Venta.jpg" className="card-img-top rounded-2" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title text-center">Opciones de cuenta</h5>
                <hr />
                <div className="list-group border-0">
                    <NavLink to="/admi-account" className="text-decoration-none">
                        <button type="button" className="list-group-item list-group-item-action btn-sm border-0">
                            <FontAwesomeIcon className="me-2" icon={faHomeUser} />
                            Pagina Principal
                        </button>
                    </NavLink>
                    <button type="button" className="list-group-item list-group-item-action btn-sm border-0">
                        <FontAwesomeIcon className="me-2" icon={faUserPen} />
                        Informacion Personal
                    </button>
                    <button type="button" className="list-group-item list-group-item-action btn-sm border-0">
                        <FontAwesomeIcon className="me-2" icon={faLocationDot} />
                        Direccion & Contacto
                    </button>
                    <button type="button" className="list-group-item list-group-item-action btn-sm border-0">
                        <FontAwesomeIcon className="me-2" icon={faLock} />
                        Seguridad de Cuenta
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuAdmin;