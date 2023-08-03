import Button from '@/components/Button';
import Card from '@/components/Card';
import { Col, Row } from 'antd';
import React, { useState } from 'react';
import Data from './ListSecond.data';
import './ListSecond.scss';

const ListSecond = () => {
  const [items, setItems] = useState(Data);

  return (
    <section className="ListSecond">
      <div className="container">
        <Row gutter={[8, 8]} className="ListSecond-card">
          {items.map((elem) => {
            const { name, image, description, tags } = elem;

            return (
              <Col span={12} md={8} xl={6} key={elem.id}>
                <Card title={name} img={image} description={description} tags={tags} />
              </Col>
            );
          })}
        </Row>
        <Button title="記録をもっと見る" />
      </div>
    </section>
  );
};

export default ListSecond;
