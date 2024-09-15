import './UserAccount.css';
import img1 from '../../assets/infoadmi.png'
import img3 from '../../assets/facturaadmi.png'
import img6 from '../../assets/envioadmi.png'
import img5 from '../../assets/pedidoadmi.png'
import imgCartUser from '../../assets/imgCartUser.png'
import { NavLink } from 'react-router-dom';


const UserAccount = () => {
    return (
        <>
            <div className="container usercontainer">
                <p className="text-center fs-2 fw-bold">Mi cuenta</p>
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
                                        <img className="img-adaptation img-fluid" src={img5} alt="" />
                                    </div>
                                    <div className="col">
                                        <h5 className="card-title">Tus pedidos</h5>
                                        <p className="card-text">Rastrear, devolver y cancelar un pedido, descargar factura y mirar el estado de su pedido</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card rounded-1 card1">
                            <div className="card-body">
                                <NavLink to='/tucarrito' className='text-decoration-none text-black'>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img className="img-fluid img-adaptation" src={imgCartUser} alt="" />
                                        </div>
                                        <div className="col">
                                            <h5 className="card-title">Tu Carrito</h5>
                                            <p className="card-text">Ver todos los productos que haz agregado a tu carrito para la compra</p>
                                        </div>
                                    </div>
                                </NavLink>
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
                                        <img className="img-fluid img-adaptation" src={img3} alt="" />
                                    </div>
                                    <div className="col">
                                        <h5 className="card-title">Tus pagos</h5>
                                        <p className="card-text">Ver todas las transacciones, administrar metodos de pago y configuraciones</p>
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
                                            Estados de tus envios</NavLink></h5>
                                        <p className="card-text">Visualiza el estado del envio y envia comentarios/notificaciones al encargado</p>
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

export default UserAccount;