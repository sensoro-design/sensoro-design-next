/**
 * title: 扩展下拉菜单
 * desc: 使用 `dropdownRender` 对下拉菜单进行自由扩展。
 */
import React from 'react';
import { useState } from 'react';
import { TreeSelect, Divider, Input, Button } from '@sensoro-design/react';
import PlusOutlined from '@sensoro-design/icons/PlusOutlined'

const defaultTreeData = [
  {
    key: 'node1',
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
  const [treeData, setTreeData] = React.useState(defaultTreeData);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    setTreeData([
      ...treeData,
      {
        key: inputValue,
        title: inputValue,
      }
    ] as any)
  }

  return <TreeSelect
    placeholder="Please select ..."
    treeData={treeData}
    style={{ width: 300 }}
    allowClear
    dropdownMenuStyle={{ maxHeight: 250, display: 'flex', flexDirection: 'column' }}
    dropdownRender={(menu) => (
        <>
        <div style={{flex: 1, overflow: 'auto'}}>
          {menu}
        </div>
        <div>
          <Divider style={{ margin: 0 }} />
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px 12px' }}>
            <Input
              size='small'
              style={{ marginRight: 18 }}
              value={inputValue}
              onChange={(value) => setInputValue(value)}
            />
            <Button
              style={{ fontSize: 14, padding: '0 6px' }}
              type='text'
              onClick={addItem}
            >
              <PlusOutlined />
              Add item
            </Button>
        </div>
      </div>
      </>
    )}
  >
  </TreeSelect>
}
