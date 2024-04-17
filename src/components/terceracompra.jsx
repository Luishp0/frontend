import React, { useState } from 'react';
import img1 from "../img/peceramadera.png";
import { Link } from 'react-router-dom';

export default function Example() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expirationDate: '',
    cvv: '',
  });
  const [formCompleted, setFormCompleted] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Verificar si todos los campos del formulario están completos
    const isFormCompleted = Object.values(formData).every(value => value !== '');
    setFormCompleted(isFormCompleted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log('Formulario enviado:', formData);
    // Simular una acción exitosa después de enviar el formulario
    alert('Compra exitosa!');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white w-full md:w-11/12 lg:w-3/4 xl:w-2/3 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-gray-200 flex justify-center items-center">
          <img src={img1} alt="Placeholder" className="max-h-full max-w-full" />
        </div>
        <div className="md:w-1/2 p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprar artículo</h2>
            <p className="text-lg text-gray-600">Este artículo deseas comprar</p>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-2 gap-4">
              <button
                className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white ${selectedPaymentMethod === 'paypal' ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                onClick={() => handlePaymentMethodChange('paypal')}
              >
                PayPal
              </button>
              <button
                className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white ${selectedPaymentMethod === 'mercadopago' ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                onClick={() => handlePaymentMethodChange('mercadopago')}
              >
                Mercado Pago
              </button>
              <button
                className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white ${selectedPaymentMethod === 'creditcard' ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                onClick={() => handlePaymentMethodChange('creditcard')}
              >
                Tarjeta de Crédito/Débito
              </button>
              <button
                className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white ${selectedPaymentMethod === 'visa' ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                onClick={() => handlePaymentMethodChange('visa')}
              >
                Visa
              </button>
            </div>
          </div>
          {selectedPaymentMethod && (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-semibold text-gray-900">Número de tarjeta</label>
                  <input type="text" name="cardNumber" id="cardNumber" value={formData.cardNumber} onChange={handleInputChange} className="mt-1 block w-full rounded-lg border border-black px-3 py-2 text-gray-900 focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="cardName" className="block text-sm font-semibold text-gray-900">Nombre de la tarjeta</label>
                  <input type="text" name="cardName" id="cardName" value={formData.cardName} onChange={handleInputChange} className="mt-1 block w-full rounded-lg border border-black px-3 py-2 text-gray-900 focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="expirationDate" className="block text-sm font-semibold text-gray-900">Fecha de expiración</label>
                  <input type="date" name="expirationDate" id="expirationDate" value={formData.expirationDate} onChange={handleInputChange} className="mt-1 block w-full rounded-lg border border-black px-3 py-2 text-gray-900 focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-semibold text-gray-900">CVV</label>
                  <input type="text" name="cvv" id="cvv" value={formData.cvv} onChange={handleInputChange} className="mt-1 block w-full rounded-lg border border-black px-3 py-2 text-gray-900 focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50" />
                </div>
              </div>
              <Link to="/Compras">
                <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Aceptar</button>
              </Link>
            </form>
          )}
          {!selectedPaymentMethod && (
            <div className="mt-6 col-span-2">
              <Link to="/Compras">
                <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Aceptar</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

