import React, { useEffect, useState } from 'react'
import { AppText, portfolio } from '../Constants'
import SectionHeading from '../Shared/SectionHeading';
import {robo} from '../assets/index'
const Portfolio = () => {

    const [portfolioList,setPortfolioList]=useState([]);
    const [portfolioListOrg,setPortfolioListOrg]=useState([]);

    useEffect(()=>{
        
        setPortfolioList(portfolio);
        setPortfolioListOrg(portfolio)
    },[])
    const filterPortfolio=(type)=>{
        if(type=='All')
        {
            setPortfolioList(portfolioListOrg);
        }
        else{
           const result= portfolioListOrg.filter(item=>item.type==type);
           setPortfolioList(result)
           console.log(result) 
        }
    }
  return (
    <div className='flex flex-col justify-center mt-5'>
        <div className='flex flex-row items-center justify-center px-6 md:px-0'>
        {/* <h1 className='text-[40px] font-bold'>{AppText.Creative}
        <span className='text-purple-600'>{AppText.Portfolio}</span></h1> */}
        <SectionHeading firstTitle={AppText.Creative} secondTitle={AppText.Portfolio} />
        <img src={robo} alt='' className="w-[70px] ml-5 animate-bounce"/>
        </div>
        <div className='flex flex-row gap-2 px-4 justify-evenly md:px-72'>
            <button onClick={()=>filterPortfolio('All')} className='p-1 px-4 text-purple-600 border-2 border-purple-600 rounded-md focus:text-white active:bg-purple-500 focus:ring-violet-300 focus:bg-purple-600 focus:ring '>All</button>
             <button  onClick={()=>filterPortfolio('ui/ux')}  className='p-1 px-4 text-purple-600 border-2 border-purple-600 rounded-md focus:text-white active:bg-purple-500 focus:ring-violet-300 focus:bg-purple-600 focus:ring '>UI/UX</button>
             <button onClick={()=>filterPortfolio('website')} className='p-1 px-4 text-purple-600 border-2 border-purple-600 rounded-md focus:text-white active:bg-purple-500 focus:ring-violet-300 focus:bg-purple-600 focus:ring '>Web App</button>
             <button onClick={()=>filterPortfolio('mobile')} className='p-1 px-4 text-purple-600 border-2 border-purple-600 rounded-md focus:text-white active:bg-purple-500 focus:ring-violet-300 focus:bg-purple-600 focus:ring '>Mobile App</button>
        </div>
        <div className='grid items-center content-center grid-cols-2 p-4 md:grid-cols-3 lg:grid-cols-3 md:px-24 lg:px-48 '>
            {portfolioList.map((item,index)=>(
                <div className='flex flex-col p-2 m-2 transition-all ease-in-out bg-purple-100 rounded-lg group hover:scale-110'>
                    <img src={item.imageUrl} alt='' className="h-[180px] object-cover rounded-lg"/>
                    <h1 className='text-[14px] group-hover:scale-110 mt-2 text-center  font-bold'>{item.title}</h1>
                    <h1 className='text-[12px] text-gray-500 px-6 pb-3'>{item.desc}</h1>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Portfolio