/**
 * title: 拖拽排序
 * desc: 将 draggable设为 true，开启拖拽排序功能。
 */
import { Transfer } from '@sensoro-design/react';

const data = Array.from({ length: 100 }, (v, i) => {
  return {
    label: `选项名称 ${i}`,
    value: i,
    key: i,
  };
});

export default () => {
  return (
    <Transfer
      dataSource={data}
      style={{
        width: 568,
        height: 416,
      }}
      draggable
      defaultValue={[2, 4]}
    />
  );
};
