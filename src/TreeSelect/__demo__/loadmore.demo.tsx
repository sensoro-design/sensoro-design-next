
/**
 * title: 动态加载
 * desc: 可以通过 `loadMore` 进行动态加载。此时可设置 `isLeaf` 来标示叶子节点。
 */
import { useState } from 'react';
import { TreeSelect } from '@sensoro-design/react';

const defaultData = [
  {
    key: 'node1',
    value: 'node1',
    title: 'node1',
    children: [
      {
        key: 'node2',
        value: 'node2',
        title: 'node2',
      },
    ],
  },
  {
    key: 'node3',
    value: 'node3',
    title: 'node3',
    children: [
      {
        key: 'node4',
        value: 'node4',
        title: 'node4',
        isLeaf: true,
      },
      {
        key: 'node5',
        value: 'node5',
        title: 'node5',
        isLeaf: true,
      },
    ],
  },
];

export default () => {
  const [treeData, setTreeData] = useState(defaultData);
  const [value, setValue] = useState('node2');

  const loadMore = (node, dataRef) => {
    const { title, _key: key } = node.props;
    const children = [
      { title: `${title}-0`, value: `${title}-0`, key: `${key}-0` },
      { title: `${title}-1`, value: `${title}-1`, key: `${key}-1` },
    ];

    return new Promise((resolve) => {
      setTimeout(() => {
        dataRef.children = children;
        setTreeData([...treeData]);
        resolve();
      }, 1000);
    });
  };
  return (
    <TreeSelect
      showSearch
      placeholder="请选择..."
      treeData={treeData}
      value={value}
      onChange={setValue}
      loadMore={loadMore}
      triggerProps={{ popupStyle: { maxHeight: 300 } }}
      style={{ width: 300 }}
    />
  );
}
