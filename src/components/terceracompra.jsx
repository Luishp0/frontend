import React from 'react';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import '../index.css';

const Terceracompra = () => {
  const initialOptions = {
    "client-id": "AeMgeVId9SgMf0lQqhI9Eze_wNKz6aBSxh8hQ1qMDfKi8KBKPNBGHiw5xQwM-LzKwJBIy85TCjE6qC-I",
    "components": "buttons,marks,funding-eligibility",
    "currency": "USD",
    "locale": "es_ES",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex justify-center items-center mt-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl">
            <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-white">Verificar</h1>
            <PayPalButtonsWrapper />
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

const PayPalButtonsWrapper = () => {
  const [{ isPending, isRejected }] = usePayPalScriptReducer();

  if (isRejected) {
    return <div className="text-red-500 text-center text-sm">Error al cargar PayPal. Inténtelo de nuevo más tarde.</div>;
  }

  return (
    <div className="flex justify-center items-center space-x-4">
      {isPending ? <div className="spinner mb-4 w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin"></div> : null}
      
      <div className="w-full sm:w-1/2 bg-blue-50 dark:bg-gray-700 p-4 rounded-md shadow-sm">
        <h2 className="text-lg font-medium mb-2 text-blue-600 dark:text-blue-300">PayPal</h2>
        <PayPalButtons
          style={{
            layout: 'horizontal',
            color: 'blue',
            shape: 'rect',
            tagline: false,
            height: 40,
          }}
          fundingSource="paypal"
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
        />
      </div>

      <div className="w-full sm:w-1/2 bg-gray-50 dark:bg-gray-700 p-4 rounded-md shadow-sm">
        <h2 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Tarjeta</h2>
        <PayPalButtons
          style={{
            layout: 'horizontal',
            color: 'black',
            shape: 'rect',
            tagline: false,
            height: 40,
          }}
          fundingSource="card"
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
        />
      </div>
    </div>
  );
};

const createOrder = (data, actions) => {
  return actions.order.create({
    purchase_units: [{
      amount: {
        value: '1699.00',
      },
    }],
  }).catch(err => {
    console.error('Error in createOrder:', err);
    alert('Error al crear la orden. Revise la consola para más detalles.');
  });
};

const onApprove = (data, actions) => {
  return actions.order.capture().then((details) => {
    alert('Transacción completada por ' + details.payer.name.given_name);
  }).catch(err => {
    console.error('Error in onApprove:', err);
    alert('Error al capturar la orden. Revise la consola para más detalles.');
  });
};

const onError = (err) => {
  console.error('Error en la transacción de PayPal:', err);
  alert('Error en la transacción de PayPal.');
};

export default Terceracompra;
