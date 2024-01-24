'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import BackIcon from '@/public/svg/chevron-left.svg';
import CloseIcon from '@/public/svg/ph_x.svg';
import MoreIcon from '@/public/svg/dots-vertical.svg';
import HomeIcon from '@/public/svg/home.svg';
import { HeaderProps } from '@/types/common/header/types';
import Modal from '../modal';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { priceState } from '@/atoms/sale/priceAtom';
import { allCheckState } from '@/atoms/sale/checkAtom';
import { isHeaderSate } from '@/atoms/sale/headerAtom';

const Header = ({
  title,
  showBackButton = false,
  showCloseButton = false,
  showMoreButton = false,
  showBorder = false,
  showHomeButton = false,
  isSale = false,
  closeButtonRedirectPath = '',
}: HeaderProps) => {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const setPrice = useSetRecoilState(priceState);
  const setAllCheck = useSetRecoilState(allCheckState);

  const headerUnVisible = useRecoilValue(isHeaderSate);

  const headerClass = `w-full max-w-[480px] fixed top-0 grid grid-cols-3 items-center px-6 py-3 bg-bg ${
    showBorder ? 'border-b border-gray-300' : ''
  } ${headerUnVisible ? 'z-0' : 'z-20'} `;

  const handleCloseBtn = () => {
    if (isSale) {
      setModalOpen(true);
    } else if (closeButtonRedirectPath) {
      router.push(closeButtonRedirectPath);
    } else {
      router.back();
    }
  };

  const onConfirm = () => {
    handleModalOpen();
    setPrice(0);
    setAllCheck(false);
    router.back();
  };

  const onCancel = () => {
    handleModalOpen();
  };

  const handleModalOpen = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      {modalOpen && (
        <Modal
          title="나가시겠습니까?"
          content="작성된 내용은 저장되지 않습니다."
          showConfirmButton={true}
          showCancelButton={true}
          onConfirm={onConfirm}
          onCancel={onCancel}
          confirmString="나가기"
        />
      )}
      <header className={headerClass}>
        {showBackButton ? (
          <button onClick={handleCloseBtn} className="justify-self-start">
            <BackIcon />
          </button>
        ) : showCloseButton ? (
          <button onClick={handleCloseBtn} className="justify-self-start">
            <CloseIcon />
          </button>
        ) : (
          <div />
        )}
        <h1 className="justify-self-center text-t1 whitespace-nowrap font-semibold">
          {title}
        </h1>
        <div className="justify-self-end mt-1">
          {showHomeButton && (
            <button onClick={() => router.push('/home')}>
              <HomeIcon />
            </button>
          )}
          {showMoreButton && (
            <button>
              <MoreIcon />
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
