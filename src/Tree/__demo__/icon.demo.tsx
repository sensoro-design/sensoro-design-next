
/**
 * title: 定制节点图标
 * desc: 只需为 `TreeNode` 指定 `icon` 属性的值即可为任意节点指定任意图标。
 */
import { Tree } from '@sensoro-design/react';
import {  IconStar } from '@sensoro-design/react/icon';

const TreeNode = Tree.Node;

export default () => {

  return (
    <Tree>
      <TreeNode icon={<IconStar />} key="node1" title="Trunk">
        <TreeNode icon={<IconStar />} key="node2" title="Leaf" />
      </TreeNode>
      <TreeNode icon={<IconStar />} key="node3" title="Trunk">
        <TreeNode icon={<IconStar />} key="node4" title="Leaf" />
        <TreeNode icon={<IconStar />} key="node5" title="Leaf" />
      </TreeNode>
    </Tree>
  )
}
