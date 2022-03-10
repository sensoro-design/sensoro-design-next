
/**
 * title: 自定义 TreeData 的字段名称
 * desc: 通过 `fieldNames` 字段可以自定义 TreeData 的字段名。
 */
import { useState } from 'react';
import { TreeSelect } from '@sensoro-design/react';

const TreeData = [
  {
    label: 'Trunk 0-0',
    value: '0-0',
    items: [
      {
        label: 'Branch 0-0-2',
        value: '0-0-2',
        selectable: false,
        items: [
          {
            label: 'Leaf',
            value: '0-0-2-1',
            items: [
              {
                label: 'Leaf 0-0-2',
                value: '0-0-2-1-0',
                items: [
                  {
                    label: 'Leaf',
                    value: '0-0-2-1-0-0'
                  }
                ]
              },
            ],
          }
        ]
      },
    ],
  },
  {
    label: 'Trunk 0-1',
    value: '0-1',
    items: [
      {
        label: 'Branch 0-1-1',
        value: '0-1-1',
        items: [
          {
            label: 'Leaf',
            value: '0-1-1-0',
          }
        ]
      },
    ],
  },
];

export default () => {
  const [treeData, setTreeData] = useState(TreeData)

  return <div>
    <TreeSelect
      style={{width: 300}}
      defaultSelectedKeys={['0-0-1']}
      treeData={treeData}
      fieldNames={{
        key: 'value',
        title: 'label',
        children: 'items'
      }}
    >
    </TreeSelect>
  </div>
}
