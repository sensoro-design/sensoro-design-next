/**
 * title: 基础用法
 * desc: 两栏布局的多选穿梭框组件，将元素从一栏即时移到另一栏。
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
      disabled
      defaultValue={[2, 4]}
    />
  );
};
