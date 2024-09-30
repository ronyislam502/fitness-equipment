import { useNavigate } from "react-router-dom";
// import { useGetProductsQuery } from "../../../redux/api/baseApi";
import { TProduct } from "../../../types";
import ProductCard from "../global/ProductCard";
import { useGetProductsQuery } from "../../../redux/features/product/productApi";

const Featured = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsQuery({ undefined });

  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate("/products");
  };

  const handleViewDetails = (id: string) => {
    navigate(`/products/details/${id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading featured products</div>;
  return (
    <>
      <div className="">
      <h2 className="text-5xl text-center font-bold mb-10 russo-one-regular text-gray-700 mt-16">
        Featured
      </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-28 gap-5">
            {products?.data?.slice(0, 3).map((product: TProduct) => (
              <ProductCard
                _id={product._id}
                handleViewDetails={handleViewDetails}
                name={product.name}
                image={product.image}
                price={product.price}
              ></ProductCard>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <button
            onClick={handleExploreMore}
            className="inline-block px-8 py-3 lg:mt-16 bg-gray-600 hover:bg-gray-800 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Explore More
          </button>
        </div>
      </div>
    </>
  );
};

export default Featured;
