
/**
 * title: 动态加载
 * desc:
 * 利用`loadMore`可以进行动态加载数据。
 * **使用动态加载的时候请注意：**
 * **1.选项必须设置 `isLeaf` 来标示是否需要继续加载**
 * **2. 如果使用搜索功能，将只对已加载选项执行搜索逻辑。**
 */
import React from 'react';
import { Cascader, Space } from '@sensoro-design/react';

const options = [
  {
    value: 'beijing',
    label: 'Beijing',
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'shanghaishi',
        label: 'Shanghai',
      },
    ],
  },
];

export default class Demo extends React.Component {
  loadMore = (pathValue, level) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const nodes = pathValue.map((x, i) => ({
          label: `Option ${i + 1}`,
          value: i,
          isLeaf: level >= 2,
        }));

        resolve(nodes);
      }, 500);
    });

  render() {
    return (
      <Space size="large">
        <Cascader
          placeholder="Please select ..."
          style={{ width: 300, marginBottom: 20 }}
          options={options}
          loadMore={this.loadMore}
          showSearch
          allowClear
        />
        <Cascader
          placeholder="Please select ..."
          style={{ width: 300, marginBottom: 20 }}
          options={options}
          loadMore={this.loadMore}
          showSearch
          allowClear
          mode="multiple"
        />
      </Space>
    );
  }
}
