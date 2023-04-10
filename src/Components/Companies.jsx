import React from 'react'
import SectionHeading from '../Shared/SectionHeading'
import '../Constants'
import { AppText, CompanyImage } from '../Constants'
const Companies = () => {
  return (
    <div id='companies' className='p-5 bg-purple-200'>
        <div className='flex flex-col items-center justify-center'>
        <SectionHeading firstTitle={ AppText.CompaniesI} secondTitle={AppText.WorkedFor} />
        <div className='grid grid-cols-2 m-3 md:grid-cols-4 lg:grid-cols-4'>
            {CompanyImage.map((item,index)=>(
                <div className='m-3 transition-all ease-in-out hover:scale-110'>
                    <img src={item.imageUrl} alt='' className="h-[60px]" />
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Companies