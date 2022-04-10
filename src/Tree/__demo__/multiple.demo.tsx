/**
 * title: 多选
 * desc: `Tree` 设置 `multiple` 属性为`true`，可以启用多选。
 */
import { useState } from 'react';
import { Tree, Checkbox, Typography } from '@sensoro-design/react';

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
        disableCheckbox: true,
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
        checkable: false,
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
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <Checkbox
        style={{ marginBottom: 24 }}
        checked={checked}
        onChange={(value) => {
          setChecked(value);
          setSelectedKeys([]);
        }}
      >
        {' '}
        multiple{' '}
      </Checkbox>

      <br />
      <Typography.Text>Current: {selectedKeys.join(' , ')}</Typography.Text>
      <br />
      <Tree
        multiple={checked}
        selectedKeys={selectedKeys}
        onSelect={(value, extra) => {
          console.log(value, extra);
          setSelectedKeys(value);
        }}
        treeData={TreeData}
      ></Tree>
    </div>
  );
};
