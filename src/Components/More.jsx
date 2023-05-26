import React, { useState } from "react";
import dot from "../image/icons/Annotation 2023-05-25 124448.png";
import MoreDown from "./MoreDown";
import MoreRows from "./MoreRows";
// image
import smile from "../image/icons/smile.png";
import box from "../image/icons/box.png"
import mounth from "../image/icons/mounth.png"
import pluss from "../image/icons/pluss.png"
import mamor from "../image/icons/mamoreat.png"
import clab from "../image/icons/clab.png"
import gift from "../image/icons/gift.png"
import style from "../image/icons/style.png"
import gest from "../image/icons//gest.png"
import servis from "../image/icons/servis.png"
import major from "../image/icons/Major.png"
import pindo from "../image/icons/pindo.png"
import fidbo from "../image/icons/fidbo.png"
import jet from "../image/icons/jet.png"
import mehr from "../image/icons/mehr.png"
import traditional from "../image/icons/traditional.png"



const More = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="">
      {/* modal */}
      {/* more */}
      <a
        onClick={() => setShowMore(!showMore)}
        className="flex flex-col items-center my-2 cursor-pointer"
        href="#"
      >
        <div className="h-12 w-12 rounded-full bg-gray-200 justify-center">
          <img src={dot} alt="" />
        </div>
        <span className="items-center mt-1 text-xs">بیشتر</span>
      </a>
      {/* end of more */}
      <div
        className={` bg-black/50 fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${
          !showMore ? "hidden" : ""
        }`}
      >
        <div className="relative w-full max-w-2xl max-h-full mx-auto top-32">
          <div className={`relative bg-white rounded-lg shadow`}>
            <div className="flex items-start p-4 border-b ">
                <img src={smile} className="ml-1" alt="" />
                <div className="felx w-full items-center">
                  <p className="">خدمات دیجی کالا</p>
                </div>
              <button
                onClick={() => setShowMore(!showMore)}
                type="button"
                className="text-gray-400 rounded-lg text-sm p-1.5 mr-auto inline-flex items-center"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="w-full lg:w-4/5  px-2 grid grid-cols-3 lg:flex lg:mx-auto lg:justify-between">
              <MoreRows Image={box} title="لاکی باکس"/>
              <MoreRows Image={mounth} title="خرید سر ماه"/>
              <MoreRows Image={pluss} title="دیجی پلاس"/>
              <MoreRows Image={mamor} title="ماموریت ها"/>
              <MoreRows Image={clab} title="دیجی کلاب"/>
              <MoreRows Image={gift} title="کارت هدیه"/>
            </div>

            <div className="flex p-6 border-t  rounded-b flex-col">
              <div>
                <p className="text-xs mr-5">سرویس های گروه دیجی کالا</p>
              </div>
              <div className=" w-full lg:w-full lg:grid grid-cols-2 lg:mx-auto lg:justify-between">

              <MoreDown Image={jet} desc="خرید فوری از سوپرمارکت های اطراف" title="دیجی کالا جت"/>
              <MoreDown Image={style} desc="فروشگاه آنلاین مد  پوشاک" title="دیجی کالا جت"/>
              <MoreDown Image={gest} desc="خرید قسطی گوشی موبایل لپ تاب و لوازم خانگی" title="دیجی کالا جت"/>
              <MoreDown Image={servis} desc="گارانتی و خدمات پس از فروش دیجی کالا " title="دیجی کالا جت"/>
              <MoreDown Image={major} desc="خرید عمده و سازمانی انواع کالا" title="دیجی کالا جت"/>
              <MoreDown Image={pindo} desc="ثبت آگهی برای کالا و خدمات" title="دیجی کالا جت"/>
              <MoreDown Image={fidbo} desc="خرید کتاب و دانلود کتاب الکترونیک" title="دیجی کالا جت"/>
              <MoreDown Image={mehr} desc="به مسیر تازه مهربانی بیا" title="دیجی کالا مهر" />
              <MoreDown Image={traditional} desc="عرضه محصولات محلی و دست ساز" title="بومی و محلی"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of modal */}
    </div>
  );
};

export default More;
