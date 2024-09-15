import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import './AddCartShopping.css'
import imgCartpage from '../../assets/imgCartpage.png'
import { contextProvider } from "../../components/Context";
// import OrderCard from "../../components/AddOrderCard/AddOrderCard";
import AddProductsCart from "../../components/AddOrderCard/AddProductsCart";
import { totalPrice } from "../../utils/totalCart";

const AddCartShopping = (props) => {
    const context = useContext(contextProvider);
    return (
        <>
            <div className="container bg-white mt-5 mb-2 text-center border contentCartShopping">
                {
                    context.cartProducts.length ? (
                        <div className="content m-5 text-start">
                            <h5 className="border-bottom mb-2">TU CARRITO</h5>
                            {
                                context.cartProducts.map((product) => (
                                    <AddProductsCart key={product.id} {...product} />
                                ))
                            }
                        </div>
                    ) : (
                        <div className="cart-content-none py-5 px-5">
                            <img className="mb-4 imgCartShopping" src={imgCartpage} alt="" />
                            <h5>TU CARRITO ESTÁ VACÍO</h5>
                            <span className="text-secondary">Aqui veras todos los productos que agreges a tu carrito de compras</span>
                            <div className="my-4">
                                <button className="boton rounded-0">
                                    <NavLink to="/productos" className="text-decoration-none btnCart">
                                        COMPRAR AHORA
                                    </NavLink>
                                </button>
                            </div>
                        </div>
                    )
                }
                <div className="totalCarro">
                </div>
            </div>
            <div className="container bg-white p-4 mb-4 border contentCartShoppingTotal">
                <h4>Total</h4>
                <span className="total-pagarCart">$ {totalPrice(context.cartProducts)}</span>
                <br />
                <button className="boton-payCart w-25">Pagar</button>
            </div>
        </>
    )
}

export default AddCartShopping;