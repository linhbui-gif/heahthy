import React from 'react';
import classNames from 'classnames';
import './CardRecommed.scss';

const CardRecommed = ({ className, title, cap }) => {
  return (
    <div className={classNames('CardRecommed', className)}>
      <div className="CardRecommed-wrapper">
        <div className="title">{title}</div>
        <hr />
        <div className="cap">{cap}</div>
      </div>
    </div>
  );
};

export default CardRecommed;
