import React from "react";
import { useState } from "react";
// images
import digi from "../image/digi.svg";
import banner from "../image/banner.webp"
// icons
import { RxHamburgerMenu } from "react-icons/rx";
import { GiMilkCarton } from "react-icons/gi";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineDiscount } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import { BsQuestionCircle } from "react-icons/bs";
import { MdOutlineStorefront } from "react-icons/md";
import Search from "./Search";

const Header = () => {
  const [showSide, setShowSide] = useState(false);
  return (
    <>
    {/* banner */}
      <div className="w-full">
        <img src={banner} alt="" />
      </div>
      {/* end of banner */}

      {/* header */}
      <header className="flex lg:w-full bg-white lg:container mx-auto flex-col pb-1 px-4">
        <Search/>
        {/* nav */}
        <nav className="w-full relative">
          <div className="w-full flex container-4xl-w mx-auto px-4-md justify-between">
            {/* menu */}

            {/* sidbar */}
            <div
              class={`h-screen lg:inline lg:h-auto p-4 lg:p-0  transition-transform hidden bg-gray-200 lg:bg-white w-80 lg:w-full ${
                !showSide ? "hidden" : ""
              }`}
              tabindex="-1"
              aria-labelledby="drawer-navigation-label"
            >
              <div className="border-b justify-between flex pb-4 lg:hidden">
                <div className="flex">
                <img className="h-6" src={digi} alt="" />
                </div>
                <i onClick={() => setShowSide(!showSide)}
                  className=" flex mr-auto items-center ">
                  <GrFormClose className="h-7 w-7 gray-400"/>
                </i>
              </div>
              <div class="py-4 lg:py-0">
                <ul class="space-y-2 flex flex-col lg:flex-row">
                  <li className=" py-5 hidden lg:inline">
                    <a className="flex lg:hover:border-b-2 lg:border-red-600 duration-75 font-bold cursor-pointer mx-1">
                      <i className="flex mx-1">
                        <RxHamburgerMenu />
                      </i>
                      <p className="mx-1 text-sm">دسته بندی کالاها</p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <GiMilkCarton className="text-gray-500 h-5 w-5 lg:w-4" />
                      </i>
                      <p className=" mx-1 text-xs lg:xs">سوپرمارکت</p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <AiOutlineFire className="text-gray-500 h-5 w-5 lg:w-4"/>
                      </i>
                      <p className=" mx-1 text-xs lg:xs">پرفروش ترین ها</p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <MdOutlineDiscount className="text-gray-500 h-5 w-5 lg:w-4"/>
                      </i>
                      <p className=" mx-1 text-xs lg:xs">تخفیف ها و پیشنهاد ها</p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <CiDiscount1 className="text-gray-500 h-5 w-5 lg:w-4"/>
                      </i>
                      <p className="mx-1 text-xs lg:xs">شگفت انگیز ها</p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <BsQuestionCircle className="text-gray-500 h-5 w-5 lg:w-4"/>
                      </i>
                      <p className="text-xs mx-1">سوالی دارید؟</p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <MdOutlineStorefront className="text-gray-500 h-5 w-5 lg:w-4"/>
                      </i>
                      <p className="text-xs mx-1">در دیجی کالا بفروشید!</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*end of sidbar */}

            {/* end of menu */}

            {/* gps */}
            <div>
              <button
                onClick={() => setShowSide(!showSide)}
                class="rounded-lg px-5  mr-2 border-0 focus:border-0 lg:hidden"
                type="button"
                data-drawer-target="drawer-navigation"
                data-drawer-show="drawer-navigation"
                aria-controls="drawer-navigation"
              >
                <RxHamburgerMenu />
              </button>
              
            </div>
            <div className="flex justify-between mr-auto">
              <div className="flex flex-nowrap">
                <i className="text-orange-400">
                  <HiOutlineLocationMarker />
                </i>
                <p className="text-xs">ارسال به اردبیل اردبیل</p>
              </div>
              <i className="lg:hidden">
                <MdOutlineKeyboardArrowLeft className="h-5 w-5" />
              </i>
            </div>
            {/* end of gps */}
          </div>
        </nav>
        {/* end of nav */}
      </header>
      {/* en dof header */}
    </>
  );
};

export default Header;
