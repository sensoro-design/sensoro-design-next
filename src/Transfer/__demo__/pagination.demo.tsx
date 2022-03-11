/**
 * title: 分页
 * desc: 数据量大时，指定 `pagination` 来使用分页。
 */
import { Transfer } from '@sensoro-design/react';

export default () => {
  const dataSource = new Array(30).fill(null).map((_, index) => ({
    key: `${index + 1}`,
    value: `Option ${index + 1}`,
  }));

  return (
    <Transfer
      pagination
      dataSource={dataSource}
      defaultTargetKeys={['1', '3', '4']}
      defaultSelectedKeys={['2', '6', '7']}
      titleTexts={['To-do list', 'Selected list']}
    />
  );
}
