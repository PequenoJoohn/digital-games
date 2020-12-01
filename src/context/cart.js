import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const [totalValue, setTotalValue] = useState();
    const [frete, setFrete] = useState(20.00);

    useEffect(() => {
        let value = 0;
        cart.map((item) => {
            value = value + item.price
        });

        if(value > 250) {
            return setTotalValue(value);
        }

        setTotalValue(value + frete);
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
        remove,
        frete
    } = context;

    return {
        cart,
        add,
        totalValue,
        remove,
        frete
    }
}