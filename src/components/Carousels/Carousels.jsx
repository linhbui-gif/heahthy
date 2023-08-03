import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './Carousels.scss';

export const Carousels = ({
  dots = true,
  arrows = true,
  infinite = true,
  rows = 1,
  slidesToShow = 1,
  slidesToScroll = 1,
  slidesPerRow = 1,
  responsive = [],
  autoplay,
  onDragging,
  children,
}) => {
  function RenderPrevArrow({ className, onClick }) {
    return (
      <div className={classNames('Carousels-arrow prev', className)} onClick={onClick}>
        <Icon name={EIconName.ArrowLeft} color={EIconColor.WHITE} />
      </div>
    );
  }

  function RenderNextArrow({ className, onClick }) {
    return (
      <div className={classNames('Carousels-arrow next', className)} onClick={onClick}>
        <Icon name={EIconName.ArrowRight} color={EIconColor.WHITE} />
      </div>
    );
  }
  const settings = {
    speed: 500,
    dots,
    arrows,
    infinite,
    autoplay,
    slidesPerRow,
    rows,
    autoplaySpeed: 5000,
    slidesToShow,
    slidesToScroll,
    nextArrow: <RenderNextArrow />,
    prevArrow: <RenderPrevArrow />,
    responsive,
    beforeChange: () => onDragging?.(true),
    afterChange: () => onDragging?.(false),
  };
  return (
    <div className={classNames('Carousels')}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousels;
