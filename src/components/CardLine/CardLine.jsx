import React from 'react';
import classNames from 'classnames';
import './CardLine.scss';

const CardLine = ({ className, title, img, description, tags }) => {
  return (
    <div className={classNames('CardLine', className)}>
      <div className="CardLine-wrapper">
        <img src={img} />
        <div className="CardLine-wrapper-content">
          <div className="title">{title}</div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardLine;
