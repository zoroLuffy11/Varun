import React from 'react';

// Assuming productImage1 and productImage2 are your actual image paths
import productImage1 from './assets/product.png'; // Update with your actual image path
 // Update with your actual image path

const Cart = () => {
  return (
    <div className="bg-gray-100 pt-20 min-h-screen">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-center px-6 xl:px-0 gap-x-6">
        {/* Cart Item 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between mb-6">
          <img src={productImage1} alt="Nike Air Max 2019" className="w-full sm:w-40 rounded-lg" />
          <div className="sm:ml-4 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mt-4 sm:mt-0">Nike Air Max 2019</h2>
              <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
            </div>
            <div className="flex items-center mt-4">
              <button className="rounded-l bg-gray-100 py-1 px-3.5 text-gray-800 hover:bg-blue-500 hover:text-white">-</button>
              <input type="number" className="h-8 w-16 text-center border-t border-b border-gray-300" defaultValue="2" />
              <button className="rounded-r bg-gray-100 py-1 px-3.5 text-gray-800 hover:bg-blue-500 hover:text-white">+</button>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <p className="text-sm">259.000 ₭</p>
            <button className="text-gray-400 hover:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cart Item 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between">
          <img src={productImage1} alt="Nike Air Max 2020" className="w-full sm:w-40 rounded-lg" />
          <div className="sm:ml-4 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mt-4 sm:mt-0">Nike Air Max 2020</h2>
              <p className="mt-1 text-xs text-gray-700">38EU - 6US</p>
            </div>
            <div className="flex items-center mt-4">
              <button className="rounded-l bg-gray-100 py-1 px-3.5 text-gray-800 hover:bg-blue-500 hover:text-white">-</button>
              <input type="number" className="h-8 w-16 text-center border-t border-b border-gray-300" defaultValue="1" />
              <button className="rounded-r bg-gray-100 py-1 px-3.5 text-gray-800 hover:bg-blue-500 hover:text-white">+</button>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <p className="text-sm">299.000 ₭</p>
            <button className="text-gray-400 hover:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Subtotal Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6 md:mt-0 md:w-1/3">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Subtotal</h2>
            <span className="text-lg text-gray-900">$558.000</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-md text-gray-900">Shipping</span>
            <span className="text-md text-gray-900">$20.00</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <h2 className="text-xl font-bold text-gray-900">Total</h2>
            <span className="text-xl font-bold text-gray-900">$578.000</span>
          </div>
          <button className="w-full bg-blue-500 text-white rounded-md py-2 mt-6 hover:bg-blue-600">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
