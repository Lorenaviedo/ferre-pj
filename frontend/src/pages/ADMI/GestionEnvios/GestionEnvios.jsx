import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrashCan, faCirclePlus} from '@fortawesome/free-solid-svg-icons'

const GestionEnvios = () => {
    return (
        <>
            <div className="container p-4 mt-4">
                <div className="col">
                    <div className="card p-5 rounded-3">
                        <p className="text-center fs-4 fw-bold card-title">Control de envios</p>
                        <div className="card-body">
                            <table className="table table-bordered table-hover">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Nombres</th>
                                        <th scope="col">Apellidos</th>
                                        <th scope="col">Celular</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>3482283758</td>
                                        <td>Activo</td>
                                        <td>
                                            <FontAwesomeIcon className="text-success fs-5 mx-2" icon={faPenToSquare}/>
                                            <FontAwesomeIcon className="text-danger fs-5 mx-2" icon={faTrashCan}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>2489872895</td>
                                        <td>Activo</td>
                                        <td>
                                            <FontAwesomeIcon className="text-success fs-5 mx-2" icon={faPenToSquare}/>
                                            <FontAwesomeIcon className="text-danger fs-5 mx-2" icon={faTrashCan}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>51253162</td>
                                        <td>Activo</td>
                                        <td>
                                            <FontAwesomeIcon className="text-success fs-5 mx-2" icon={faPenToSquare}/>
                                            <FontAwesomeIcon className="text-danger fs-5 mx-2" icon={faTrashCan}/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="row">
                                <div className="col-md-9">
                                    <p>Mostrando 1 a 10 de 20 registros</p>
                                </div>
                                <div className="col text-right">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination pagination-sm d-flex justify-content-end">
                                            <li className="page-item"><a className="page-link text-black" href="#">Anterior</a></li>
                                            <li className="page-item"><a className="page-link text-black" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link text-black" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link text-black" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link text-black" href="#">Siguiente</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <hr />
                            <button className="btn btn-dark text-center text-white ">
                                <FontAwesomeIcon className="me-2" icon={faCirclePlus} />
                                Generar nuevo envio</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GestionEnvios;