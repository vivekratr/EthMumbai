const Footer = () => {
  return (
    <section className="relative bg-[#FFE7B9]">
      <div className="w-fit pb-[54px] mx-auto">
        <div className="w-[22.38rem] mt-[96px] relative text-[1.38rem] font-500 font-inter text-dimgray text-center inline-block">
          Build from City of Dreams, for the World.
        </div>
      </div>

      <div className="mb-[259px]">
        <img
          className="w-[289px] mx-auto relative max-w-full overflow-hidden h-auto object-cover"
          alt=""
          src="https://cdn.discordapp.com/attachments/1096324843877703713/1200515671629496412/image.png?ex=65c67658&is=65b40158&hm=5d6f4582d8f3c13abf62152e2e08baeb3e1e2b804ba1f099c09ceb955aa7cecb&"
        />
      </div>

      <div className="mb-[57px]">
        <img
          className="w-[382px] mx-auto relative max-w-full overflow-hidden h-[14.75rem] object-cover"
          alt=""
          src="https://cdn.discordapp.com/attachments/1096324843877703713/1200515751157715205/image.png?ex=65c6766b&is=65b4016b&hm=37f1f32471325e90f42b63733adb60739a428b6470aff8e30246ab6ffb5ae838&"
        />
      </div>

      <div className="w-[338px] mb-[57px] mx-auto relative rounded-[5px] bg-gray box-border h-[2.81rem] overflow-hidden text-left text-[1rem] text-white font-inter border-t-[1px] border-solid border-dimgray1">
        <div className="absolute top-[0.81rem] left-[7.5rem] font-500">
          Share it on X
        </div>
      </div>

      <div className="w-fit mx-auto pb-[78px]">
        <div className="w-[17.06rem] relative text-[0.88rem] text-black text-center inline-block font-inter">
          <span>Designed And Developed by Team NovaChain for</span>
          <span className="font-semibold"> ETHMUMBAI</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
