'use client';

import { getSalesHistory } from '@/api/home/api';
import { isSuccessState, salesItemsState } from '@/atoms/home/salesItemsAtom';
import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import React, { MouseEventHandler } from 'react';
import { useSetRecoilState } from 'recoil';

const SaleButton = ({
  name,
  fn,
  type = 'button',
}: {
  name: string;
  fn?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset' | undefined;
}) => {
  const setSaleItems = useSetRecoilState(salesItemsState);
  const setIsSuccess = useSetRecoilState(isSuccessState);

  const handleBtnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (fn) fn(e);
    getSalesHistory().then((res) => {
      console.log(res);
      if (res.code === 4000) {
        setSaleItems(res.data);
        setIsSuccess(true);
      } else setIsSuccess(false);
    });
  };

  return (
    <Button
      placeholder="Button"
      onClick={handleBtnClick}
      type={type}
      className="flex gap-1 p-3 rounded-3xl font-pretend bg-main text-t2 font-bold text-white"
    >
      <Image src="/svg/plus.svg" width={24} height={24} alt="플러스 아이콘" />
      {name}
    </Button>
  );
};

export default SaleButton;
