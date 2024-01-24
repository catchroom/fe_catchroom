import { ReviewItemType } from '@/types/home/types';
import { getDateWithSlash } from '@/utils/get-date-with-dash';
import Image from 'next/image';
import React from 'react';

const ReviewItem = ({
  productName,
  image,
  userName,
  date,
  content,
}: ReviewItemType) => {
  const reviewDate = getDateWithSlash(date);

  return (
    <div className="flex p-5 relative border-b border-divider-sub gap-5 w-full ">
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-t1 font-bold">{productName}</h1>
        <div className="text-t3 w-full min-w-[230px]">{content}</div>
        <p className="text-t4 text-text-sub">
          {userName} • {reviewDate}{' '}
        </p>
      </div>
      <div className="flex items-center w-[100px]">
        <div className="relative w-[100px] h-[100px]">
          <Image
            src={image}
            fill
            sizes="(max-width: 480px) 100px, (max-width: 320px) 80px, 80px"
            alt="숙소이미지"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
