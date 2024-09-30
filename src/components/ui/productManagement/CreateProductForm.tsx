/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useCreateProductMutation } from "../../../redux/features/product/productApi";
import handleImageUpload from "../../../utils/handleImageUpload";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const CreateProductForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [createProduct] = useCreateProductMutation();

  const onSubmit = async (data: any) => {
    const file = data.image[0];
    const imageData = await handleImageUpload(file);
    const image = imageData?.display_url;

    const { name, price, category, description, stock } = data;
    const product = {
      name: name,
      price: price,
      category: category,
      description: description,
      stock: stock,
      image: image,
    };
    await createProduct(product);
    toast.success("Product created successfully");
    navigate("/products/management");
  };
  return (
    <>
      <div className="mb-8 p-4">
        <div className=" md:w-3/4 md:mx-auto">
        <h1 className="text-4xl font-bold ml-6 mt-3 text-center text-gray-500">Create Product</h1>
          <div className="mt-10">
            <div className="bg-base-100 w-full h-full shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    {...register("price")}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    {...register("description")}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <select
                    {...register("category")}
                    className="select select-bordered w-full max-w-xs"
                    required
                  >
                    <option disabled selected>
                      Select Category
                    </option>
                    <option>Accessories</option>
                    <option>Gym Equipment</option>
                    <option>Cardio Equipment</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Stock</span>
                  </label>
                  <input
                    type="number"
                    {...register("stock")}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="file"
                    className="w-full px-3 py-2 border rounded"
                    {...register("image")}
                    required
                  />
                </div>
                <div className="form-control mt-6 w-1/4">
                  <button className="inline-block px-8 py-3 bg-gray-600 hover:bg-gray-800 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProductForm;