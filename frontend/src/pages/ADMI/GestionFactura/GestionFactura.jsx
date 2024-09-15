import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashCan, faCirclePlus, faArrowLeft, faEye } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

const GestionFactura = () => {
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
                        <p className="text-center fs-4 fw-bold card-title">Control de Facturas</p>
                        <div className="card-body">
                            <table className="table table-striped table-hover border">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Cliente</th>
                                        <th scope="col">Cant Producto</th>
                                        <th scope="col">Lista Productos</th>
                                        <th scope="col">Precio Total</th>
                                        <th scope="col">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark Otto</td>
                                        <td>12</td>
                                        <td>Taladro dinamico manual marca Urrea, Llave expansiva, Hombre solo, Pulidora, Gato Hidraulico </td>
                                        <td>$ 92,000</td>
                                        <td>
                                            <FontAwesomeIcon className="text-success fs-5 mx-2" icon={faEye}/>
                                            <FontAwesomeIcon className="text-danger fs-5 mx-2" icon={faTrashCan}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob Thornton</td>
                                        <td>10</td>
                                        <td>Tornillos de 5cm, taladro marca Bosch, Alicate, kit de herramientas basicas</td>
                                        <td>$ 250,000</td>
                                        <td>
                                            <FontAwesomeIcon className="text-success fs-5 mx-2" icon={faEye}/>
                                            <FontAwesomeIcon className="text-danger fs-5 mx-2" icon={faTrashCan}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>798</td>
                                        <td>Alicate, llave expansiva, martillo, tenedor.</td>
                                        <td>$ 120,000</td>
                                        <td>
                                            <FontAwesomeIcon className="text-success fs-5 mx-2" icon={faEye}/>
                                            <FontAwesomeIcon className="text-danger fs-5 mx-2" icon={faTrashCan}/>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Cliente</th>
                                        <th>Cant Producto</th>
                                        <th>Lista Productos</th>
                                        <th>Precio Total</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                            </table>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-dark text-center text-white ">
                                    <FontAwesomeIcon className="me-2" icon={faCirclePlus} />
                                    Agregar nueva factura - Pnt Fsc
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GestionFactura;