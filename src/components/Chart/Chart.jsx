import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import { DataTest } from './Chart.data';

const ChartLine = ({}) => {
  const [data, setData] = useState(DataTest);

  const config = {
    data: data
      .slice(data.length - 90, data.length)
      .filter((item) => item.category === 'Gas fuel' || item.category === 'Cement production'),
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      // tickCount: 8,
      // 文本标签
      label: {
        // autoRotate: false,
        rotate: Math.PI / 6,
        offset: 10,
        style: {
          fill: '#fff',
          fontSize: 12,
        },
        formatter: (v) => `${v} 月`,
      },
      // 坐标轴线的配置项 null 表示不展示
      grid: {
        line: {
          style: {
            stroke: '#777777',
          },
        },
      },
    },
    // Y 轴相关配置
    yAxis: false,
    // point
    point: {
      size: 5,
      style: {
        lineWidth: 0,
        fillOpacity: 1,
      },
      shape: (item) => {
        return 'circle';
      },
    },
    meta: {
      // year 对应 xField || yField
      year: {
        range: [0, 1],
      },
    },
    legend: false,
    color: ['#FFCC21', '#8FE9D0', '#FAA219'],
  };

  return <Line {...config} />;
};
export default ChartLine;
