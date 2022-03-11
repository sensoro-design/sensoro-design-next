/**
 * title: 拖拽排序
 * desc: 指定 `draggable` 属性为 `true`，可拖拽排序左右面板。
 */
import { useState } from 'react';
import { Transfer } from '@sensoro-design/react';

export default () => {
  const swapArrayItem = (arr, index1, index2) => {
    arr = [...arr];
    arr.splice(index1, 1, ...arr.splice(index2, 1, arr[index1]));
    return arr;
  };

  const [dataSource, setDataSource] = useState(
    new Array(8).fill(null).map((_, index) => ({
      key: `${index + 1}`,
      value: `Option ${index + 1}`,
    }))
  );

  return (
    <Transfer
      draggable
      dataSource={dataSource}
      defaultTargetKeys={['1', '2', '3']}
      defaultSelectedKeys={['4', '6', '7']}
      titleTexts={['To-do list', 'Selected list']}
      onDrop={({ dragItem, dropItem }) => {
        const indexDragItem = dataSource.indexOf(dragItem);
        const indexDropItem = dataSource.indexOf(dropItem);
        setDataSource(swapArrayItem(dataSource, indexDragItem, indexDropItem));
      }}
    />
  );
}
