import React from 'react';
import yanolja from '@/public/Yanolja_CI.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col gap-3 mt-10 pb-20">
      <div className="flex flex-col text-text-sub text-p3 ">
        <h1 className="pb-1 font-bold text-p1">캐치룸</h1>
        <p>
          <span className="font-bold">주소</span> 서울특별시 강남구 테헤란로
          108길 42
        </p>
        <p>
          <span className="font-bold">호스팅서비스 제공자</span> (주)야놀자
        </p>
        <p>
          <span className="font-bold">고객센터</span> 02-4989-4989 평일, 주말
          09:00 - 18:00 <br /> (점심시간 12:00 - 13:00)
        </p>
      </div>
      <div className="flex gap-[19px] text-text-secondary underline decoration-solid text-p2">
        <Link href="https://team4989faq.oopy.io/">
          <p>FAQ</p>
        </Link>
        <Link href="/mypage/dashboard/privacy">
          <p className="cursor-pointer">개인정보 처리방침</p>
        </Link>
        <Link href="/mypage/dashboard/terms">
          <p className="cursor-pointer">서비스 이용약관</p>
        </Link>
        <Image src={yanolja} alt="야놀자 로고" />
      </div>
      <div className="text-t4 text-text-sub">
        (주)야놀자는 통신판매중개자로서 통신판매의 당사자가 아니며 상품의 예약,
        이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
      </div>
    </div>
  );
};

export default Footer;
