/* eslint-disable @typescript-eslint/no-explicit-any */
const CategoryCard = ({ image, name }: any) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-500 hover:rotate-1 hover:scale-105 hover:shadow-2xl">
      <img className="w-full h-48 object-cover transform transition duration-500 hover:scale-110" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{name}</div>
      </div>
    </div>
  );
};

export default CategoryCard;