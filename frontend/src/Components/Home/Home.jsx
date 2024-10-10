import React from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import CropCard from './CropCard'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header text="HOME" />
        {/* <div className="grid grid-cols-3 gap-4 py-8 mx-auto"> */}
        <div className='ml-12'>
        <div className="flex justify-center px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 py-8 gap-4 gap-y-8 max-w-screen w-full">
                <CropCard cropName="Chilli" imagePath="src/assets/chilli.svg" />
                <CropCard cropName="Tomato" imagePath="src/assets/chilli.svg" />
                <CropCard cropName="Carrot" imagePath="src/assets/chilli.svg" />
                <CropCard cropName="Carrot" imagePath="src/assets/chilli.svg" />
                <CropCard cropName="Carrot" imagePath="src/assets/chilli.svg" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home
