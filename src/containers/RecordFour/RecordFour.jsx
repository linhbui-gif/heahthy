import Button from '@/components/Button';
import CardDiary from '@/components/CardDiary';
import { Col, Row, Tabs } from 'antd';
import { useState } from 'react';
import Data from './RecordFour.data';
import './RecordFour.scss';

const RecordFour = () => {
  const [items, setItems] = useState(Data);
  return (
    <div className="container">
      <section className="RecordFour">
        <Row gutter={[12, 12]} className="RecordFour-card">
          {items.map((elem) => {
            const { name, date, time, description } = elem;

            return (
              <Col span={12} md={8} xl={6} key={elem.id}>
                <CardDiary title={name} date={date} time={time} description={description} />
              </Col>
            );
          })}
        </Row>
        <Button title="自分の日記をもっと見る" />
      </section>
    </div>
  );
};

export default RecordFour;
