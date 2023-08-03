import Button from '@/components/Button';
import ButtonHexagon from '@/components/ButtonHexagon';
import Card from '@/components/Card';
import { Col, Row } from 'antd';
import React, { useState } from 'react';
import Data from './TabHome.data';
import './TabHome.scss';
const TabHome = () => {
  const [items, setItems] = useState(Data);
  const [active, setActive] = useState(false);
  const filterItem = (categoryItem) => {
    const updateItems = Data.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updateItems);
    setActive(true);
  };
  return (
    <section className="TabHome">
      <div className="container">
        <ul className="TabHome-pills justify-content-center">
          <li className="nav-item">
            <ButtonHexagon
              title="Morning"
              className={active ? 'nav-link' : 'nav-link active'}
              onClick={() => filterItem('Morning')}
              drink={false}
            />
          </li>
          <li className="nav-item">
            <ButtonHexagon
              title="Lunch"
              className={active ? 'nav-link' : 'nav-link active'}
              onClick={() => filterItem('Lunch')}
              drink={false}
            />
          </li>
          <li className="nav-item">
            <ButtonHexagon
              title="Dinner"
              className={active ? 'nav-link' : 'nav-link active'}
              onClick={() => filterItem('Dinner')}
              drink={false}
            />
          </li>
          <li className="nav-item">
            <ButtonHexagon
              title="Snack"
              className={active ? 'nav-link' : 'nav-link active'}
              onClick={() => filterItem('Snack')}
              drink={true}
            />
          </li>
        </ul>
      </div>
      <div className="container">
        <Row gutter={[8, 8]} className="TabHome-card">
          {items.map((element) => {
            const { name, image } = element;

            return (
              <Col span={12} md={8} xl={6} key={element.id}>
                <Card title={name} img={image} />
              </Col>
            );
          })}
        </Row>
        <Button title="記録をもっと見る" />
      </div>
    </section>
  );
};
export default TabHome;
