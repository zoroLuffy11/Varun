import React from 'react';
import bannerImage from './assets/UP_Home_Page_Banner_June_Desktop.jpg';
import cardImage from './assets/product.png';
import adImage from './assets/ad.jpg';
import chatIcon from './assets/chat.png';

export const Product = () => {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet"/>
      
      <div className="h-52 w-full bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage})` }}></div>
      
      {['Boxes', 'Apparel', 'Postcards', 'Labels'].map((category, index) => (
        <div key={index} className="flex justify-center items-center my-8">
          {/* Update the grid layout here to be responsive */}
          {/* sm:grid-cols-1 makes sure that on small screens and up it shows 1 item per row */}
          {/* md:grid-cols-2 for medium screens to show 2 items per row, adjust as needed */}
          {/* lg:grid-cols-3 for larger screens to show 3 items per row, original setting */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center">
                {/* Adjusted sizes for larger cards */}
                <div className="h-80 w-64 bg-gray-200 rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url(${cardImage})` }}></div>
                <div className="text-white font-bold mt-4">{category}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="flex justify-center items-center my-8">
        <div className="h-48 w-3/4 bg-gray-200 rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url(${adImage})` }}></div>
      </div>

      <button className="fixed bottom-4 right-4 h-10 w-40 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg">
        <div className="bg-contain bg-no-repeat w-6 h-6 mr-2" style={{ backgroundImage: `url(${chatIcon})` }}></div>
        Live Chat
      </button>
    </>
  );
};
