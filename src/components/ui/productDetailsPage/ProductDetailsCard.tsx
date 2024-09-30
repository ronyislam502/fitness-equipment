import  { useState } from 'react';
import { TProduct } from '../../../types';

type TProductDetailsProps = {
  product: TProduct;
  handleAddToCart: () => void; // Adjust return type as needed
  isProductOutOfStock: boolean;
};

const ProductDetailsCard = ({
  product,
  handleAddToCart,
  isProductOutOfStock,
}: TProductDetailsProps) => {
  // State to track the updated stock
  const [updatedStock, setUpdatedStock] = useState<number>(product.stock);

  // Handler to update stock and call handleAddToCart
  const handleAddToCartClick = () => {
    if (!isProductOutOfStock) {
      // Example: Assuming handleAddToCart updates stock in a backend or state
      handleAddToCart();
      setUpdatedStock(updatedStock - 1); // Adjust as per your logic
    }
  };

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl mb-8">
        <figure>
          <img
            className="w-full md:h-96"
            src={product.image}
            alt={product.name}
          />
        </figure>
        <div className="card-body">
          <h1 className="text-3xl font-bold mb-0">{product.name}</h1>
          <p className="text-xl mb-0">Price: ${product.price}</p>
          <p className="mb-0">Stock: {updatedStock}</p> {/* Use updatedStock here */}
          <p className="mb-0">Description: {product.description}</p>
          <div className="card-actions justify-end">
            <button
              className={`btn inline-block px-8 py-3 bg-gray-600 hover:bg-gray-800 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 ${
                isProductOutOfStock ? 'btn-disabled' : 'btn'
              }`}
              onClick={handleAddToCartClick} 
              disabled={isProductOutOfStock}
            >
              {isProductOutOfStock ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsCard;
