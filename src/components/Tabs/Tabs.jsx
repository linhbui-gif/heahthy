import React, { useState } from 'react';
import classNames from 'classnames';
import { Tabs as AntdTabs } from 'antd';
import './Tabs.scss';

const { TabPane } = AntdTabs;
const TabComponent = ({ className, defaultActiveKey, data = [], isCheckActiveTabs, isImage, drink }) => {
  const [activeKeyTab, setActiveKeyTab] = useState(defaultActiveKey);

  const handleChangeActiveTab = (key) => {
    setActiveKeyTab(key);
    isCheckActiveTabs?.(key);
  };

  return (
    <div className={classNames('Tab', className)}>
      <div className="Tab-tabs flex">
        {data.map((item) => (
          <div
            key={item.value}
            className={classNames('Tab-tabs-item', { active: item.value === activeKeyTab })}
            onClick={() => handleChangeActiveTab(item.value)}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div className="Tab-tabs-main">{data.find((item) => item.value === activeKeyTab)?.children}</div>
    </div>
  );
};
export default TabComponent;
