import { useState } from "react";
import { createContext } from "react";

const contextProvider = createContext({});

const ContextShopping = ({children}) =>{
    const [count, setCount] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    const [isCheckoutOpen, setCheckoutOpen] = useState(false);
    /*******************************show CART******************************************/
    const openCheckout = () =>{
        setCheckoutOpen(true);
    }

    const closeCheckout = () =>{
        setCheckoutOpen(false);
    }

    return(
        <contextProvider.Provider value={{
            count, setCount,
            cartProducts, setCartProducts,
            countProducts, setCountProducts,
            isCheckoutOpen, openCheckout, closeCheckout,
        }}>
            {children}
        </contextProvider.Provider>
    )
}

export {contextProvider, ContextShopping};