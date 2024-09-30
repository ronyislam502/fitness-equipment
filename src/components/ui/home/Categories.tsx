import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../../redux/hooks";
import { selectCategory } from "../../../redux/features/category/categorySlice";
import { categoriesArr } from "../../../utils/categoriesArr";

// import { getUniqueCategoriesByName } from "../../../utils/getUniqueCategories";

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCategoryClick = (category: string) => {
    navigate("/products"), dispatch(selectCategory(category));
  };

  // const categories = products ? getUniqueCategoriesByName(products?.data) : [];

  return (
    <div className="w-11/12 mx-auto lg:h-[500px]">
      <h2 className="text-5xl text-center font-bold mb-6 russo-one-regular text-gray-700 mt-16">
        Categories
      </h2>
      <p className="text-gray-600 text-lg  md:text-xl lg:text-2xl mb-12 text-center ">
        Discover our diverse range of premium products at FitFlex Essentials.
        Explore top-quality gym equipment for strength training, cutting-edge
        cardio equipment for endurance, and essential gym accessories to enhance
        your workout experience. Elevate your fitness journey with our expertly
        curated categories designed to meet all your fitness needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoriesArr?.map((category, index) => (
          <div
            key={index}
            className="cursor-pointer border p-4"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="w-full h-48 flex items-center justify-center transform transition duration-500 hover:rotate-1 hover:scale-105 hover:shadow-2xl">
              {/* <span className="text-xl">{category.name}</span> */}
              <img
                className=" w-full h-48 object-cover transform transition duration-500 hover:scale-110"
                src={category.image}
                alt={category.name}
              />
            </div>
            <h2 className="text-center mt-2 text-gray-600 text-lg  md:text-xl lg:text-xl text-semibold">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
