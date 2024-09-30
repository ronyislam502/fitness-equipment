/* eslint-disable @typescript-eslint/no-explicit-any */

const Hero = ({ title, locationFrom }: any) => {
  return (
    <div className="bg-slate-600 text-white w-full h-[280px] flex items-center px-5">
      <div className="">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="font-semibold">{locationFrom}</p>
      </div>
    </div>
  );
};

export default Hero;
