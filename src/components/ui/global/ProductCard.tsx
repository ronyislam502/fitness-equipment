/* eslint-disable @typescript-eslint/no-explicit-any */
const ProductCard = ({ name, image, price, handleViewDetails, _id }: any) => {
  return (
    <div className="w-80 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
      <img
        className="w-full h-48 object-cover object-center"
        src={image}
        alt={name}
      />
      <div className="p-4 text-center">
        <h3 className="font-semibold text-gray-800 text-2xl mb-2">{name}</h3>
        <p className="text-gray-600 text-lg  md:text-xl lg:text-2xl mb-6">${price}</p>
        <div className="mt-3 flex justify-center">
          <button onClick={() => handleViewDetails(_id)} className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
