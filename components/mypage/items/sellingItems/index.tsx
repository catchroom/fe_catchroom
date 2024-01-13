import React from 'react';
import Image from 'next/image';
// eslint-disable-next-line
import { StateType, decodeState, getDotDate } from '@/utils/get-dot-date';
// import ReviewButtons from '../reviewButtons';
import { MypageSellingType } from '@/types/mypage/data-types';
import CalendarSVG from '@/public/svgComponent/mediumCalendar';
import ReviewButtons from '../reviewButtons';

const MItem = ({ item }: { item: MypageSellingType }) => {
  // const soldOut = item.state === 'soldOut' ? true : false;

  const state = decodeState(
    item.state as StateType,
    getDotDate(item.productEndDate, true),
  );

  const reEnroll =
    item.state === 'expirationDate' ? (
      <span className=" text-text-primary underline">기한 수정</span>
    ) : null;

  const isCatch = item.isCatch === true && item.state === 'ing' ? true : false;

  const isNotIng = item.state !== 'ing' ? true : false;

  return (
    <div id="container" className="w-full px-5 py-3">
      {/* 호텔 이미지, 이름, 가격 정보 */}
      <div className="w-full flex gap-4">
        <div className="relative">
          {/* 호텔 이미지 */}
          {isNotIng && (
            <div className="absolute flex items-center justify-center inset-0 backdrop-saturate-50 backdrop-brightness-75">
              <p className="text-text-on font-semibold text-t2">판매완료</p>
            </div>
          )}
          <Image
            src={item.thumbnailUrl}
            alt="room3"
            width={300}
            height={300}
            priority
            className="rounded-md object-cover w-[120px] h-[120px]"
          />
          {/* 캐치특가 여부 판단 */}
          {isCatch && (
            <span className="text-text-on border border-pink-600 bg-focus flex text-p4 absolute top-1 left-1 z-10 items-center py-1 px-[6.5px] rounded-xl">
              캐치특가
            </span>
          )}
        </div>
        {/* 호텔 이름과 가격 정보 */}
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            {/* 호텔 체크인 체크아웃 날짜 */}
            <p className="flex items-center gap-1 text-text text-t3 font-medium">
              <CalendarSVG />
              {getDotDate(item.checkIn)} - {getDotDate(item.checkOut)}
            </p>
            <div className="text-text">
              <h3 className="text-t1 font-bold">{item.productName}</h3>
              <p className="text-t2 font-semibold">{item.sellPrice}원</p>
            </div>
          </div>
          <div className="flex gap-2 text-sub text-t3 font-medium">
            <p>{state}</p>
            {reEnroll}
          </div>
        </div>
      </div>
      <ReviewButtons id={item.productNum} isReview={true} />
    </div>
  );
};

export default MItem;
