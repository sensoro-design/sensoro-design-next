
/**
 * title: 节点占一行
 * desc: 节点占据一整行。
 */
import { Tree } from '@sensoro-design/react';

const TreeNode = Tree.Node;

export default () => {
  return (
    <Tree blockNode >
      <TreeNode title="Trunk 0-0" key="0-0">
        <TreeNode title="Branch 0-0-0" key="0-0-0" disabled>
          <TreeNode title="Leaf 0-0-0-0" key="0-0-0-0" />
          <TreeNode title="Leaf 0-0-0-1" key="0-0-0-1" />
        </TreeNode>
        <TreeNode title="Branch 0-0-1" key="0-0-1">
          <TreeNode title="Leaf 0-0-1-0" key="0-0-1-0" />
        </TreeNode>
      </TreeNode>
    </Tree>
  )
}
