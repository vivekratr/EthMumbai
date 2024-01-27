import logo from "../assets/logo.svg";
import React from "react";

const Mid = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const bgImageSmall = 'https://cdn.discordapp.com/attachments/1096324843877703713/1200599106100396192/image.png?ex=65c6c40c&is=65b44f0c&hm=7b36005e7b8456acc9fa39979fa622c2c041f415a028e4ca53a986ccd4d7b5b8&'
  const bgImageLarge = 'https://cdn.discordapp.com/attachments/1096324843877703713/1200667150684274758/image.png?ex=65c7036c&is=65b48e6c&hm=b903aa59cbf024525b6f233d6021a67ae7617daa8018ee7e9de4e2b0ef3be204&'
  const vadapavSM ='https://cdn.discordapp.com/attachments/1096324843877703713/1200515533393625189/image.png?ex=65c67637&is=65b40137&hm=948d48dbbed9972d6cfb5f162b1cef0a9b2d32c0fe26b92e55dceffba430a264&'
  const vadapavLG ='https://cdn.discordapp.com/attachments/1096324843877703713/1200669553290661988/image.png?ex=65c705a8&is=65b490a8&hm=a60019827cd6c5cb49fadbc97b57170de8eda1288e5e20e3cc251c6dd74ec851&'
  const chaiSM='https://cdn.discordapp.com/attachments/1096324843877703713/1200515577555460116/image.png?ex=65c67642&is=65b40142&hm=b59dc90c24fee1d47bc983559fe037e64490c161c30acf6f2a22a356705522a9&'
  const chaiLG='https://cdn.discordapp.com/attachments/1096324843877703713/1200675000554901514/image.png?ex=65c70abb&is=65b495bb&hm=1f1f97369812429c98de662861d2946282e291ddb16e58f58581bb3ea55fb612&'
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const isLargeDevice = windowWidth >= 768;
  return (
    <section className="relative overflow-hidden w-full z-10 bg-[#FFE7B9]">
      <img
        className="w-full lg:w-[508px] absolute top-[88px] lg:top-[221px] lg:left-[-187px] left-[-205px] max-w-full overflow-hidden h-[13.34rem] lg:h-[324px] object-contain lg:object-cover lg:opacity-[1] opacity-[0.62]"
        alt="vadapav"
        // src="https://cdn.discordapp.com/attachments/1096324843877703713/1200515533393625189/image.png?ex=65c67637&is=65b40137&hm=948d48dbbed9972d6cfb5f162b1cef0a9b2d32c0fe26b92e55dceffba430a264&"
        src={isLargeDevice ? vadapavLG : vadapavSM}
      />
      <img
        className="absolute lg:object-fill lg:w-[1760px] lg:h-[760px] w-[200%] h-[34.75rem]  z-[-10] left-[-1px] lg:left-[-1px] top-[123px] lg:top-[2.25rem]"
        src={isLargeDevice ? bgImageLarge : bgImageSmall}
        // src="https://cdn.discordapp.com/attachments/1096324843877703713/1200599106100396192/image.png?ex=65c6c40c&is=65b44f0c&hm=7b36005e7b8456acc9fa39979fa622c2c041f415a028e4ca53a986ccd4d7b5b8&"
        alt="bg"
      />
      <img
        className="w-full lg:w-[409px] absolute lg:left-[1233px] left-[190px]  top-[70px] lg:top-[165px] max-w-full overflow-hidden h-[13.88rem] lg:h-[409px] object-contain opacity-[0.62] lg:opacity-[0.9]"
        alt="chai"
        src={isLargeDevice ? chaiLG : chaiSM}

        // src="https://cdn.discordapp.com/attachments/1096324843877703713/1200515577555460116/image.png?ex=65c67642&is=65b40142&hm=b59dc90c24fee1d47bc983559fe037e64490c161c30acf6f2a22a356705522a9&"
      />
      <div className="py-[56px] lg:py-0 lg:mt-[69px]">
        <img
          className="w-[215px] h-[111px] lg:w-[295px] lg:h-[137px] object-contain mx-auto"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="w-fit mx-auto mt-[66px] lg:mt-[64px]">
        <b className="w-[22.75rem] lg:w-[45.31rem]  relative text-[1.63rem] lg:text-[3.06rem] inline-block font-inter text-darkslategray lg:text-[#3b3b3b] text-center">
          {`Build from `}
          <span className="[text-decoration:line-through]">Mumbai</span> Bombay,
          for the World.
        </b>
      </div>
      <div className="w-fit mx-auto">
        <div className="w-[16.84rem] lg:w-[20.31rem] mt-[17px] font-thin relative text-[1.38rem] lg:text-[1.81rem] lg:text-[#767676]  text-darkslategray1 text-center ">{`29th - 31st March 2024 `}</div>
      </div>

      <div className="w-[210px] mb-[88.6px] mx-auto mt-[106px] lg:mt-[140px] relative rounded-[40px] bg-white box-border h-[4.19rem] overflow-hidden text-left text-[1.13rem] text-black  font-[500] border-[0.3px] border-solid border-darkgray">
        <div
          style={{ fontWeight: 700 }}
          className="absolute top-[1.38rem] left-[2.75rem] font-inter font-300"
        >
          Register Now!
        </div>
      </div>
    </section>
  );
};

export default Mid;
