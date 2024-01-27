import logo from "../assets/logo.svg";

const Mid = () => {
  return (
    <section className="relative w-full bg-[#FFE7B9]">
      <div className="py-[56px]">
        <img
          className="w-[215px] h-[111px] object-contain mx-auto"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="w-fit mx-auto mt-[66px]">
        <b className="w-[22.75rem]  relative text-[1.63rem] inline-block font-inter text-darkslategray text-center">
          {`Build from `}
          <span className="[text-decoration:line-through]">Mumbai</span> Bombay,
          for the World.
        </b>
      </div>
      <div className="w-fit mx-auto">
        <div className="w-[16.84rem] mt-[17px] font-thin relative text-[1.38rem]  text-darkslategray1 text-center ">{`29th - 31st March 2024 `}</div>
      </div>

      <div className="w-[210px] mx-auto mt-[106px] relative rounded-[40px] bg-white box-border h-[4.19rem] overflow-hidden text-left text-[1.13rem] text-black font-inter border-[0.3px] border-solid border-darkgray">
        <div className="absolute top-[1.38rem] left-[2.75rem] font-medium">
          Register Now!
        </div>
      </div>
    </section>
  );
};

export default Mid;
