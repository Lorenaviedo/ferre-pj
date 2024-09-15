import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ShopInfo.css';
import { faWallet, faGift, faPlaneUp, faHeadset } from '@fortawesome/free-solid-svg-icons';

function ShopInfo() {
    return (
        <section className="container-fluid aboutus">
            <div className="container container-features">
                <div className="card-feature">
                    <FontAwesomeIcon icon={faPlaneUp} className='icon'/>
                    <div className="feature-content">
                        <span>Envio gratuito a nivel mundial</span>
                        <p>En pedido superior a $150 dolares</p>
                    </div>
                </div>
                <div className="card-feature">
                    <FontAwesomeIcon icon={faWallet} className='icon'/>
                    <div className="feature-content">
                        <span>Contrareembolso</span>
                        <p>100% garantia de devolucion del dinero</p>
                    </div>
                </div>
                <div className="card-feature">
                    <FontAwesomeIcon icon={faGift} className='icon'/>
                    <div className="feature-content">
                        <span>Tarjeta regalo especial</span>
                        <p>Ofrece bonos especiales con regalo</p>
                    </div>
                </div>
                <div className="card-feature">
                    <FontAwesomeIcon icon={faHeadset} className='icon'/>
                    <div className="feature-content">
                        <span>Servicio al cliente 24/7</span>
                        <p>Llamenos 24/7 al 123-456-7890</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShopInfo