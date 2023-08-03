import React from 'react';
import classNames from 'classnames';
import './CardDiary.scss';

const CardDiary = ({ className, title, date, time, description, tags }) => {
  return (
    <div className={classNames('CardDiary', className)}>
      <div className="CardDiary-times">
        <div className="date">{date}</div>
        <div className="time">{time}</div>
      </div>
      <div className="CardDiary-wrapper">
        <div className="title">{title}</div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardDiary;
