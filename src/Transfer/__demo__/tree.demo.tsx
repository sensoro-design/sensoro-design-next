import React, { useState } from 'react';
import { Transfer } from '@sensoro-design/react';

const treeData = [
  {
    label: 'Asia',
    value: 'Asia',
    key: 'Asia',
    children: [
      {
        label: 'China',
        value: 'China',
        key: 'China',
        children: [
          {
            label: 'Beijing',
            value: 'Beijing',
            key: 'Beijing',
          },
          {
            label: 'Shanghai',
            value: 'Shanghai',
            key: 'Shanghai',
          },
          {
            label: 'Chengdu',
            value: 'Chengdu',
            key: 'Chengdu',
          },
        ],
      },
      {
        label: 'Japan',
        value: 'Japan',
        key: 'Japan',
        children: [
          {
            label: 'Osaka',
            value: 'Osaka',
            key: 'Osaka',
          },
        ],
      },
    ],
  },
  {
    label: 'North America',
    value: 'North America',
    key: 'North America',
    children: [
      {
        label: 'United States',
        value: 'United States',
        key: 'United States',
      },
      {
        label: 'Canada',
        value: 'Canada',
        key: 'Canada',
      },
      {
        label: 'Mexico',
        value: 'Mexico',
        disabled: true,
        key: 'Mexico',
      },
      {
        label: 'Cuba',
        value: 'Cuba',
        key: 'Cuba',
      },
    ],
  },
];

export default () => {
  const [v, $v] = useState(['Shanghai']);

  return (
    <div style={{ margin: 10, padding: 10, width: 600 }}>
      <Transfer dataSource={treeData} type="treeList" value={v} onChange={$v} />
    </div>
  );
};
