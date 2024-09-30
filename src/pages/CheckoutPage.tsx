/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useCreateOrderMutation } from "../redux/features/order/orderApi";
import { useForm } from "react-hook-form";
import { RootState } from "../redux/store";
import { clearCart } from "../redux/features/cart/cartSlice";
import { toast } from "sonner";
import CheckoutForm from "../components/ui/checkout/CheckoutForm";

const CheckoutPage = () => {
  const navigate = useNavigate();
  //grab cart data from local state
  const cart = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  const [createOrder] = useCreateOrderMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const order = {
      userDetails: data,
      cartItems: cart.items,
    };
    try {
      // creating order
      await createOrder(order);
      dispatch(clearCart());
      toast.success("Order confirmed");
      navigate("/products/success");
    } catch (err) {
      toast.error("Something went wrong");
      console.error("Failed to place the order:", err);
      alert("Failed to place the order. Please try again.");
    }
  };
  return (
    <>
      <CheckoutForm
        handleSubmit={handleSubmit}
        register={register}
        cart={cart}
        onSubmit={onSubmit}
      ></CheckoutForm>
    </>
  );
};

export default CheckoutPage;