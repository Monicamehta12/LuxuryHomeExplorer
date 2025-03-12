import React from 'react'
import BuyListingImg from '../assets/shutterstock_2304013113-min.fad3a3da89f8a55314cd.jpg'
import SellingListingImg from '../assets/shutterstock_1935730303-min.cbfb98809798e10bc8e4.jpg'
import { Link } from 'react-router-dom'

const ListingSection = () => {
  return (
    <div className='px-10 bg-zinc-900 text-white'>
      <div className='flex justify-between items-center pt-14 pb-10'>
        <h1 className='text-4xl montserrat-font uppercase'>Featured Listings</h1>
        <Link to="/buying/listings" className='underline font-semibold underline-offset-4'>View All</Link>
      </div>
      <h1 className='text-4xl py-10 pt-18 uppercase text-center montserrat-font'>Unsure about the next steps? Let us help</h1>
      <div className='grid min-[750px]:grid-cols-2 gap-12 min-[1100px]:gap-24 max-w-[1050px] mx-auto py-10 pb-32'>
        <Link to="/buying/listings" className='h-[40vh] relative overflow-hidden flex items-center'>
            <img src={BuyListingImg} alt="BuyListingImg" className='absolute h-full w-full opacity-75 hover:opacity-50 top-[50%] translate-y-[-50%] hover:scale-105 duration-500'/>
            <h1 className="text-3xl text-white py-8 font-mont px-14 text-center uppercase z-10">I am looking to buy</h1>
        </Link>
        <Link to="/selling/free-home-evaluation" className='h-[40vh] relative overflow-hidden flex items-center'>
            <img src={SellingListingImg} alt="BuyListingImg" className='absolute h-full w-full opacity-75 hover:opacity-50 top-[50%] translate-y-[-50%] hover:scale-105 duration-500'/>
            <h1 className="text-3xl text-white py-8 font-mont px-14 text-center uppercase z-10">I am looking to sell</h1>
        </Link>
      </div>
    </div>
  )
}

export default ListingSection
