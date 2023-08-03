import CardRecommed from '@/components/CardRecommed';
import { Col, Row } from 'antd';
import React, { useState } from 'react';
import Data from './ListFirst.data';
import './ListFirst.scss';

const ListFirst = () => {
  const [items, setItems] = useState(Data);

  return (
    <section className="ListFirst">
      <div className="container">
        <Row gutter={[8, 8]} className="ListFirst-card">
          {items.map((elem) => {
            const { name, cap } = elem;
            return (
              <Col span={24} sm={12} md={6} key={elem.id}>
                <CardRecommed title={name} cap={cap} />
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};

export default ListFirst;
