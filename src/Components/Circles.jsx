import React ,{useState} from "react";
import More from "./More";
// icons
// images
import jet from "../image/icons/jet.png";
import style from "../image/icons/style.png";
import gest from "../image/icons/gest.png";
import servis from "../image/icons/servis.png";
import box from "../image/icons/box.png";
import mounth from "../image/icons/mounth.png";
import pluss from "../image/icons/pluss.png";
import CircleRows from "./CircleRows";


const Circles = () => {

  return (
    <>
      <div className="w-full lg:w-3/5  px-2 grid grid-cols-4 lg:flex lg:mx-auto lg:justify-between">
        <CircleRows title="دیجی کالا جت" Image={jet}/>
        <CircleRows title="حراج استایل" Image={style}/>
        <CircleRows title="خرید اقساطی" Image={gest}/>
        <CircleRows title="دیجی کالا سرویس" Image={servis}/>
        <CircleRows title="لاکی باکس" Image={box}/>
        <CircleRows title="خرید سرماه" Image={mounth}/>
        <CircleRows title="دیجی پلاس" Image={pluss}/>
       <More/>
      </div>
    </>
  );
};

export default Circles;
