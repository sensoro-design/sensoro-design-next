
/**
 * title: 不同尺寸
 * desc: 设置 `size` 可以使用四种尺寸（small, default, large, huge）的选择器。高度分别对应 24px、32px、36px、40px。
 */
import { useState } from 'react';
import { TreeSelect, Radio } from '@sensoro-design/react';

const TreeNode = TreeSelect.Node;
const RadioGroup = Radio.Group;

export default () => {
  const [size, setSize] = useState('default');

  return (
    <div>
      <RadioGroup
        type="button"
        name="size"
        value={size}
        onChange={setSize}
        style={{ marginBottom: 20 }}
      >
        <Radio value="mini">mini</Radio>
        <Radio value="small">small</Radio>
        <Radio value="default">default</Radio>
        <Radio value="large">large</Radio>
      </RadioGroup>
      <div>
        <TreeSelect size={size} defaultValue="node1" style={{ width: 300 }}>
          <TreeNode key="node1" title="Trunk">
            <TreeNode key="node2" title="Leaf" />
          </TreeNode>
          <TreeNode key="node3" title="Trunk2">
            <TreeNode key="node4" title="Leaf" />
            <TreeNode key="node5" title="Leaf" />
          </TreeNode>
        </TreeSelect>
      </div>
    </div>
  );
}
