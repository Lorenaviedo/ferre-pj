import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsapp, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="footer1 bg-dark w-100 h-100 mt-5">
                <div className="container footercontainer">
                    <div className="row text-white m-4 menu-footer">
                        <div className="col-md-3 contact-info">
                            <p className='title-footer'>Información de contacto</p>
                            <ul>
                                <li>Direccion: Carrera 14 # 21 - 57 Barrio Gaitan, Girardot - Cundinamarca</li>
                                <li>Telefono: 123-456-7890</li>
                                <li>Nit: 90 242702</li>
                                <li>Email: ferrecentralMACO@gmail.com</li>
                            </ul>
                            <div className='social-icons'>
                                <span><FontAwesomeIcon className='brandsicon faWhatsapp' icon={faWhatsapp} /></span>
                                <span><FontAwesomeIcon className='brandsicon faFacebook' icon={faFacebook} /></span>
                                <span><FontAwesomeIcon className='brandsicon faTelegram' icon={faTelegram} /></span>
                                <span><FontAwesomeIcon className='brandsicon faInstagram' icon={faInstagram} /></span>
                            </div>
                        </div>
                        <div className="col-md-3 information">
                            <p className='title-footer'>Telefono: 3117982003</p>
                            <ul>
                                <li>Acerca de Nosotros</li>
                                <li>Informacion de Entrega</li>
                                <li>Politicas de privacidad</li>
                                <li>Terminos y condiciones</li>
                                <li>Contactanos</li>
                            </ul>
                        </div>
                        <div className="col-md-3 my-account">
                            <p className='title-footer'>Tu cuenta</p>
                            <ul>
                                <li>Historial de ordenes</li>
                                <li>Tu carrito</li>
                                <li>Productos favoritos</li>
                                <li>Estado de tu pedido</li>
                            </ul>
                        </div>
                        <div className='col-md-3 news'>
                            <p className="title-footer">Nosotros</p>
                            <div className="content-footer">
                                <p>
                                    Suscríbete a nuestro boletín semanal.
                                    Recibe descuentos, ofertas exclusivas y promociones.
                                </p>
                                <input type="email" placeholder='Ingresa tu correo...' />
                                <button>Suscribete</button>
                            </div>
                        </div>
                    </div>
                    <div className="row row-footer">
                        <div className="copyright">
                            <p>Desarrollado por Ferresoft - Lorena - Cristian - Liz &copy;  2023</p>
                            {/*<img className='imgpays object-cover' src="https://toolferreterias.com/wp-content/uploads/2019/09/payment.png" alt="pagos" />*/}
                        </div>
                    </div>
                </div>
        </footer>
    )
}
export default Footer;