import React from 'react';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import '../index.css'; // Asegúrate de que Tailwind CSS esté importado

const Terceracompra = () => {
  const initialOptions = {
    "client-id": "AeMgeVId9SgMf0lQqhI9Eze_wNKz6aBSxh8hQ1qMDfKi8KBKPNBGHiw5xQwM-LzKwJBIy85TCjE6qC-I",
    "components": "buttons,marks,funding-eligibility",
    "currency": "USD",
    "locale": "es_ES",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl mb-4">Checkout</h1>
          <PayPalButtonsWrapper />
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

const PayPalButtonsWrapper = () => {
  const [{ isPending, isRejected }] = usePayPalScriptReducer();

  if (isRejected) {
    return <div>Error loading PayPal script. Please try again later.</div>;
  }

  return (
    <>
      {isPending ? <div>Loading...</div> : null}
      <PayPalButtons
        style={{ layout: 'vertical' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '10.00', // El valor del pago
              },
            }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        }}
        onError={(err) => {
          console.error('Error in PayPal transaction:', err);
          alert('An error occurred with the PayPal transaction.');
        }}
      />
    </>
  );
};

export default Terceracompra;
