import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan, faCirclePlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './GestionEmpleado.css';

const GestionEmpleado = () => {

    return (
        <>
            <div className="container p-4 mt-4">
                <div className="col">
                    <div className="card p-5 rounded-3">
                        <div className="d-flex justify-content-start">
                            <NavLink to="/admi-account" className="text-dark">
                                <FontAwesomeIcon className="back fs-5 mx-2 op-delete" icon={faArrowLeft} />
                            </NavLink>
                        </div>
                        <p className="text-center fs-4 fw-bold card-title">Gestion de Cuentas</p>
                        <div className="card-body">
                            <table id="example" className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre de usuario</th>
                                        <th>Correo</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody id="table_users">
                                        <tr>
                                            <td>1</td>
                                            <td>Admi Ferre</td>
                                            <td>adminferre@gmail.com</td>
                                            <td>
                                                <FontAwesomeIcon className="text-success fs-5 mx-2 op-edit" icon={faPenToSquare} />
                                                <FontAwesomeIcon className="text-danger fs-5 mx-2 op-delete" icon={faTrashCan} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Test Ferre</td>
                                            <td>testferre@gmail.com</td>
                                            <td>
                                                <FontAwesomeIcon className="text-success fs-5 mx-2 op-edit" icon={faPenToSquare} />
                                                <FontAwesomeIcon className="text-danger fs-5 mx-2 op-delete" icon={faTrashCan} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>User2</td>
                                            <td>usertwolor@gmail.com</td>
                                            <td>
                                                <FontAwesomeIcon className="text-success fs-5 mx-2 op-edit" icon={faPenToSquare} />
                                                <FontAwesomeIcon className="text-danger fs-5 mx-2 op-delete" icon={faTrashCan} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Cristian Diaz</td>
                                            <td>chdiaz50242@gmail.com</td>
                                            <td>
                                                <FontAwesomeIcon className="text-success fs-5 mx-2 op-edit" icon={faPenToSquare} />
                                                <FontAwesomeIcon className="text-danger fs-5 mx-2 op-delete" icon={faTrashCan} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Liz Molina</td>
                                            <td>karol.104010@gmail.com</td>
                                            <td>
                                                <FontAwesomeIcon className="text-success fs-5 mx-2 op-edit" icon={faPenToSquare} />
                                                <FontAwesomeIcon className="text-danger fs-5 mx-2 op-delete" icon={faTrashCan} />
                                            </td>
                                        </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre de usuario</th>
                                        <th>Correo</th>
                                        <th>Opciones</th>
                                    </tr>
                                </tfoot>
                            </table>
                            <hr className="mt-5" />
                            <div className="d-flex justify-content-end">
                                <NavLink to="/registrar-cuenta">
                                    <button className="btn btn-dark text-center text-white ">
                                        <FontAwesomeIcon className="me-2" icon={faCirclePlus} />
                                        Agregar Nueva Cuenta</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GestionEmpleado;