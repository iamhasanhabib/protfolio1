import React from 'react'
import '../assets'
import '.'
import { laptop, wave } from '../assets'
import { aboutSection, AppText } from '../Constants'
const AboutMe = () => {
  return (
    <div id="aboutme" className='mt-[100px]'>
          <img src={wave} alt=''  className="absolute w-screen " />
        <div className='w-full bg-purple-600 h-[300px]  justify-center items-center'>
        <div className='absolute flex flex-row justify-between'>
            <img src={laptop} alt='' className="w-[150px] md:w-[300px] mt-[-100px] " />
        </div>
            <h1 className='text-white text-[50px] pt-[20px] font-bold text-center'>About <span className='text-black'>Me</span></h1>
            <h1 className='w-full px-10 md:px-48 lg:px-80 mt-[50px] text-white'>{AppText.aboutMeDescripion} </h1>
        </div>
        <div className='flex flex-col md:flex-row mt-[-75px] md:px-32 '>
           {
            aboutSection.map((item,index)=>(
               
                <div key={index} className="relative flex flex-col items-center justify-center w-full py-2 m-2 rounded-lg group md:hover:bg-purple-600">
                  <img src={item.image} alt='' className="w-[230px] rounded-lg h-[170px] object-cover"/>
                  <h1 className='font-bold md:group-hover:text-white'>{item.title}</h1>
                  <h1 className='text-[12px] md:group-hover:text-gray-200 text-gray-500 px-7'>{item.desc}</h1>
                </div>
             

            ))
            }
            
        </div>
    </div>
   
  )
}

export default AboutMe