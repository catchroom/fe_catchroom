'use client';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { rangeDate } from '@/atoms/calendar/calendarAtoms';
import { SEARCH_DEFAULT } from '@/constants/search-detail';
import BottomSheets from '@/components/common/bottomSheets';
import CheckBoxComponent from '@/components/common/checkBox';
import CalendarComponent from '@/components/common/calendar';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

const CalendarBottomSheet = () => {
  const [isCalendarChecked, setIsCalendarChecked] = useState<boolean>(true);
  const [range] = useRecoilState(rangeDate);

  const handleDateSelectAll = () => {
    setIsCalendarChecked(!isCalendarChecked);
  };

  return (
    <>
      {SEARCH_DEFAULT.props.map((prop, index) => {
        if (index !== 1) return;
        let placeholderValue = prop.placeholder;

        if (index === 1) {
          if (range && range.from && range.to) {
            const fromDate = `${format(range.from, 'MM월 dd일(E)', {
              locale: ko,
            }).toString()}`;
            const toDate = `${format(range.to, 'MM월 dd일(E)', {
              locale: ko,
            }).toString()}`;

            if (fromDate === toDate) placeholderValue = fromDate;
            else placeholderValue = fromDate + ` - ` + toDate;
          }
          if (isCalendarChecked) placeholderValue = '날짜 무관';
        }

        return (
          <BottomSheets
            key={index}
            icon={prop.icon}
            title={prop.BottomSheetTitle}
            innerTitle={prop.BottomSheetTitle}
            placeholder={placeholderValue}
            buttonSelect="search"
            closeButton
            innerButtonTitle={'확인'}
          >
            <div className="mt-5 w-full">
              {prop.icon === 'calendar' && (
                <>
                  <CheckBoxComponent
                    id="calendar"
                    labelText="날짜 무관"
                    isLabelTextUnderline
                    handleSelectState={handleDateSelectAll}
                    isBoxChecked={isCalendarChecked}
                  />
                  <div className="w-full h-[580px] mt-4">
                    <CalendarComponent
                      useSingleDate={false}
                      searchAll={isCalendarChecked}
                    />
                  </div>
                </>
              )}
            </div>
          </BottomSheets>
        );
      })}
    </>
  );
};

export default CalendarBottomSheet;