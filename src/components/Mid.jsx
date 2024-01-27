import logo from "../assets/logo.svg";

const Mid = () => {
  return (
    <section className="relative w-full z-10 bg-[#FFE7B9]">
      <img
        className="w-full absolute top-[88px] left-[-205px] max-w-full overflow-hidden h-[13.34rem] object-contain opacity-[0.62]"
        alt="vadapav"
        src="https://cdn.discordapp.com/attachments/1096324843877703713/1200515533393625189/image.png?ex=65c67637&is=65b40137&hm=948d48dbbed9972d6cfb5f162b1cef0a9b2d32c0fe26b92e55dceffba430a264&"
      />
      <img
        className="absolute  w-[200%] h-[34.75rem]  z-[-10] left-[-1px] top-[123px]"
        src="https://cdn.discordapp.com/attachments/1096324843877703713/1200599106100396192/image.png?ex=65c6c40c&is=65b44f0c&hm=7b36005e7b8456acc9fa39979fa622c2c041f415a028e4ca53a986ccd4d7b5b8&"
        alt=""
      />
      <img
        className="w-full absolute left-[190px] top-[70px] max-w-full overflow-hidden h-[13.88rem] object-contain opacity-[0.62]"
        alt=""
        src="https://cdn.discordapp.com/attachments/1096324843877703713/1200515577555460116/image.png?ex=65c67642&is=65b40142&hm=b59dc90c24fee1d47bc983559fe037e64490c161c30acf6f2a22a356705522a9&"
      />
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
