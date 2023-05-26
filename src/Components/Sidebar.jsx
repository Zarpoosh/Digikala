import React, { useState } from "react";
// ICONS
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { GiMilkCarton } from "react-icons/gi";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineDiscount } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { BsQuestionCircle } from "react-icons/bs";
// import { MdOutlineStorefront } from "react-icons/md";

// image
import digi from "../image/digi.svg";
import SidebarRows from "./SidebarRows";

const Sidebar = () => {
  const [showSide, setShowSide] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  return (
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
      {/* slidebar */}
      <div
        id="drawer-navigation"
        class={` lg:hidden bg-black/50 fixed top-0  right-0  w-full overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full" tabindex="-1" aria-labelledby="drawer-navigation-label ${
          !showSide ? "hidden" : ""
        }`}
      >
        <div
          class={`py-4 px-2 overflow-y-auto bg-white w-4/5 sm:w-2/5   h-screen `}
        >
          <div className="border-b justify-between flex pb-4 lg:hidden">
            <div className="flex">
              <img className="h-6" src={digi} alt="" />
            </div>
            <i
              onClick={() => setShowSide(!showSide)}
              className=" flex mr-auto items-center "
            >
              <GrClose className="h-5 w-5 text-gray-400" />
            </i>
          </div>
          <ul class="space-y-2 font-medium my-4">
            <SidebarRows Icon={GiMilkCarton} title="سوپرمارکت" />
            <SidebarRows Icon={AiOutlineFire} title="پرفروش ترین ها" />
            <SidebarRows Icon={MdOutlineDiscount} title="تخفیف ها و پیشنهلد ها" />
            <SidebarRows Icon={CiDiscount1} title="شگفت انگیز ها" />
            <SidebarRows Icon={BsQuestionCircle} title="سوالی دارید؟" />
            <SidebarRows Icon={GiMilkCarton} title="در دیجی کالا بفروشید" />

            <li>
              <button
                onClick={() => setShowDropDown(!showDropDown)}
                type="button"
                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group "
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group- dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 text-left whitespace-nowrap">
                  E-commerce
                </span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul
                id="dropdown-example"
                class={`py-2 space-y-2 bg-gray-200 ${
                  !showDropDown ? "hidden" : ""
                }`}
              >
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group "
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group "
                  >
                    Billing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group "
                  >
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* end of slidebar */}
    </div>
  );
};

export default Sidebar;
