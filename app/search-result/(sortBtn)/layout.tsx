import Header from '@/components/common/header';
import FilterBar from '@/components/search-result/filterBar';
import ProductListControls from '@/components/search-result/list/productListControls';
import React, { ReactNode } from 'react';

// const locations = ['서울', '제주'];
// const checkInDate = '12.1';
// const checkOutDate = '12.2';
// const accommodationType = '호텔';
// const adultsCount = 2;

// const dayOfWeekIn = '목';
// const dayOfWeekOut = '금';

// const locationLabel =
//   locations.length > 1
//     ? `${locations[0]} 외 ${locations.length - 1}건`
//     : locations[0];
// const datesLabel = `${checkInDate} ${dayOfWeekIn} ~ ${checkOutDate} ${dayOfWeekOut}`;
// const accommodationLabel = accommodationType;
// const guestsLabel = `성인 ${adultsCount}명`;

const Searchlayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header title="검색 결과" showBackButton showHomeButton />
      <FilterBar />
      <ProductListControls />
      <main className="w-full absolute h-[calc(100vh-200px)] top-[200px] overflow-y-auto ">
        {children}
      </main>
    </>
  );
};

export default Searchlayout;
