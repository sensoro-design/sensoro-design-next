/**
 * title: 设置回填方式
 * desc: 为 `Tree` 添加 `checkedStrategy` 可以设置选中时的回填方式
 */
import { useState } from 'react';
import { Tree, Radio, Typography } from '@sensoro-design/react';

const TreeData = [
  {
    label: 'Trunk 0-0',
    key: '0-0',
    children: [
      {
        label: 'Leaf',
        key: '0-0-1',
      },
      {
        label: 'Branch 0-0-2',
        key: '0-0-2',
        children: [
          {
            label: 'Leaf',
            key: '0-0-2-1',
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
            key: '0-1-1-1',
          },
          {
            label: 'Leaf',
            key: '0-1-1-2',
          },
        ],
      },
      {
        label: 'Leaf',
        key: '0-1-2',
      },
    ],
  },
];

export default () => {
  const [checkedKeys, setCheckedKeys] = useState(['0-0', '0-1']);
  const [checkedStrategy, setCheckedStrategy] = useState(Tree.SHOW_ALL);
  return (
    <div>
      <Radio.Group
        type="button"
        value={checkedStrategy}
        onChange={(value) => {
          setCheckedStrategy(value);
          setCheckedKeys([]);
        }}
        options={[
          {
            value: Tree.SHOW_ALL,
            label: 'show all',
          },
          {
            value: Tree.SHOW_PARENT,
            label: 'show parent',
          },
          {
            value: Tree.SHOW_CHILD,
            label: 'show child',
          },
        ]}
      />
      <div style={{ margin: '20px 0' }}>
        <Typography.Text>Current: {checkedKeys.join(' , ')}</Typography.Text>
      </div>
      <Tree
        checkedStrategy={checkedStrategy}
        checkable
        checkedKeys={checkedKeys}
        onCheck={(value, extra) => {
          setCheckedKeys(value);
        }}
        treeData={TreeData}
      />
    </div>
  );
};
