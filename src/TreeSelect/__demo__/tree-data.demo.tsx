/**
 * title: 通过数据生成树结构
 * desc: 通过传入 `treeData` 数据生成树结构。
 */
import { TreeSelect } from '@sensoro-design/react';

import CalendarOutlined from '@sensoro-design/icons/CalendarOutlined';

const treeData = [
  {
    key: 'node1',
    icon: <CalendarOutlined />,
    title: 'Trunk',
    disabled: true,
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

export default () => {
  return (
    <TreeSelect treeData={treeData} placeholder="请选择..." style={{ width: 300 }} />
  )
}
