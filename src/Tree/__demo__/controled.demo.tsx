/**
 * title: 受控模式
 * desc: 可以指定树的 `selectedKeys` 或 `checkedKeys` 或 `expandedKeys` 属性使树变为受控模式，在对应的 `onSelect` / `onCheck` / `onExpand` 回调中对返回值进行操作。
 */
import { useState } from 'react';
import { Tree, Button } from '@sensoro-design/react';

const TreeData = [
  {
    label: 'Trunk 0-0',
    key: '0-0',
    children: [
      {
        label: 'Leaf 0-0-1',
        key: '0-0-1',
      },
      {
        label: 'Branch 0-0-2',
        key: '0-0-2',
        children: [
          {
            label: 'Leaf 0-0-2-1',
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
        label: 'Leaf 0-1-1',
        key: '0-1-1',
      },
      {
        label: 'Leaf 0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

export default () => {
  const allCheckedKeys = ['0-0', '0-0-1', '0-0-2', '0-0-2-1', '0-1', '0-1-1', '0-1-2'];
  const allExpandedKeys = ['0-0', '0-1', '0-0-2'];

  const [selectedKeys, setSelectedKeys] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState(allExpandedKeys);

  return (
    <div>
      <Button.Group style={{ marginBottom: 20 }}>
        <Button type="primary" onClick={() => setCheckedKeys(checkedKeys.length ? [] : allCheckedKeys)}>
          {checkedKeys.length ? 'deselect all' : 'select all'}
        </Button>
        <Button type="primary" onClick={() => setExpandedKeys(expandedKeys.length ? [] : allExpandedKeys)}>
          {expandedKeys.length ? 'fold' : 'unfold'}
        </Button>
      </Button.Group>
      <Tree
        checkable
        checkedKeys={checkedKeys}
        selectedKeys={selectedKeys}
        expandedKeys={expandedKeys}
        onSelect={(keys, extra) => {
          console.log(keys, extra);
          setSelectedKeys(keys, extra);
        }}
        onCheck={(keys, extra) => {
          console.log(keys, extra);
          setCheckedKeys(keys, extra);
        }}
        onExpand={(keys, extra) => {
          console.log(keys, extra);
          setExpandedKeys(keys, extra);
        }}
        treeData={TreeData}
      />
    </div>
  );
};
