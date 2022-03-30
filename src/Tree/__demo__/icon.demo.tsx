/**
 * title: 定制节点图标
 * desc: 只需为 `TreeNode` 指定 `icon` 属性的值即可为任意节点指定任意图标。
 */
import { Tree } from '@sensoro-design/react';
import StarOutlined from '@sensoro-design/icons/StarOutlined'

const TreeNode = Tree.Node;

export default () => {

  return (
    <Tree>
      <TreeNode icon={<StarOutlined />} key="node1" title="Trunk">
        <TreeNode icon={<StarOutlined />} key="node2" title="Leaf" />
      </TreeNode>
      <TreeNode icon={<StarOutlined />} key="node3" title="Trunk">
        <TreeNode icon={<StarOutlined />} key="node4" title="Leaf" />
        <TreeNode icon={<StarOutlined />} key="node5" title="Leaf" />
      </TreeNode>
    </Tree>
  )
}
