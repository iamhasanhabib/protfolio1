import React from 'react'
import '../assets'
import { skill } from '../assets'
import '../Constants'
import { AppText, skillsList, workDetail } from '../Constants'

const Skills = () => {
  return (
    <div className='mt-10' id="skills">
        <div className='flex flex-row items-center justify-center'>
        <img src={skill} alt='' className="w-[70px] hover:animate-bounce "/>
        <h1 className='text-[40px] font-bold'>{AppText.Skills}<span className='text-purple-600'>{AppText.Experties}</span></h1>
        </div>
        <div className='flex flex-col px-8 mt-8 md:flex-row justify-evenly md:px-0 '>
          <div className='grid items-center grid-cols-4 gap-8 md:grid-cols-4'>
            {skillsList.map((item, index)=>(
                <div className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full' >
                    <img src={item.icon} alt=''
                    className="w-[60px]"/>
                </div>
               
            ))}
                </div>
                <div className='flex flex-col justify-end mt-5 md:mt-0 lg:mt-0'>
                    {workDetail.map((item,index)=>(
                        <div className='flex flex-row mb-6'>
                            <div className='mr-10 font-bold'>
                                 <h2>{item.year}</h2>
                            </div>
                            <div>
                                <h3 className='w-full font-bold'>{item.position}</h3>
                                <h3 className='font-thin text-[15px] text-gray-400'>{item.compnayName}</h3>

                                </div>
                        </div>
                       
                    ))}
                 
                </div>
        </div>
    </div>
  )
}

export default Skills