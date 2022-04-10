/**
 * title: 节点占一行
 * desc: 节点占据一整行。
 */
import { Tree } from '@sensoro-design/react';

const TreeNode = Tree.Node;

export default () => {
  return (
    <Tree blockNode>
      <TreeNode label="Trunk 0-0" key="0-0">
        <TreeNode label="Branch 0-0-0" key="0-0-0" disabled>
          <TreeNode label="Leaf 0-0-0-0" key="0-0-0-0" />
          <TreeNode label="Leaf 0-0-0-1" key="0-0-0-1" />
        </TreeNode>
        <TreeNode label="Branch 0-0-1" key="0-0-1">
          <TreeNode label="Leaf 0-0-1-0" key="0-0-1-0" />
        </TreeNode>
      </TreeNode>
    </Tree>
  );
};
