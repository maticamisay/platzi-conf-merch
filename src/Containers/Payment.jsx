import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import { PayPalButton } from 'react-paypal-button-v2'
import '../Styles/Components/Payment.css'
import { useHistory } from 'react-router';

function Payment() {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;
    const history = useHistory();

    const paypalOptions = {
        clientId: 'access_token$sandbox$9pcq5dszs24yqfnr$7eab550de5a5bbf62fd081dc6863a80f',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handleSumTotal = () => {
        const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    const handlePaymentSucces = (data) => {
        console.log(data);
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder);
            history.push('/checkout/success');
        }
    }

    return (
        <div className="Payment">
            <div className="Paymen-content">
                <h3>Resumen del pedido</h3>
                {cart.map(item => (
                    <div className="Payment-item" key={item.id}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price} </span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal()}
                        onPaymentStart={() => console.log('start payment')}
                        onPaymentSuccess={data => handlePaymentSucces(data)}
                        onPaymentError={error => console.log('error')}
                        onPaymentCancel={data => console.log('data')}
                    />
                </div>
            </div>
            <div>Sidebar</div>

        </div>
    )
}

export default Payment
