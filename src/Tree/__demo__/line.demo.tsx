/**
 * title: 显示连接线
 * desc: 为 `Tree` 添加 `showLine` 属性即可使树具有连接线
 */
import { useState } from 'react';
import { Tree, Switch, Typography } from '@sensoro-design/react';

const TreeData = [
  {
    label: 'Trunk 1',
    key: '0-0',
    children: [
      {
        label: 'Trunk 1-0',
        key: '0-0-0',
        children: [
          { label: 'leaf', key: '0-0-0-0' },
          {
            label: 'leaf',
            key: '0-0-0-1',
            children: [{ label: 'leaf', key: '0-0-0-1-0' }],
          },
          { label: 'leaf', key: '0-0-0-2' },
        ],
      },
      {
        label: 'Trunk 1-1',
        key: '0-0-1',
      },
      {
        label: 'Trunk 1-2',
        key: '0-0-2',
        children: [
          { label: 'leaf', key: '0-0-2-0' },
          {
            label: 'leaf',
            key: '0-0-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Trunk 2',
    key: '0-1',
  },
  {
    label: 'Trunk 3',
    key: '0-2',
    children: [
      {
        label: 'Trunk 3-0',
        key: '0-2-0',
        children: [
          { label: 'leaf', key: '0-2-0-0' },
          { label: 'leaf', key: '0-2-0-1' },
        ],
      },
    ],
  },
];

export default () => {
  const [treeData, setTreeData] = useState(TreeData);
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <div>
        <Typography.Text>showLine</Typography.Text>
        <Switch style={{ marginLeft: 12 }} checked={checked} onChange={setChecked}></Switch>
      </div>
      <Tree defaultSelectedKeys={['0-0-1']} treeData={treeData} showLine={checked}></Tree>
    </div>
  );
};
