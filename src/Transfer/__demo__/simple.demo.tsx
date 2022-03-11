/**
 * title: 简单模式
 * desc: 指定 `simple` 来开启简单模式，点击选项即可移动。
 */
import { Transfer } from '@sensoro-design/react';

export default () => {
  const dataSource = new Array(8).fill(null).map((_, index) => ({
    key: `${index + 1}`,
    value: `Option ${index + 1}`,
  }));

  return (
    <Transfer
      simple
      dataSource={dataSource}
      defaultTargetKeys={['1', '2', '3']}
      titleTexts={['To-do list', 'Selected list']}
    />
  );
}
