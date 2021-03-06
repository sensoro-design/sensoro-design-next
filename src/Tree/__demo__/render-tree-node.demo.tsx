/**
 * title: 定制额外节点
 * desc: 为 `Tree` 设置 `renderExtra` 可以自定义树节点的展示。
 */
import { useState } from 'react';
import { Tree } from '@sensoro-design/react';
import PlusOutlined from '@sensoro-design/icons/PlusOutlined';

const generatorTreeNodes = (treeData) => {
  return treeData.map((item) => {
    const { children, key, ...rest } = item;
    return (
      <Tree.Node key={key} {...rest} dataRef={item}>
        {children ? generatorTreeNodes(item.children) : null}
      </Tree.Node>
    );
  });
};

const TreeData = [
  {
    label: 'Trunk',
    key: '0-0',
    children: [
      {
        label: 'Leaf',
        key: '0-0-1',
      },
      {
        label: 'Branch',
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
    label: 'Trunk',
    key: '0-1',
    children: [
      {
        label: 'Branch',
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
  const [treeData, setTreeData] = useState(TreeData);

  return (
    <div style={{ width: 500, padding: 2, overflow: 'auto' }}>
      <Tree
        blockNode
        checkable
        renderExtra={(node) => {
          return (
            <PlusOutlined
              style={{
                position: 'absolute',
                right: 8,
                fontSize: 12,
                top: 10,
                color: '#3370ff',
              }}
              onClick={() => {
                const dataChildren = node.dataRef.children || [];
                dataChildren.push({
                  title: 'new tree node',
                  key: node._key + '-' + (dataChildren.length + 1),
                });
                node.dataRef.children = dataChildren;

                setTreeData([...treeData]);
              }}
            />
          );
        }}
      >
        {generatorTreeNodes(treeData)}
      </Tree>
    </div>
  );
};
