import { setSort } from "../../../redux/features/filter/filterSlice";
import { useAppDispatch } from "../../../redux/hooks";

const Sorting = () => {
  const dispatch = useAppDispatch();
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "asc") {
      dispatch(setSort({ sort: "-price" }));
    }
    if (event.target.value === "desc") {
      dispatch(setSort({ sort: "price" }));
    }
  };
  return (
    <>
      <div className="mt-4">
        <label className="mr-2">Sort By Price</label>
        <select
          className="select select-bordered"
          // value={sort}
          onChange={handleSortChange}
        >
          <option value="">Price</option>
          <option value="asc">High to Low</option>
          <option value="desc">Low to High</option>
        </select>
      </div>
    </>
  );
};

export default Sorting;