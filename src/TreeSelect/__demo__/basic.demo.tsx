/**
 * title: 基础用法
 * desc: 最简单的用法。
 */
import { TreeSelect } from '@sensoro-design/react';

const TreeNode = TreeSelect.Node;

export default () => {
  return () => {
    return (
      <TreeSelect defaultValue="node1" style={{ width: 300 }} allowClear>
        <TreeNode key="node1" title="Trunk">
          <TreeNode key="node2" title="Leaf" />
        </TreeNode>
        <TreeNode key="node3" title="Trunk2">
          <TreeNode key="node4" title="Leaf" />
          <TreeNode key="node5" title="Leaf" />
        </TreeNode>
      </TreeSelect>
    )
  }
}
