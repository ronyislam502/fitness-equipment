import { removeCategory, setCategory } from "../../../redux/features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { categoriesArr } from "../../../utils/categoriesArr";

const Category = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state: RootState) => state.filters);
  const handleCategoryChange = (category: string) => {
    if (categories.includes(category)) {
      dispatch(removeCategory(category));
    } else {
      dispatch(setCategory(category));
    }
  };
  return (
    <>
      <div className="flex space-x-4 mt-4">
        {categoriesArr.map((category) => (
          <label key={category.name} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="checkbox"
              onChange={() => handleCategoryChange(category.name)}
            />
            <span>{category.name}</span>
          </label>
        ))}
      </div>
    </>
  );
};

export default Category;