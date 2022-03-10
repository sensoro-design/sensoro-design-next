
/**
 * title: 动态加载
 * desc: 动态加载节点。
 */
import React from 'react';
import { Tree } from '@sensoro-design/react';

const defaultTreeData = [
  {
    title: 'Trunk 0-0',
    key: '0-0'
  },
  {
    title: 'Trunk 0-1',
    key: '0-1',
    children: [
      {
        title: 'Branch 0-1-1',
        key: '0-1-1'
      }
    ],
  },
];

export default () => {
  const [treeData, setTreeData] = React.useState(defaultTreeData);

  const loadMore = (treeNode) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        treeNode.props.dataRef.children = [
          { title: `leaf`, key: `${treeNode.props._key}-1`, isLeaf: true },
        ];
        setTreeData([...treeData]);
        resolve();
      }, 1000);
    });
  };

  return (
    <Tree defaultSelectedKeys={['node1']} loadMore={loadMore} treeData={treeData} />
  );
}
