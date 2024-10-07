import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Heros from "./Hero_2"
import Her from './Hero_3'


export default function Hero_1() {

  
  return (
    <div className="parent">
      <Navbar/>
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white ">
    <div className="my-div flex items-center justify-center md:w-1/4"></div>
      {/* Main Content */}
      <div className=" text-center relative svg  flex flex-row items-center z-10">
        {/* SVG Icon */}
        <svg
          width="100" 
          height="100" 
          viewBox="0 0 194 180" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className=" md:mb-5 sm:mb-2 lg:mb-8 items-center justify-center"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M49.1306 104.869C59.4666 104.168 70.6823 102.847 77.9574 95.4718C85.7997 87.5212 86.8786 75.3821 85.0619 64.3633C82.2593 47.3651 87.3263 29.293 100.263 16.1779C121.529 -5.38158 156.008 -5.38158 177.274 16.1779C198.54 37.7375 198.54 72.6924 177.274 94.2519C163.87 107.84 145.218 112.864 127.933 109.324C116.962 107.076 104.642 107.918 96.778 115.891C89.9567 122.806 88.7232 133.263 88.5322 142.974C88.3487 152.303 84.7458 161.576 77.7236 168.696C63.3023 183.316 39.9207 183.316 25.4993 168.696C11.078 154.075 11.078 130.371 25.4993 115.751C32.0787 109.08 40.523 105.453 49.1306 104.869ZM55.2555 74.1141C42.6154 86.9286 22.1218 86.9286 9.48175 74.1141C-3.15831 61.2996 -3.15831 40.5232 9.48175 27.7087C22.1218 14.8942 42.6154 14.8942 55.2555 27.7087C67.8955 40.5232 67.8955 61.2996 55.2555 74.1141ZM146.33 165.906C138.162 174.186 124.92 174.186 116.752 165.906C108.585 157.626 108.585 144.201 116.752 135.92C124.92 127.64 138.162 127.64 146.33 135.92C154.497 144.201 154.497 157.626 146.33 165.906Z" fill="white"/>
        </svg>
        <h1 className="text-9xl md:text-6xl sm:text-8xl lg:text-9xl font-bold mb-10 md:mb-7">Fluid AI</h1>
      </div>

      
      {/* Scroll Down */}
      
        <div className="scroll absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-10"> 
          <svg width="36" height="36" className='ml-6' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="9.40909" y="4.49893" width="17.1818" height="27.002" rx="8.59091" stroke="white" strokeWidth="0.818182" />
            <path d="M17.7603 14.8062V10.6182" stroke="white" strokeWidth="0.818182" />
          </svg>
          <p>Scroll down</p>
        </div>
     
      
    </div>
    <Heros />
    <Her/>
    </div>
  )
}
