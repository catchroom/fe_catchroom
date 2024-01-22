export const getDotDate = (inputDate: string, noDay = true, noYear = false) => {
  const week = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
  const date = new Date(inputDate);
  const dayOfWeek = week[date.getDay()];
  const hours = date.getHours();
  const minutes = date.getMinutes();

  let formattedDate = `${
    date.getMonth() + 1
  }.${date.getDate()}.${hours}:${minutes} ${dayOfWeek}`;

  if (!noDay) {
    formattedDate = `${date.getFullYear()}.${
      date.getMonth() + 1
    }.${date.getDate()}.${hours}:${minutes} ${dayOfWeek}`;
  }

  if (!noYear) {
    formattedDate = `${date.getFullYear()}.${
      date.getMonth() + 1
    }.${date.getDate()}.${hours}:${minutes}`;
  }

  return formattedDate;
};

export const decodeState = (state: StateType, date?: string) => {
  switch (state) {
    case 'ing':
      return `게시 만료일 ~ ${date}`;
    case 'done':
      return `판매일 ${date}`;
    case 'expirationDate':
      return '게시기한 만료';
    case 'notForSale':
      return '체크인 만료';
    default:
      return `구매일 ${date}`;
  }
};

export const decodeReviewState = (ismodify: ReviewType) => {
  switch (ismodify) {
    case 'onReview':
      return '작성한 리뷰보기';
    case 'noReview':
      return '리뷰쓰기';
    case 'deleteReview':
      return '리뷰 삭제완료';
    default:
      return '리뷰 작성기한 만료';
  }
};

export type ReviewType =
  | 'onReview'
  | 'noReview'
  | 'deleteReview'
  | 'outDatedReview';

// decodeState return type
export type StateType =
  | 'ing'
  | 'done'
  | 'expirationDate'
  | 'notForSale'
  | 'purchased';
export type decodeStateReturnType = ReturnType<typeof decodeState>;
