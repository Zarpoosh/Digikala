import React from "react";
// image
import shampoo from "../image/commodity/shampoo.webp"
import shampoo2 from "../image/commodity/shampoo2.webp"
import fresh from "../image/commodity/fresh.svg";
import fresh2 from "../image/commodity/fresh2.png";
import powder from "../image/commodity/powder.webp";
import shoes from "../image/commodity/shoes.webp";

const SuperMarket = () => {
  return (
    <div>
      <div className="w-full mx-auto rounded-xl my-5 bg-red-200 p-2 ">
        <div className="w-full flex flex-row">
          <div className="flex ">
            <div className="flex">
              <img src={fresh2} alt="" />
              <img src={fresh} alt="" />
            </div>
            <span className="bg-green-500 rounded-full my-auto p-1 mx-1 text-xs font-semibold text-white">تا ۴۲٪ تخفیف</span>
          </div>
          <div className="flex mr-2">
            <img className="h-12 rounded-full mx-1" src={shampoo} alt="" />
            <img className="h-12 rounded-full mx-1" src={shampoo2} alt="" />
            <img className="h-12 rounded-full mx-1" src={powder} alt="" />
            <img className="h-12 rounded-full mx-1" src={shoes} alt="" />
            <span className="bg-white rounded-full text-green-500 my-auto p-1 text-sm">بیش از ۹۰ کالا</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperMarket;
