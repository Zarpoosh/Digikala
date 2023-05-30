import React from "react";
// isons
import { BsArrowLeftShort } from "react-icons/bs";

// image
import shampoo from "../image/commodity/shampoo.webp"
import shampoo2 from "../image/commodity/shampoo2.webp"
import powder from "../image/commodity/powder.webp"
import fresh from "../image/commodity/fresh.svg"
import fresh2 from "../image/commodity/fresh2.png"


const SuperMarket = () => {
  return (
    <>
    <div className="lg:w-4/5 lg:mx-auto mx-4 rounded-lg my-4 bg-red-200 h-auto flex felx-col">
        <div className="w-full p-2 sm:flex lg:flex-row">
          <div className=" flex w-3/5">
            <img className="h-13 w-13 p-2" src={fresh2} alt="" />
            <img className="" src={fresh} alt="" />
            <p className="bg-green-500 text-white my-auto p-1 mx-2 hidden lg:flex rounded-full">تا ۶۸٪ تخفیف</p>
          </div>
          <div className="flex items-center">
           
            <img className="rounded-full h-14 w-14 mx-2" src={powder} alt="" />
            <span className="bg-red-500 absolute mt-5 text-white text-xs rounded-full p-1 my-auto">۲۲٪</span>
            <img className="rounded-full h-14 w-14 mx-2" src={shampoo} alt="" />
            <img className="rounded-full h-14 w-14 mx-2" src={shampoo2} alt="" />
            <div className="flex bg-white rounded-full p-2 items-center">
              <p className="text-green-500 text-sm hidden lg:flex">
                بیش از ۹۰ کالا
              </p>
            <i className="mr-auto my-auto lg:mx-2 rounded-full">
              <BsArrowLeftShort className="text-green-500 h-7 w-7"/>
            </i>
            </div>
          </div>
        </div>
    </div>
    </>
  );
};

export default SuperMarket;
