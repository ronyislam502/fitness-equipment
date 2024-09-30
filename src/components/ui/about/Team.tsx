const Team = () => {
  return (
    <div className="mt-24 ">
      <div>
        <div className="flex justify-center text-center text-4xl mb-14">
          <h1 className="font-semibold mb-10 italic">Honorable Team</h1>
        </div>
        {/* <div className="w-9/12 mx-auto mb-10">
          <hr className="border-t-2 border-gray-300" />
        </div> */}
        <div className=" lg:flex lg:justify-evenly grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 items-center">
          <div className="avatar indicator">
            <span className="indicator-item badge badge-secondary h-12 p-5">
              Mr. Micheal Brook
              <br />
              CEO of FitFlex Essentials
            </span>
            <div className="h-32 w-9/12 mx-auto rounded-lg">
              <img
                alt="Tailwind CSS examples"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>

          <div className="avatar indicator">
            <span className="indicator-item badge badge-secondary h-12 p-5">
              Will Jack
              <br />
              Managing Director
            </span>
            <div className="h-32 w-32 rounded-lg">
              <img
                alt="Tailwind CSS examples"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>

          <div className="avatar indicator">
            <span className="indicator-item badge badge-secondary h-12 p-5">
              Christina
              <br />
              Product Manager
            </span>
            <div className="h-32 w-32 rounded-lg">
              <img
                alt="Tailwind CSS examples"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>
        <div className="w-9/12 mx-auto mt-10">
          <hr className="border-t-2 border-gray-300" />
        </div>
      </div>
      <div className="w-9/12 mx-auto mt-7">
        <h1 className="text-center text-slate-400">
          At FitFlex, we pride ourselves on having a dynamic and dedicated team
          committed to revolutionizing the fitness industry. Our leadership is
          driven by a shared vision of innovation, quality, and exceptional
          customer service. With a diverse range of expertise and a relentless
          passion for fitness, we work collaboratively to push the boundaries of
          what’s possible, ensuring that our products and services consistently
          exceed expectations and set new standards in the market.
        </h1>
      </div>
    </div>
  );
};

export default Team;
