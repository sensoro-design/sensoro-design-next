
/**
 * title: 搜索
 * desc: 设置 `showSearch=true` 启用搜索功能。动态加载时候只能在已加载数据中进行搜索。默认的关键字搜索是从`value`字段匹配。也可以传入 `filterTreeNode`自定义过滤方式。
 */
import React from 'react';
import { TreeSelect, Space } from '@sensoro-design/react';

const treeData = [
  {
    title: 'Trunk 0-0',
    value: 'Trunk 0-0',
    key: '0-0',
    children: [
      {
        title: 'Branch 0-0-1',
        value: 'Branch 0-0-1',
        key: '0-0-1',
        children: [
          {
            title: 'Leaf 0-0-1-1',
            value: 'Leaf 0-0-1-1',
            key: '0-0-1-1'
          },
          {
            title: 'Leaf 0-0-1-2',
            value: 'Leaf 0-0-1-2',
            key: '0-0-1-2'
          }
        ]
      },
    ],
  },
  {
    title: 'Trunk 0-1',
    value: 'Trunk 0-1',
    key: '0-1',
    children: [
      {
        title: 'Branch 0-1-1',
        value: 'Branch 0-1-1',
        key: '0-1-1',
        children: [
          {
            title: 'Leaf 0-1-1-0',
            value: 'Leaf 0-1-1-0',
            key: '0-1-1-0',
          }
        ]
      },
      {
        title: 'Branch 0-1-2',
        value: 'Branch 0-1-2',
        key: '0-1-2',
        children: [
          {
            title: 'Leaf 0-1-2-0',
            value: 'Leaf 0-1-2-0',
            key: '0-1-2-0',
          }
        ]
      },
    ],
  },
];

export default class Demo extends React.Component {
  handleChange = (value) => {
    console.log(value);
    this.setState({ value });
  };

  filterTreeNode = (inputText, node) => {
    return node.props.title.toLowerCase().indexOf(inputText.toLowerCase()) > -1;
  };

  render() {
    return (
      <Space size="large">
        <TreeSelect
          showSearch={true}
          placeholder="Please select ..."
          allowClear={true}
          treeData={treeData}
          onChange={this.handleChange}
          treeProps={{
            onSelect: (v, n) => {
              console.log(n)
            }
          }}
          style={{ width: 300 }}
        />
        <TreeSelect
          showSearch={true}
          placeholder="Please select ..."
          allowClear={true}
          treeProps={{
            onSelect: (v, n) => {
              console.log(n)
            }
          }}
          treeData={treeData}
          filterTreeNode={this.filterTreeNode}
          onChange={this.handleChange}
          style={{ width: 300 }}
        />
      </Space>
    );
  }
}
