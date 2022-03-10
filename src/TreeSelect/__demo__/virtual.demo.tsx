
/**
 * title: 虚拟列表
 * desc: 通过指定 `treeProps.virtualListProps` 来开启虚拟列表，在大量数据时获得高性能表现。
 */
import React from 'react';
import { TreeSelect } from '@sensoro-design/react';

function loop(path = '0', level = 2) {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const key = `${path}-${i}`;
    const treeNode = {
      title: key,
      key,
    };

    if (level > 0) {
      treeNode.children = loop(key, level - 1);
    }

    list.push(treeNode);
  }
  return list;
}

const treeData = loop();

export default () => {
  const treeRef = React.useRef();

  return (
    <div>
      <TreeSelect
        treeData={treeData}
        treeProps={{
          height: 200,
          renderTitle: (props) => {
            return <span style={{ whiteSpace: 'nowrap' }}>{props.title}</span>;
          },
        }}
      />
    </div>
  );
}
