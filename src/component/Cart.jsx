import React from "react";

const Cart = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Shopping Cart
        </h1>

        <p className="text-gray-600 mb-6">
          Your selected items will appear here.
        </p>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
          <p className="text-gray-500">🛒 Your cart is currently empty</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;