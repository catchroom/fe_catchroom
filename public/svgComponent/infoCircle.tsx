import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InfoCircle = (props: any) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="info-circle">
      <path
        id="Icon"
        d="M9.99984 14.1667V9.16675M9.99984 6.66675H10.0082M18.3332 10.0001C18.3332 14.6025 14.6022 18.3334 9.99984 18.3334C5.39746 18.3334 1.6665 14.6025 1.6665 10.0001C1.6665 5.39771 5.39746 1.66675 9.99984 1.66675C14.6022 1.66675 18.3332 5.39771 18.3332 10.0001Z"
        stroke={props.color || '#717680'}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default InfoCircle;
