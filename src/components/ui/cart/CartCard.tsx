import { NavLink } from "react-router-dom";
import { TCartInitialState } from "../../../types";
import EmptyCard from "./EmptyCard";

type TCartCardProps = {
  cart: TCartInitialState;
  handleUpdateQuantity: (id: string, quantity: number) => void;
  handleRemoveFromCart: (id: string) => void;
  totalPrice: () => number;
};

const CartCard = ({
  cart,
  handleUpdateQuantity,
  handleRemoveFromCart,
  totalPrice,
}: TCartCardProps) => {
  return (
    <>
      <div className=" p-4 my-8 h-screen">
        {!(cart.items.length === 0) ? (
          <h2 className="text-5xl text-center font-bold mb-10 russo-one-regular text-gray-700 mt-16">
            Your Cart 
          </h2>
        ) : (
          ""
        )}
        {cart.items.length === 0 ? (
          <EmptyCard></EmptyCard>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="table-auto w-full mb-4">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Total</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.items.map((item) => (
                    <tr key={item._id}>
                      <td className="border px-4 py-2">{item.name}</td>
                      <td className="border px-4 py-2">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="border px-4 py-2">
                        <div className="flex items-center justify-center">
                          <button
                            className="inline-block px-3 py-1 bg-gray-600 hover:bg-gray-800 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                            onClick={() =>
                              handleUpdateQuantity(item._id as string, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="inline-block px-3 py-1 bg-gray-600 hover:bg-gray-800 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                            onClick={() =>
                              handleUpdateQuantity(item._id as string, item.quantity + 1)
                            }
                            disabled={item.quantity >= item.stock}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="border px-4 py-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="border px-4 py-2">
                        <button
                          className="btn btn-error btn-xs"
                          onClick={() => handleRemoveFromCart(item._id as string)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <h2 className="text-2xl mb-2 sm:mb-0">
                Total: ${totalPrice().toFixed(2)}
              </h2>
              <NavLink to="/products/checkout">
                <button className="inline-block px-8 py-3 bg-gray-600 hover:bg-gray-800 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">Proceed to Checkout</button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartCard;
