import React, { useState } from "react";
// image
import book from "../image/category/book.webp";
import racket from "../image/category/racket.webp";
import plirs from "../image/category/plirs.webp";
import bag from "../image/category/bag.webp";
import car from "../image/category/car.webp";
import dol from "../image/category/dol.webp";
import food from "../image/category/food.webp";
import pat from "../image/category/pat.webp";
import perfum from "../image/category/perfum.webp";
import phone from "../image/category/phone.webp";
import shoes from "../image/category/shoes.webp";
import watch from "../image/category/watch.webp";

const Category = () => {
  return (
    <>
      <div className=" flex items-center justify-center my-4">
        <h1 className="font-bold">دسته بندی های دیجی کالا</h1>
      </div>
      <div className="w-full h- lg:w-4/5 lg:mx-auto grid grid-cols-3 lg:grid-cols-6  items-center justify-center">
        <div className="items-center my-2 p-3 flex flex-col">
          <a
            className=" h-20 w-20 lg:w-40 lg:h-40 items-center flex flex-col "
            href="#"
          >
            <img className="items-center" src={phone} alt="" />
          </a>
          <p className="text-xs">موبایل</p>
        </div>
        <div className="items-center my-2 p-3 flex flex-col">
          <a
            className=" h-20 w-20 lg:w-40 lg:h-40 items-center flex flex-col"
            href="#"
          >
            <img
              className=""
              src="https://dkstatics-public.digikala.com/digikala-categories/8f80e75e4c2dca42ee0538e100c7a7b05455aa88_1662360265.png?x-oss-process=image/format,webp"
              alt=""
            />
          </a>
          <p className="text-xs">کالای دیجیتال</p>
        </div>
        <div className="items-center my-2 p-3 flex flex-col">
          <a
            className=" h-20 w-20 lg:w-40 lg:h-40 items-center flex flex-col"
            href="#"
          >
            <img className="" src={pat} alt="" />
          </a>
          <p className="text-xs">خانه و آشپزخانه</p>
        </div>
        <div className="items-center my-2 p-3 flex flex-col">
          <a
            className=" h-20 w-20 lg:w-40 lg:h-40 items-center flex flex-col"
            href="#"
          >
            <img className="" src={bag} alt="" />
          </a>
          <p className="text-xs">مد و پوشاک</p>
        </div>
        <div className="items-center my-2 p-3 flex flex-col">
          <a
            className=" h-20 w-20 lg:w-40 lg:h-40 items-center flex flex-col"
            href="#"
          >
            <img className="" src={food} alt="" />
          </a>
          <p className="text-xs">کالاهای سوپرمارکتی</p>
        </div>
        <div className="items-center my-2 p-3 flex flex-col">
          <a
            className=" h-20 w-20 lg:w-40 lg:h-40 items-center flex flex-col"
            href="#"
          >
            <img className="" src={book} alt="" />
          </a>
          <p className="text-xs">کتاب لوازم و التحریر و هنر</p>
        </div>
        <div className="items-center my-2 p-3 flex flex-col">
          <a
            className=" h-20 w-20 lg:w-40 lg:h-40 items-center flex flex-col"
            href="#"
          >
            <img className="" src={dol} alt="" />
          </a>
          <p className="text-xs">اسباب بازی کودک و نوزاد</p>
        </div>
        <div className="items-center my-2 p-3 flex flex-col">
          <a
            className=" h-20 w-20 lg:w-40 lg:h-40 items-center flex flex-col"
            href="#"
          >
            <img className="" src={perfum} alt="" />
          </a>
          <p className="text-xs">زیبایی و سلامت</p>
        </div>
        <div className="items-center my-2 p-3 flex flex-col">
          <a
            className=" h-20 w-20 lg:w-40 lg:h-40 items-center flex flex-col"
            href="#"
          >
            <img className="" src={racket} alt="" />
          </a>
          <p className="text-xs">ورزش و سفر</p>
        </div>
        <div className="items-center my-2 p-3 flex flex-col">
          <a
            className=" h-20 w-20 lg:w-40 lg:h-40 items-center flex flex-col"
            href="#"
          >
            <img className="" src={plirs} alt="" />
          </a>
          <p className="text-xs">ابزار لوازم ساختمانی و صنعتی</p>
        </div>
        <div className="items-center my-2 p-3 flex flex-col">
          <a
            className=" h-20 w-20 lg:w-40 lg:h-40 items-center flex flex-col"
            href="#"
          >
            <img className="" src={car} alt="" />
          </a>
          <p className="text-xs">خودرو موتورسیکلت</p>
        </div>
        <div className="items-center my-2 p-3 flex flex-col">
          <a
            className=" h-20 w-20 lg:w-40 lg:h-40 items-center flex flex-col"
            href="#"
          >
            <img className="" src={shoes} alt="" />
          </a>
          <p className="text-xs">محصولات بومی و محلی</p>
        </div>
      </div>
    </>
  );
};

export default Category;
