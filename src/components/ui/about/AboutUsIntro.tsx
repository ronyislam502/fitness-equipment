const AboutUsIntro = () => {
  return (
    <div className=" flex justify-between px-3">
      <div className="w-[420px] mt-28 px-3">
        <div className="">
          <div className="avatar flex justify-center">
            <div className="w-20 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <h1 className="text-2xl font-semibold text-center mt-2">Why FitFlex Essentials?</h1>
          <p className="text-center text-slate-400 text-sm mt-2">
            Offers top-quality products designed to enhance your athletic
            performance. We prioritize innovation and functionality in every
            item we offer. You receive reliable and durable gear
          </p>
        </div>
      </div>
      <div className=" z-10 mt-[-170px]">
        <img
          className="rounded-lg "
          src="https://space.xtemos.com/demo/athletex/wp-content/uploads/sites/33/2024/04/athletex-sport-au-top-img-opt.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUsIntro;
