/**
 * title: 受控模式
 * desc: 受控模式。
 */
import React from 'react';
import { TreeSelect } from '@sensoro-design/react';

import CalendarOutlined from '@sensoro-design/icons/CalendarOutlined';

const treeData = [
  {
    key: 'node1',
    icon: <CalendarOutlined />,
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
    icon: <CalendarOutlined />,
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
  state = {
    value: 'node2',
  };

  handleChange = (value) => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <TreeSelect
        treeData={treeData}
        value={this.state.value}
        onChange={this.handleChange}
        style={{ width: 300 }}
      />
    );
  }
}
