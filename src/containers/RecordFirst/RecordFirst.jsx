import CardLine from '@/components/CardLine';
import { Col, Row } from 'antd';
import React, { useState } from 'react';
import Data from './RecordFirst.data';
import './RecordFirst.scss';

const RecordFirst = () => {
  const [items, setItems] = useState(Data);
  const [active, setActive] = useState(false);
  const filterItem = (categItem) => {
    const updateItems = Data.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };

  return (
    <section className="RecordFirst">
      <div className="container">
        <Row gutter={[48, 48]} className="Record-main-wrapper">
          {items.map((elem) => {
            const { name, image, description } = elem;
            return (
              <Col span={24} md={8} className="Record-main-slide">
                <CardLine title={name} img={image} description={description} />
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};

export default RecordFirst;
