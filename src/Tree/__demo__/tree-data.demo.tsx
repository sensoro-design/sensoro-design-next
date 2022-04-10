/**
 * title: 由treeData直接生成
 * desc:
 */
import { useState } from 'react';
import { Tree } from '@sensoro-design/react';

const TreeData = [
  {
    label: 'Trunk 0-0',
    key: '0-0',
    children: [
      {
        label: 'Branch 0-0-2',
        key: '0-0-2',
        selectable: false,
        children: [
          {
            label: 'Leaf',
            key: '0-0-2-1',
            children: [
              {
                label: 'Leafsss 0-0-2',
                key: '0-0-2-1-0',
                children: [
                  {
                    label: 'Leaf',
                    key: '0-0-2-1-0-0',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Trunk 0-1',
    key: '0-1',
    children: [
      {
        label: 'Branch 0-1-1',
        key: '0-1-1',
        children: [
          {
            label: 'Leaf',
            key: '0-1-1-0',
          },
        ],
      },
    ],
  },
];

export default () => {
  const [treeData, setTreeData] = useState(TreeData);

  return (
    <div>
      <Tree defaultSelectedKeys={['0-0-1']} treeData={treeData}></Tree>
    </div>
  );
};
