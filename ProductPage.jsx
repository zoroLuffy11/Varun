import React from 'react';
import productImage from './assets/product.png';

const ProductPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 ml-4">Mailer Boxes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={productImage} alt="Product" className="w-full h-auto rounded-md"/>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Enter Dimensions</h3>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="length">
                  Length
                </label>
                <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="length" type="text"/>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="width">
                  Width
                </label>
                <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="width" type="text"/>
              </div>
            </div>
            <div className="mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="material-type">
                Material Type
              </label>
              <div className="relative">
                <select className="block w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="material-type">
                  <option>Cardboard</option>
                  <option>Plastic</option>
                  <option>Metal</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-xl font-semibold text-gray-900">Price: Rs.6000</span>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition duration-200">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
