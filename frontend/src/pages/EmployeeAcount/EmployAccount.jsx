import './EmployAccount.css';
import img1 from '../../assets/infoadmi.png'
import img2 from '../../assets/empladmi.png'
import img3 from '../../assets/facturaadmi.png'
import img4 from '../../assets/inventarioadmi.png'
import img5 from '../../assets/pedidoadmi.png'
import img6 from '../../assets/envioadmi.png'
import { NavLink } from 'react-router-dom';


const EmployAccount = () => {
    return (
        <>
            <div className="container admicontainer mt-4">
                <p className="text-center fs-2 fw-bold">Cuenta - Empleado</p>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card rounded-1 card1">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img className="img-fluid img-adaptation" src={img1} alt="" />
                                    </div>
                                    <div className="col">
                                        <h5 className="card-title">Informacion personal</h5>
                                        <p className="card-text">Administrar datos personales (Contraseñas, cuenta y demas) y datos de envio como la direccion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card rounded-1 card1">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img className="img-fluid img-adaptation" src={img2} alt="" />
                                    </div>
                                    <div className="col">
                                        <h5><NavLink to='/gestionar-empleado' className="text-decoration-none card-title">
                                            Gestion  de empleados</NavLink></h5>
                                        <p className="card-text">Agrega, edita o elimina la Informacionde de tus empleados</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card rounded-1 card1">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img className="img-fluid img-adaptation" src={img3} alt="" />
                                    </div>
                                    <div className="col">
                                        <h5 className="card-title">Creacion de facturas</h5>
                                        <p className="card-text">Edita las facturas segun los pedidos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card rounded-1 card1">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img className="img-fluid img-adaptation" src={img4} alt="" />
                                    </div>
                                    <div className="col">
                                        <h5><NavLink to='/gestionar-inventario' className="text-decoration-none card-title">
                                            Control de inventario</NavLink></h5>
                                        <p className="card-text">Agrega, edita o elimina la Informacion de los productos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card rounded-1 card1">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img className="img-adaptation img-fluid" src={img5} alt="" />
                                    </div>
                                    <div className="col">
                                        <h5> <NavLink to='/gestionar-pedido' className="text-decoration-none card-title">
                                            Control de pedidos</NavLink></h5>
                                        <p className="card-text">Ver y editar la Informacion de los pedidos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card rounded-1 card1">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img className="img-fluid img-adaptation" src={img6} alt="" />
                                    </div>
                                    <div className="col">
                                        <h5><NavLink to='/gestionar-envio' className="text-decoration-none card-title">
                                            Control de envios</NavLink></h5>
                                        <p className="card-text">Editar el estado del envio y su Informacion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployAccount;