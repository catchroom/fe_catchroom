'use client';

import { useToastAlert } from '@/hooks/useToastAlert';
import React, { useState } from 'react';
import { RoomItemType } from '@/constants/catchItems';
import CatchSpecialComponent from '@/components/common/catchComponent';
import { getDotDate } from '@/utils/get-dot-date';

const WishListHeartControl = ({ item }: { item: RoomItemType }) => {
  const { alertOpenHandler } = useToastAlert('찜을 취소했어요.');
  const [heartState, setHeartState] = useState(true);

  const heartBtnHandler = () => {
    setHeartState(!heartState);
    alertOpenHandler();
  };

  return (
    <CatchSpecialComponent
      key={item.accommodationName}
      roomName={item.accommodationName}
      roomType={item.roomName}
      resDate={getDotDate(item.checkIn)}
      oldPrice={item.sellPrice}
      discount={item.discountRate}
      isHeart={true}
      heartState={heartState}
      heartBtnHandler={heartBtnHandler}
    />
  );
};

export default WishListHeartControl;
