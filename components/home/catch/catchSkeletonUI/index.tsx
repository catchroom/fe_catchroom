'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CatchSkeletonUI = () => {
  const [slidesPerView, setSlidesPerView] = useState(1.1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 410) {
        setSlidesPerView(1.2);
      } else {
        setSlidesPerView(1.1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Swiper spaceBetween={12} slidesPerView={slidesPerView} loop={true}>
      <SwiperSlide>
        <div
          role="status"
          className="space-y-8 animate-pulse sm:w-80 md:w-80 md:space-y-0 rtl:space-x-reverse md:items-center border border-gray-200 mt-5 rounded"
        >
          <div className="flex items-center justify-center w-full h-[184px] bg-gray-300 rounded  dark:bg-gray-700">
            <svg
              className="w-10 h-[184px] text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="w-ful p-5 ">
            <div className="flex justify-between mb-1">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[157px] mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[93px] mb-4"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[104px] mb-4"></div>

              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[110px] mb-4"></div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          role="status"
          className="space-y-8 animate-pulse sm:w-80 md:w-80 md:space-y-0 rtl:space-x-reverse md:items-center border border-gray-200 mt-5"
        >
          <div className="flex items-center justify-center w-full h-[184px] bg-gray-300 rounded  dark:bg-gray-700">
            <svg
              className="w-10 h-[184px] text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="w-ful p-5 ">
            <div className="flex justify-between mb-1">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[157px] mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[93px] mb-4"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[104px] mb-4"></div>

              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[110px] mb-4"></div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CatchSkeletonUI;
