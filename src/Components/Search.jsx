import React from 'react'
// imsge
import logo from "../image/logo.svg";
// icons
import { BiSearch } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Search = () => {
  return (
    <>
      <div className="w-full">
          <div className="w-full flex flex-col mx-auto px-4-md ">
            <div className="w-full flex relative justify-between">
              <div className="flex flex-1 items-center">
                {/* logo */}
                <a className='' href="#">
                  <img src={logo} alt="" />
                </a>
                {/* end of logo */}
                {/* input */}
                <div className="ml-auto w-full">
                  <div className="mr-3 bg-gray-100 w-full md:w-3/5 lg:w-2/5 rounded-lg flex">
                    <i className="p-3 text-gray-400 focus:black">
                      <BiSearch />
                    </i>
                    <input
                      type="text"
                      className="bg-transparent p-2 w-full outline-none"
                      placeholder="جستوجو"
                    />
                  </div>
                </div>
                {/* end of input */}
              </div>
              {/* login */}
              <div className="flex items-center">
                <div className="mx-3 ">
                  <i className="p-3 flex">
                    <BsPerson className=" h-5 w-5" />
                    <MdOutlineArrowDropDown className=" h-5 w-5" />
                  </i>
                </div>
                <div className="mx-3 ">
                  <i className="p-3">
                    <BsCart className="h-5 w-5" />
                  </i>
                </div>
              </div>
              {/* end of login */}
            </div>
          </div>
        </div>
    </>
  )
}

export default Search
