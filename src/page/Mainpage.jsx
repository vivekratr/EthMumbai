import React from 'react'
import logo from '../assets/logo.svg'
import LogoEditor from '../components/LogoEditor'
import './css/Mainpage.css'
import Mid from '../components/Mid'
import Footer from '../components/Footer'

const Mainpage = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const horizontalImage1_1='https://cdn.discordapp.com/attachments/1096324843877703713/1200569472164044871/image.png?ex=65c6a873&is=65b43373&hm=bb5d702ecec4eb7aebfaa8935d741aac235c6a3b9b3334127ed40760904a50ae&'
    const horizontalImage1_2 ='https://cdn.discordapp.com/attachments/1096324843877703713/1200569332703432755/image.png?ex=65c6a852&is=65b43352&hm=7ed8dfb7413164cceec73c72b201def54e48ae50d1c745526cb0e3cf67895668&'
    const horizontalImage2_1='https://cdn.discordapp.com/attachments/1096324843877703713/1200607126922473563/image.png?ex=65c6cb85&is=65b45685&hm=00181d6f576452d9f94b36dc4dc3f373aa3bd8c1f2b249b4d710bb62075a7aee&'
    const horizontalImage2_2='https://cdn.discordapp.com/attachments/1096324843877703713/1200609698584469564/image.png?ex=65c6cdea&is=65b458ea&hm=a485c91d09401882086ba99c367d998d119726bacbe3da01583f9844bfc1792e&'

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
    <div className='w-full  h-auto'>

        {/* hero */}
        <section className=' relative overflow-hidden h-auto flex flex-col bg-[#FFE7BA]'>
        <img className='w-[166px] mx-auto lg:mx-1 my-5 relative  overflow-hidden h-[3.94rem] object-cover' src={logo} alt="Logo" />
        <img className='absolute w-[526px] lg:w-[65.938rem] lg:h-[59rem] lg:left-[-11.613rem] lg:top-[2.563rem] overflow-hidden h-[471px] left-[-233px] top-[591px] object-cover' src="https://cdn.discordapp.com/attachments/1096324843877703713/1200511965106294885/image.png?ex=65c672e4&is=65b3fde4&hm=ff0949a0a27f3f6231cbe87f60bfce83ce9414ad73fb012999c3af7135b79516&" alt="" />
        <img className="absolute w-[515px] lg:w-[56rem] lg:h-[56rem] lg:left-[46.25rem] lg:top-[8.625rem]  overflow-hidden right-[-180px] top-[597px] h-[32.19rem] object-contain" alt="" src="https://cdn.discordapp.com/attachments/1096324843877703713/1200511913596039188/image.png?ex=65c672d8&is=65b3fdd8&hm=7b8208cc5e5d3958fd8c3658700e69045c5f660880b09f36dd8a47f3671f7ad2&" />

        <div className='min-h-[1100px] lg:min-h-[864px]'>
            <LogoEditor/>
        </div>
        </section>

        {/* moveImage1
         */}
         <div className='w-full overflow-x-hidden'>

         <section className='relative w-[300%] lg:w-[500%] h-[71px] '>
            <img
            src={isLargeDevice ? horizontalImage1_2 : horizontalImage1_1} id='horizontalImage1' className='horizontalStrip1 absolute h-[71px]  object-cover '  alt="horizontalImg" />
         </section>
            </div>

            {/* mid portion */}
            
            <Mid/>

      {/*moveImage2  */}
      <div className='w-full overflow-x-hidden'>

         <section className='relative w-[300%] lg:w-[225%] h-[71px] '>
            <img
            src={isLargeDevice ? horizontalImage2_2 : horizontalImage2_1} id='horizontalImage1' className='horizontalStrip1 absolute h-[71px]  object-cover '  alt="horizontalImg" />
         </section>
            </div>

            {/* footer */}
            <Footer/>
    </div>
  )
}

export default Mainpage
