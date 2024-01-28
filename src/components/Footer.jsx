import React from "react";
const Footer = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const imgSM =
    "https://cdn.discordapp.com/attachments/1096324843877703713/1200679658627280966/image.png?ex=65c70f12&is=65b49a12&hm=cb9f1263cab47830b0e9f2a1ea46dc35ae6b4876baea2de89290af193e8a6650&";
  const imgLG =
    "https://cdn.discordapp.com/attachments/1096324843877703713/1200680738283065395/image.png?ex=65c71013&is=65b49b13&hm=6a52197b9fff3228af9a255173ad29fc76ae125fb7b68885d1cdb7f97486c808&";

  const handleTweetClick = () => {
    const twitterShareUrl = "https://twitter.com/intent/tweet";

    const tweetText = encodeURIComponent(`
    
    Just saw this crazy website designed and developed 
    by @myself_eth_ and @vivekratr  
    For @ethmumbai
    Check it out !!!!
    https://ethmumbai.netlify.app/
    `);
    // const tweetImage = encodeURIComponent("URL_of_your_image.jpg"); // Replace with the URL of your image

    const finalUrl = `${twitterShareUrl}?text=${tweetText}`;

    window.location.href = finalUrl;
  };

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isLargeDevice = windowWidth >= 768;
  return (
    <section className="relative bg-[#FFE7B9] overflow-hidden">
      <img
        className="min-w-[563px] w-full lg:w-[800px] lg:h-[820px] lg:left-[-40px] h-[766px] absolute bottom-0  "
        src={isLargeDevice ? imgLG : imgSM}
        // src={imgSM}
        alt="train"
      />

      <img
        className="w-[814px] hidden lg:block absolute   h-[834px]  bottom-0  right-0 "
        src="https://cdn.discordapp.com/attachments/1096324843877703713/1200680785091510322/image.png?ex=65c7101e&is=65b49b1e&hm=455c379c6b33a851ea666d5992ca1bababead89a2719034c571943be5904b81a&"
        alt="bus"
      />
      <div className="w-fit pb-[54px] lg:pb-[46px] mx-auto">
        <div className="w-[22.38rem] lg:w-[45.06rem] mt-[96px] lg:mt-[163px] relative text-[1.38rem] lg:text-[2.44rem]  font-500 font-inter text-dimgray text-center inline-block">
          Build from City of Dreams, for the World.
        </div>
      </div>

      <div className="mb-[259px] lg:mb-[25px]">
        <img
          className="w-[289px] lg:w-[13.31rem] lg:h-[13.31rem] mx-auto relative max-w-full overflow-hidden h-auto object-cover"
          alt=""
          src="https://cdn.discordapp.com/attachments/1096324843877703713/1200515671629496412/image.png?ex=65c67658&is=65b40158&hm=5d6f4582d8f3c13abf62152e2e08baeb3e1e2b804ba1f099c09ceb955aa7cecb&"
        />
      </div>

      <div className="mb-[57px] lg:mb-[22px]">
        <img
          className="w-[382px] lg:w-[684px] lg:h-[422px] mx-auto relative max-w-full overflow-hidden h-[14.75rem] object-cover"
          alt="ticket"
          src="https://cdn.discordapp.com/attachments/1096324843877703713/1200515751157715205/image.png?ex=65c6766b&is=65b4016b&hm=37f1f32471325e90f42b63733adb60739a428b6470aff8e30246ab6ffb5ae838&"
        />
      </div>
      {/* <TwitterShareButton
      url={url}
      title={text}
      // via={twitterHandle}
      hashtags={hashtags}
    > */}
      <div
        onClick={handleTweetClick}
        className="w-[238px] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-150 mb-[57px] lg:mb-[22px] mx-auto relative rounded-[5px] bg-gray box-border h-[2.81rem] overflow-hidden text-left text-[1rem] text-white font-inter border-t-[1px] border-solid border-dimgray1"
      >
        <div className=" font-500">Share it on X</div>
      </div>
      {/* </TwitterShareButton> */}

      <div className="w-full flex flex-col py-9 mx-auto relative text-[0.98rem] text-black text-center  font-inter">
        <span className="w-full text-center inline">
          Designed by Swanshdesigns{" "}
          <a
            href="https://twitter.com/myself_eth_"
            rel="noreferrer"
            target="_blank"
          >
            <span className="font-semibold hover:text-blue-700">
              {" "}
              (@myselfeth)
            </span>
          </a>
        </span>
      </div>
    </section>
  );
};

export default Footer;
