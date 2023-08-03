import React from 'react';
import classNames from 'classnames';
import './Card.scss';

const Card = ({ className, title, img, description, tags }) => {
  return (
    <div className={classNames('Card', className)}>
      <div className="Card-wrapper">
        <img src={img} />
        <div className="title">{title}</div>
      </div>
      <h3>{description}</h3>
      <div className="Card-tags">
        {' '}
        {tags?.map((e, n) => (
          <span key={n}>{e}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
