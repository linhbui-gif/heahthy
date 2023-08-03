import { Col, Row } from 'antd';
import React from 'react';
import d01 from '@/assets/images/d01.jpg';
import './Banner.scss';
import ChartLine from '@/components/Chart';

const BannerMain = () => {
  return (
    <div className="BannerMain">
      <Row gutter={[24, 24]} className="BannerMain-wrapper">
        <Col span={24} md={10} className="BannerMain-slide">
          <div className="BannerMain-slide-img" style={{ backgroundImage: `url(${d01})` }} />
        </Col>
        <Col span={24} md={14} className="BannerMain-chart">
          <ChartLine />
        </Col>
      </Row>
    </div>
  );
};
export default BannerMain;
