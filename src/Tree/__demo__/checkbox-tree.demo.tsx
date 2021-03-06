/**
 * title: 带复选框的树
 * desc: 为 `Tree` 添加 `checkable` 属性即可使树具有复选框功能，可以用 `defaultCheckedKeys` 指定复选框默认选中的节点。
 */
import { useState } from 'react';
import { Tree, Checkbox } from '@sensoro-design/react';

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
        disabled: true,
        children: [
          {
            label: 'Leaf',
            key: '0-0-2-1',
          },
          {
            label: 'Leaf',
            key: '0-0-2-2',
            disableCheckbox: true,
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
            label: 'Leaf ',
            key: '0-1-1-1',
          },
          {
            label: 'Leaf ',
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
  const [checkStrictly, setCheckStrictly] = useState(false);
  return (
    <div>
      <Checkbox
        style={{ marginBottom: 24 }}
        onChange={(value) => {
          setCheckStrictly(value);
          setCheckedKeys([]);
        }}
      >
        {' '}
        checkStrictly{' '}
      </Checkbox>

      <Tree
        checkStrictly={checkStrictly}
        checkable
        checkedKeys={checkedKeys}
        onCheck={(value, extra) => {
          setCheckedKeys(value);
        }}
        treeData={TreeData}
      ></Tree>
    </div>
  );
};
