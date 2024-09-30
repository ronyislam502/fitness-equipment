import { NavLink } from "react-router-dom";

const SuccessPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Order Placed!
          </h1>
          <p className="text-gray-700 mb-6">
            Thank you for your purchase. Your order has been successfully
            placed.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
            <NavLink to="/">
              <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
                Go to Homepage
              </button>
            </NavLink>
            <NavLink to="/products">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                Continue Shopping
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;