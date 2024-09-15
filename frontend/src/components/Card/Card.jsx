import { useContext } from "react";
import { contextProvider } from "../Context";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    const {product} = props;
    const context = useContext(contextProvider);
    const addProductCart = (dataProduct) => {
        context.setCount(context.count + 1);
        context.openCheckout();
    
        if (context.cartProducts.find(item => item.id === dataProduct.id)) {
            const products = context.cartProducts.map(item => item.id === dataProduct.id 
                ? {...item, cantidad: item.cantidad + 1}
                : item
            );
    
            return context.setCartProducts([...products]);
        }
    
        context.setCartProducts([...context.cartProducts, dataProduct]);
    }
    
    return (
        <>
            <div className="card card1 h-100">
                <img className="card-img-top rounded-lg w-100 h-100 object-cover" src={product.image} alt="" />
                <span className="text-center">{product.category.name_category}</span>
                <span className="text-center">
                    <NavLink to='/product-detail' className="navbar-brand text-success">
                        View details
                    </NavLink></span>
                <hr className=" divider" />
                <div className="card-body">
                    <h5 className="card-title">$ {product.price}</h5>
                    <span>{product.name_product}</span>
                    <p className="card-text text-secondary">{product.description} Description</p>
                    <button onClick={() => addProductCart(product)} className="btn btn-dark w-100 rounded-0">Añadir al Carrito</button>
                </div>
            </div>
        </>
    )
}

export default Card;