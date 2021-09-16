import React from 'react'
import '../Styles/Components/Payment.css'

function Payment() {
    return (
        <div className="Payment">
            <div className="Paymen-content">
                <h3>Resumen del pedido</h3>
                <div className="Payment-button">
                    Boton de pago con paypal
                </div>
            </div>
            <div>Sidebar</div>
        </div>
    )
}

export default Payment
