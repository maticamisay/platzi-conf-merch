import React from 'react'
import '../Styles/Components/Success.css'

function Success() {
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>Juan, gracias por tu compra</h2>
                <span>Tu pedido llegará en 3 días a tu dirección:</span>
                <div className="Success-map">
                    Google maps
                </div>
            </div>
        </div>
    )
}

export default Success
