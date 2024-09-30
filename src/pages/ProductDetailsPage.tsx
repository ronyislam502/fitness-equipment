import { useParams } from "react-router-dom";
// import { useGetSpecificProductQuery, useUpdateProductMutation } from "../redux/api/baseApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { toast } from "sonner";
import { setToCart } from "../redux/features/cart/cartSlice";
import { useGetSpecificProductQuery } from "../redux/features/product/productApi";
import ProgressBar from "../components/ui/global/ProgressBar";
import ErrorPage from "../components/ui/global/ErrorPage";
import ProductDetailsCard from "../components/ui/productDetailsPage/ProductDetailsCard";


const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSpecificProductQuery(id);
  // destructure single product
  const product = data?.data;
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart);

  if (isLoading) {
    return <ProgressBar></ProgressBar>;
  }

  if (error) {
    return <ErrorPage></ErrorPage>;
  }

  // find matching cart item
  const cartItem = cart.items.find((item) => item._id === product._id);
  //check is the product out of stock or not
  const isProductOutOfStock = cartItem
    ? cartItem.quantity >= product.stock
    : false;

  const handleAddToCart = async () => {
    if (!isProductOutOfStock) {
      dispatch(setToCart(product));
      toast.success("Successfully added cart!");
    }
  };

  return (
    <>
      <ProductDetailsCard
        product={product}
        handleAddToCart={handleAddToCart}
        isProductOutOfStock={isProductOutOfStock}
      ></ProductDetailsCard>
    </>
  );
};

export default ProductDetailsPage;
