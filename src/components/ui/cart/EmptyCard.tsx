import { NavLink } from "react-router-dom";

const EmptyCard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-gray-700 mb-6">
            Looks like you haven't added anything to your cart yet. Browse our
            products and find something you like!
          </p>
          <div className="flex justify-center">
            <NavLink to={"/products"}>
              <button
                // onClick={handleGoToProducts}
                className="inline-block px-8 py-3 bg-gray-600 hover:bg-gray-800 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Shop Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCard;
