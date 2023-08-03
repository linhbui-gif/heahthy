import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 3C29.5695 3 34.911 5.21249 38.8492 9.15076C42.7875 13.089 45 18.4305 45 24C45 29.5695 42.7875 34.911 38.8492 38.8492C34.911 42.7875 29.5695 45 24 45C18.4305 45 13.089 42.7875 9.15076 38.8492C5.21249 34.911 3 29.5695 3 24C3 18.4305 5.21249 13.089 9.15076 9.15076C13.089 5.21249 18.4305 3 24 3ZM21.384 28.143L16.719 23.475C16.5518 23.3078 16.3532 23.1751 16.1347 23.0846C15.9162 22.9941 15.682 22.9475 15.4455 22.9475C15.209 22.9475 14.9748 22.9941 14.7563 23.0846C14.5378 23.1751 14.3392 23.3078 14.172 23.475C13.8342 23.8128 13.6445 24.2708 13.6445 24.7485C13.6445 25.2262 13.8342 25.6842 14.172 26.022L20.112 31.962C20.2788 32.1301 20.4772 32.2635 20.6957 32.3545C20.9143 32.4456 21.1487 32.4924 21.3855 32.4924C21.6223 32.4924 21.8567 32.4456 22.0753 32.3545C22.2938 32.2635 22.4922 32.1301 22.659 31.962L34.959 19.659C35.1285 19.4925 35.2633 19.294 35.3557 19.0751C35.4481 18.8562 35.4962 18.6211 35.4973 18.3835C35.4984 18.1459 35.4525 17.9105 35.3621 17.6907C35.2718 17.4709 35.1388 17.2712 34.9709 17.1031C34.803 16.935 34.6034 16.8018 34.3838 16.7112C34.1641 16.6206 33.9287 16.5744 33.6911 16.5752C33.4535 16.576 33.2184 16.6239 32.9994 16.716C32.7804 16.8081 32.5817 16.9427 32.415 17.112L21.384 28.143Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
