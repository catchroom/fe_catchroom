'use client';

import WishListDivider from '@/components/mypage/divider/wishListDivider';
import WishListHeartControl from '@/components/mypage/items/wishListHeartControl';
import React from 'react';
import { useQueryGetWishlist } from './../../../../api/mypage/query';
import { ItemType } from '@/constants/catchItems';

const WishList = () => {
  const { data } = useQueryGetWishlist();
  console.log(data);

  return (
    <WishListDivider>
      {data &&
        data.map((item: ItemType) => {
          return (
            <WishListHeartControl key={item.accommodationName} item={item} />
          );
        })}
    </WishListDivider>
  );
};

export default WishList;