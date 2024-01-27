import React from 'react'
import logo from '../assets/logo.svg'
import LogoEditor from '../components/LogoEditor'
import './css/Mainpage.css'
import Mid from '../components/Mid'

const Mainpage = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const horizontalImage1_1='https://cdn.discordapp.com/attachments/1096324843877703713/1200569472164044871/image.png?ex=65c6a873&is=65b43373&hm=bb5d702ecec4eb7aebfaa8935d741aac235c6a3b9b3334127ed40760904a50ae&'
    const horizontalImage1_2 ='https://cdn.discordapp.com/attachments/1096324843877703713/1200569332703432755/image.png?ex=65c6a852&is=65b43352&hm=7ed8dfb7413164cceec73c72b201def54e48ae50d1c745526cb0e3cf67895668&'

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
        <img className='w-[166px] mx-auto my-5 relative  overflow-hidden h-[3.94rem] object-cover' src={logo} alt="Logo" />
        <img className='absolute w-[526px] overflow-hidden h-[471px] left-[-233px] top-[591px] object-cover' src="https://cdn.discordapp.com/attachments/1096324843877703713/1200511965106294885/image.png?ex=65c672e4&is=65b3fde4&hm=ff0949a0a27f3f6231cbe87f60bfce83ce9414ad73fb012999c3af7135b79516&" alt="" />
        <img className="absolute w-[515px]   overflow-hidden left-[169px] top-[597px] h-[32.19rem] object-contain" alt="" src="https://cdn.discordapp.com/attachments/1096324843877703713/1200511913596039188/image.png?ex=65c672d8&is=65b3fdd8&hm=7b8208cc5e5d3958fd8c3658700e69045c5f660880b09f36dd8a47f3671f7ad2&" />

        <div className='min-h-[1100px]'>
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
      
    </div>
  )
}

export default Mainpage
