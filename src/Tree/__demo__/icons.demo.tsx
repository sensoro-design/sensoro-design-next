/**
 * title: 定制组件图标
 * desc: 通过`icons` 属性即可设置组件 `loadingIcon`,`dragIcon`,`switcherIcon`。
 */
import { Tree } from '@sensoro-design/react';
import DownOutlined from '@sensoro-design/icons/DownOutlined';
import FileOutlined from '@sensoro-design/icons/FileOutlined';
import DragOutlined from '@sensoro-design/icons/DragOutlined';

const TreeNode = Tree.Node;

export default () => {
  return (
    <Tree
      icons={{
        switcherIcon: <DownOutlined />,
        dragIcon: <DragOutlined />,
      }}
      showLine
      draggable
    >
      <TreeNode key="node1" label="Trunk">
        <TreeNode key="node2" label="Leaf" />
      </TreeNode>
      <TreeNode key="node3" label="Trunk">
        <TreeNode key="node4" icons={{ switcherIcon: <FileOutlined /> }} label="Leaf" />
        <TreeNode key="node5" icons={{ switcherIcon: <FileOutlined /> }} label="Leaf" />
      </TreeNode>
    </Tree>
  );
};
