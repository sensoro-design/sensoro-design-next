/**
 * title: 不同尺寸
 * desc: 通过设置 `size` 来指定大小。
 */
import React from 'react';
import { Tree, Radio } from '@sensoro-design/react';

export default () => {
  const [size, setSize] = React.useState('default');

  return (
    <div>
      <Radio.Group
        options={['small', 'default', 'large']}
        type="button"
        value={size}
        onChange={setSize}
        style={{ marginBottom: 20 }}
      ></Radio.Group>
      <Tree blockNode style={{ marginRight: 20 }} checkable size={size}>
        <Tree.Node label="Trunk 0-0" key="0-0">
          <Tree.Node label="Branch 0-0-0" key="0-0-0" disabled>
            <Tree.Node label="Leaf" key="0-0-0-0" />
            <Tree.Node label="Leaf" key="0-0-0-1" />
          </Tree.Node>
          <Tree.Node label="Branch 0-0-1" key="0-0-1">
            <Tree.Node label="Leaf" key="0-0-1-0" />
          </Tree.Node>
        </Tree.Node>
      </Tree>
    </div>
  );
};
