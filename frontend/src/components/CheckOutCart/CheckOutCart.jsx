import { useContext } from "react";
import { contextProvider } from "../Context";
import './CheckOutCart.css'
import OrderCard from "../AddOrderCard/AddOrderCard";
import { totalPrice } from "../../utils/totalCart";

const CheckOutCart = () => {
    const context = useContext(contextProvider);
    return (
        <div className={`${context.isCheckoutOpen ? 'd-flex':'d-none'}
                content-cartProducts col-sm-3 p-2`}>
            <div className="card p-2">
                <div className="card-header bg-white cartProduct-header">
                    <h2 className="fs-5">Mi carrito</h2>
                    <button onClick={context.closeCheckout} type="button" className="btn-close text-reset" aria-label="Close"></button>
                </div>
                <div className="card-body">
                    {
                        context.cartProducts.map((product) => (
                            <OrderCard key={product.id} {...product} />
                        ))
                    }
                </div>
                <div className="card-footer bg-white cartProduct-footer">
                    <div className="cart-total my-2 fw-bold d-flex justify-content-between fs-5">
                        <h4>Total</h4>
                        <span className="total-pagarCart">$ {totalPrice(context.cartProducts)}</span>
                    </div>
                    <button className="boton-payCart w-100">Pagar</button>
                    <hr />
                    <button className="boton-clearCart w-100">Vaciar carrito</button>
                </div>
            </div>
        </div>
    )
}

export default CheckOutCart;