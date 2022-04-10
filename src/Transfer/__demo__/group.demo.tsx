/**
 * title: 分组
 * desc: 将 type 设为 groupList
 */
import React from 'react';
import { Transfer } from '@sensoro-design/react';

const dataSource = [
  {
    title: '类别A',
    children: [
      { label: 'A-1', value: 1, disabled: false, key: 1 },
      { label: 'A-2', value: 2, disabled: false, key: 2 },
      { label: 'A-3', value: 3, disabled: false, key: 3 },
    ],
  },
  {
    title: '类别B',
    children: [
      { label: 'B-1', value: 4, disabled: false, key: 4 },
      { label: 'B-2', value: 5, disabled: false, key: 5 },
      { label: 'B-3（disabled）', value: 6, disabled: true, key: 6 },
    ],
  },
  {
    title: '类别C',
    children: [
      { label: 'C-1', value: 7, disabled: false, key: 7 },
      { label: 'C-2', value: 8, disabled: false, key: 8 },
      { label: 'C-3', value: 9, disabled: false, key: 9 },
      { label: 'C-4', value: 10, disabled: false, key: 10 },
      { label: 'C-5', value: 11, disabled: false, key: 11 },
      { label: 'C-6', value: 12, disabled: false, key: 12 },
      { label: 'C-7', value: 13, disabled: false, key: 13 },
    ],
  },
];

export default () => {
  return (
    <Transfer
      type="groupList"
      defaultValue={[6]}
      style={{ width: 568 }}
      dataSource={dataSource}
      onChange={(values, items) => console.log(values, items)}
    />
  );
};
