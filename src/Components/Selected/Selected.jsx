import React, { useState } from "react";
import SelectedItem from "./SelectedItem";

const Selected = () => {
  return (
    <>
    <div className=" flex items-center justify-center my-4">
        <h1 className="font-bold">منتخب محصولات تخفیف و حراج</h1>
      </div>
      <div className="w-full lg:w-4/5 lg:rounded-xl lg:mx-auto grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 lg:border">
        <div className="flex border my-2 items-ceter mx-auto justify-center">
          <SelectedItem
            className=""
            image="https://dkstatics-public.digikala.com/digikala-products/e06e98875ad5947e50811d75ae940a9a38aaa15f_1678627573.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
            off="۲۰٪"
            price="۲۳۰۰۰"
            Decrease="۱۲۰۰۰"
          />
        </div>
        <div className="flex border my-2 items-ceter mx-auto justify-center">
          <SelectedItem
            image="https://dkstatics-public.digikala.com/digikala-products/3572192.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
            off="۱۸٪"
            price="۳۵۹۰۰"
          />
        </div>
        <div className="flex border lg:my-2 items-ceter mx-auto justify-center">
          <SelectedItem
            image="https://dkstatics-public.digikala.com/digikala-products/7c8b49cb2c0a122de901c48cbeac24887288e36d_1684671932.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
            off="۵٪"
            price="۳۵۹۵۰"
            Decrease="۲۳۰۰۰"
          />
        </div>
        <div className="flex border lg:my-2 items-ceter mx-auto justify-center">
          <SelectedItem
            image="https://dkstatics-public.digikala.com/digikala-products/ba11cd2f6770f20aec9222a95dcf75d7f4c9a2c2_1625896416.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
            off="۲۷٪"
            price="۳۴۵۰۰۰"
            Decrease="۵۴۰۰۰"
          />
        </div>
        <div className="flex border lg:my-2 items-ceter mx-auto justify-center">
          <SelectedItem
            image="https://dkstatics-public.digikala.com/digikala-products/9f47245fe80e369f6e336fe9fc967ad05dfdfcb2_1669442363.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
            off="۱۸٪"
            price="۶۵۴۰۰۰"
            Decrease="۵۶۰۰۰"
          />
        </div>
        <div className="flex border lg:my-2 items-ceter mx-auto justify-center">
          <SelectedItem
            image="https://dkstatics-public.digikala.com/digikala-products/114467146.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
            off="۳۲٪"
            price="۵۴۰۰۰"
            Decrease="۳۲۵۰۰"
          />
        </div>
        <div className="flex border lg:my-2 items-ceter mx-auto justify-center">
          <SelectedItem
            image="https://dkstatics-public.digikala.com/digikala-products/9b2371cbb8c8ca77c20efbbb79974b9adfa0bd1b_1612706809.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
            off="۷۸٪"
            price="۳۶۰۰۰"
            Decrease="۲۳۰۰"
          />
        </div>
        <div className="flex border lg:my-2 items-ceter mx-auto justify-center">
          <SelectedItem
            image="https://dkstatics-public.digikala.com/digikala-products/e61958991d5905572f1a5385af53ef57376a0cb6_1656406171.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
            off="۱۲٪"
            price="۹۰۹۹۰۰۰۰"
            Decrease="۲۳۲۰۰"
          />
        </div>
        <div className="flex border lg:my-2 items-ceter mx-auto justify-center">
          <SelectedItem
            image="https://dkstatics-public.digikala.com/digikala-products/120114763.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
            off="۴۳٪"
            price="۶۷۰۰۰"
            Decrease="۷۶۰۰۰"
          />
        </div>
        <div className="flex border lg:my-2 items-ceter mx-auto justify-center">
          <SelectedItem
            image="https://dkstatics-public.digikala.com/digikala-products/8d208dd52debc12c61216cf99fbd856b8031da71_1625308692.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
            off="۲۳٪"
            price="۷۶۵۰۰"
            Decrease="۵۶۰۰"
          />
        </div>
        <div className="flex border lg:my-2 items-ceter mx-auto justify-center">
          <SelectedItem
            image="https://dkstatics-public.digikala.com/digikala-products/c9d680a6f435a00bb66ce8829c19a40ef5fe4678_1620820609.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
            off="۴۳٪"
            price="۴۵۶۰۰۰"
            Decrease="۶۵۰۰۰"
          />
        </div>
        <div className="flex border lg:my-2 items-ceter mx-auto justify-center">
          <SelectedItem
            image="https://dkstatics-public.digikala.com/digikala-products/7853ee9038eb09345e56475bcd7dc5a76f48deb3_1682340715.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
            off="۲۳٪"
            price="۲۹۹۰۰"
            Decrease="۴۳۰۰۰"
          />
        </div>
       
      </div>
    </>
  );
};

export default Selected;
