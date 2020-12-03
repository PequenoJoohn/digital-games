import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const [totalValue, setTotalValue] = useState();
    const [frete, setFrete] = useState();
    const [subtotal, setSubtotal] = useState();

    useEffect(() => {

        let value = 0;
        let valueFrete = 0;
        let freteItem = 0;
        
        cart.map((item) => {
            
            /* Valor + Frete */
            value = value + item.price;
            freteItem =+ freteItem + 10.00;   
            valueFrete = value + freteItem;

            /* Frete Gratis */
            if (value >= 250) {
                setFrete(freteItem = 0);
                valueFrete = value - freteItem;
                setSubtotal(value);
                setTotalValue(valueFrete);
            }
            
            setFrete(freteItem);
            setSubtotal(value);
            setTotalValue(valueFrete);
        });
    }, [cart]);

    function add(item) {
        const newCart = cart;
        newCart.push(item);

        setCart([...newCart])
    }

    function remove(index) {
        let newCart = cart.filter((item, i) => i !== index);

        setCart([...newCart])
    }

    const store = {
        add,
        cart,
        totalValue,
        subtotal,
        remove,
        frete
    }

    return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)

    const {
        cart,
        add,
        totalValue,
        subtotal,
        remove,
        frete
    } = context;

    return {
        cart,
        add,
        totalValue,
        subtotal,
        remove,
        frete
    }
}