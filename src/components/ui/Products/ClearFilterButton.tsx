import { clearFilters } from "../../../redux/features/filter/filterSlice";
import { useAppDispatch } from "../../../redux/hooks";

const ClearFilterButton = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <button
        className="inline-block px-8 py-3 bg-gray-600 hover:bg-gray-800 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        onClick={() => dispatch(clearFilters())}
      >
        Clear Filters
      </button>
    </>
  );
};

export default ClearFilterButton;
