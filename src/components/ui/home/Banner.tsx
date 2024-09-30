import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);
  return (
    <div className="relative  text-gray-700 overflow-hidden h-screen">
      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl russo-one-regular  text-gray-700 md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Welcome to FitFlex Essentials
            </h1>
            <p className="text-lg  md:text-xl lg:text-2xl mb-8">
              Your one-stop shop for premium gym equipment and accessories.
              Elevate your fitness journey with our top-quality products.
            </p>

            <NavLink
              to={"/products"}
              className="inline-block px-8 py-3 bg-gray-600 hover:bg-gray-800 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Shop Now
            </NavLink>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <img
              className={`w-full lg:w-10/12 h-auto bg-slate-100  object-cover rounded-lg  transition-transform duration-300  transform hover:scale-110 z-10  ${
                isVisible ? "opacity-100 animate-pulse " : "opacity-0"
              }`}
              src="https://img.freepik.com/free-vector/set-sport-emblems-labels-badges-logos_1284-46567.jpg?t=st=1720803295~exp=1720806895~hmac=a8d096c60f177c42c37903069eb6c85c7ba61cf25627c1f1cb5d109523cb6dc1&w=740" 
              alt="FitFlex Gym Equipment"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-50 "></div>{" "}
      {/* Background image */}
    </div>
  );
};

export default Banner;
