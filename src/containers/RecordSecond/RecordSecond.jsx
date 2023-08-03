import ChartLine from '@/components/ChartLine';
import { Tabs } from 'antd';
import './RecordSecond.scss';

const RecordSecond = () => {
  return (
    <div className="container">
      <section className="RecordSecond">
        <Tabs>
          <Tabs.TabPane tab="日" key="item-1">
            <div className="RecordSecond-legend">
              BODY <br /> RECORD
              <span>2021.05.21</span>
            </div>
            <ChartLine />
          </Tabs.TabPane>
          <Tabs.TabPane tab="週" key="item-2">
            <div className="RecordSecond-legend">
              BODY <br /> RECORD
              <span>2021.12.01</span>
            </div>
            <ChartLine />
          </Tabs.TabPane>
          <Tabs.TabPane tab="月" key="item-3">
            <div className="RecordSecond-legend">
              BODY <br /> RECORD
              <span>2020.02.05</span>
            </div>
            <ChartLine />
          </Tabs.TabPane>
          <Tabs.TabPane tab="年" key="item-4">
            <div className="RecordSecond-legend">
              BODY <br /> RECORD
              <span>2021.10.10</span>
            </div>
            <ChartLine />
          </Tabs.TabPane>
        </Tabs>
      </section>
    </div>
  );
};

export default RecordSecond;
