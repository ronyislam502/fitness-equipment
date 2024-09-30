/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { TCartInitialState } from "../../../types";
import { PersistPartial } from "redux-persist/lib/persistReducer";

type TCheckoutFormProps = {
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  register: UseFormRegister<FieldValues>;
  cart: TCartInitialState & PersistPartial;
  onSubmit: (data: any) => Promise<void>;
};

const CheckoutForm = ({
  handleSubmit,
  register,
  cart,
  onSubmit,
}: TCheckoutFormProps) => {
  return (
    <>
    <div className="bg-slate-600 text-white w-full h-[280px] flex items-center px-5 mb-10">
        <div className="">
          <h1 className="text-5xl font-bold">C H E C K O U T</h1>
          <p className="font-semibold mt-3">Home / Checkout</p>
        </div>
      </div>
      <div className="mb-8 p-4">
        <div className=" md:w-3/4 md:mx-auto">
         
          <div>
            <div className="bg-base-100 w-full h-full shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-3xl text-gray-700 russo-one-regular font-bold ml-6 mt-3 text-center">Fill The Form to Confirm Order</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    {...register("phone")}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">address</span>
                  </label>
                  <input
                    type="text"
                    {...register("address")}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-bold mb-2">Payment Method</h2>
                  <div>
                    <label className="block mb-2">
                      <input
                        type="radio"
                        value="cash"
                        {...register("paymentMethod")}
                        className="mr-2"
                        required
                      />
                      Cash on Delivery
                    </label>
                  </div>
                </div>
                <div className="form-control mt-6 w-1/4">
                  <button
                    disabled={cart.items.length === 0}
                    className="inline-block px-8 py-3 bg-gray-600 hover:bg-gray-800 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;