import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
        {/* Header Section */}
        <div className="text-center mb-8 pb-6 border-b border-gray-200">
          <h1 className=" text-4xl font-black text-gray-800 tracking-tight">
            Shopping Cart
            <span className=" w-16 h-1 mx-auto mt-2 rounded-full ml-3 text-sm font-medium text-gray-400 uppercase tracking-widest">
              ({cartItems.length} Items)
            </span>
          </h1>

          {cartItems.length > 0 && (
            <div className="flex justify-end mb-4">
              <button
                onClick={handleClearCart}
                className="px-6 py-2 bg-red-50 text-red-600 font-bold rounded-xl border border-red-100 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 active:scale-95 shadow-sm"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>

        {/* Cart Content */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Your cart is empty
              </h2>
              <p className="text-gray-500 mb-10 text-lg">
                Looks like you haven't added anything to your cart yet.
              </p>
              <button
                className="px-12 py-5 bg-indigo-600 text-white text-lg font-black rounded-2xl shadow-2xl shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Browse Restaurants
              </button>
            </div>
          ) : (
            <div className="p-4 md:p-8">
              <ItemList items={cartItems} />

              {/* Order Summary Stub */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-500 font-medium">
                    Total Amount
                  </span>
                  <span className="text-2xl font-black text-gray-800">
                    ₹
                    {cartItems
                      .reduce(
                        (acc, curr) =>
                          acc +
                          (curr.card.info.price ||
                            curr.card.info.defaultPrice) /
                            100,
                        0,
                      )
                      .toFixed(2)}
                  </span>
                </div>
                <button className="w-full py-4 bg-green-600 text-white font-black text-lg rounded-2xl shadow-lg shadow-green-200 hover:bg-green-700 transition-all active:scale-[0.98] uppercase tracking-wider">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
