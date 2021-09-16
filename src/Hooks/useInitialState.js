import React, { useState } from 'react'
import initialState from '../initialState'

function useInitialState() {
    const [carrito, setCarrito] = useState(initialState);

    const addToCart = payload => {
        setCarrito({
            ...carrito,
            cart:[...carrito.cart, payload]
        })
    }

    const removeFromCart = payload => {
        setCarrito({
            ...carrito,
            cart: carrito.cart.filter(items=>items.id !== payload.id)
        })
    }

    return {
        addToCart,
        removeFromCart,
        carrito,
    }
}

export default useInitialState
