
/**
 * title: 定制组件图标
 * desc: 通过`icons` 属性即可设置组件 `loadingIcon`,`dragIcon`,`switcherIcon`。
 */
import { Tree } from '@sensoro-design/react';
import DownOutlined from '@sensoro-design/icons/DownOutlined';
import FileOutlined from '@sensoro-design/icons/FileOutlined';
import { IconDragArrow } from '@sensoro-design/react/icon';

const TreeNode = Tree.Node;

export default () => {
  return (
    <Tree
      icons={{
        switcherIcon: <DownOutlined />,
        dragIcon: <IconDragArrow />
      }}
      showLine
      draggable
    >
      <TreeNode key="node1" title="Trunk">
        <TreeNode key="node2" title="Leaf" />
      </TreeNode>
      <TreeNode key="node3" title="Trunk">
        <TreeNode key="node4" icons={{ switcherIcon: <FileOutlined /> }} title="Leaf" />
        <TreeNode key="node5" icons={{ switcherIcon: <FileOutlined /> }} title="Leaf" />
      </TreeNode>
    </Tree>
  )
}
