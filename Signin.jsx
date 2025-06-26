import React, { useState } from 'react';
// Ensure you have the correct path to your project's Tailwind CSS file

const Signin = () => {
  // State for managing the checkbox
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setKeepLoggedIn(!keepLoggedIn);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container max-w-md mx-auto p-8 border-2 border-black bg-white rounded-lg shadow-xl">
        <div className="flex flex-col w-full h-full text-center">
          <h3 className="mb-4 text-4xl font-extrabold text-gray-900">Sign In</h3>
          <p className="mb-6 text-gray-700">Enter your email and password</p>

          <label htmlFor="email" className="mb-2 text-sm text-gray-900 text-start">Email*</label>
          <input id="email" type="email" placeholder="mail@loopple.com"
            className="mb-4 px-4 py-3 w-full bg-gray-200 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500" />

          <label htmlFor="password" className="mb-2 text-sm text-gray-900 text-start">Password*</label>
          <input id="password" type="password" placeholder="Enter a password"
            className="mb-6 px-4 py-3 w-full bg-gray-200 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500" />

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                checked={keepLoggedIn} onChange={handleCheckboxChange} />
              <span className="ml-2 text-sm text-gray-900">Keep me logged in</span>
            </label>
            <a href="#" className="text-sm text-purple-600 hover:underline">Forget password?</a>
          </div>

          <button className="py-3 w-full text-sm font-bold text-white bg-purple-500 rounded-xl hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
            Sign In
          </button>
          <p className="mt-4 text-sm text-gray-900">Not registered yet? <a href="#" className="font-bold text-purple-600 hover:underline">Create an Account</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
