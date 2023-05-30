import React from 'react'
import goosh from "../image/commodity/gooshvare.webp"
import chair from "../image/commodity/chair.webp"
import fan from "../image/commodity/fan.webp"
import mix from "../image/commodity/mix.webp"

const Off = () => {
  return (
    <div className='w-full h-auto mx-auto p-1'>
        <div className="w-full lg:w-4/5 grid grid-cols-2 lg:flex lg:mx-auto">
        <a className="flex flex-col items-center my-2  mx-2" href="#">
          <div className="">
            <img className="w-full cursor-pointer rounded-xl" src={goosh} alt="" />
          </div>
        </a>
        <a className="flex flex-col items-center my-2  mx-2" href="#">
          <div className="">
            <img className="w-full cursor-pointer rounded-xl" src={chair} alt="" />
          </div>
        </a>
        <a className="flex flex-col items-center my-2  mx-2" href="#">
          <div className="">
            <img className="w-full cursor-pointer rounded-xl" src={fan} alt="" />
          </div>
        </a>
        <a className="flex flex-col items-center my-2  mx-2" href="#">
          <div className="">
            <img className="w-full cursor-pointer rounded-xl" src={mix} alt="" />
          </div>
        </a>
        </div>
      
    </div>
  )
}

export default Off
