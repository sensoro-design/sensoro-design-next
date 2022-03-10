
/**
 * title: 设置 value 格式
 * desc: `labelInValue` 为 `true` 时，`value` 格式为： `{ label: string, value: string }`。
 */
import React from 'react';
import { TreeSelect } from '@sensoro-design/react';
import { IconCalendar } from '@sensoro-design/react/icon';

const treeData = [
  {
    key: 'node1',
    icon: <IconCalendar />,
    title: 'Trunk',
    children: [
      {
        key: 'node2',
        title: 'Leaf',
      },
    ],
  },
  {
    key: 'node3',
    title: 'Trunk2',
    icon: <IconCalendar />,
    children: [
      {
        key: 'node4',
        title: 'Leaf',
      },
      {
        key: 'node5',
        title: 'Leaf',
      },
    ],
  },
];

export default class Demo extends React.Component {
  handleChange = (value) => {
    console.log(value);
  };

  render() {
    return (
      <TreeSelect
        labelInValue={true}
        treeData={treeData}
        defaultValue={{ value: 'node2', label: 'Leaf' }}
        onChange={this.handleChange}
        style={{ width: 300 }}
      />
    );
  }
}
