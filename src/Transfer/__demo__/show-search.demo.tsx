/**
 * title: 带搜索框
 * desc: 指定 `showSearch` 来使用带搜索框的穿梭框，可以自定义搜索函数。
 */
import { Transfer } from '@sensoro-design/react';

export default () => {
  const dataSource = new Array(8).fill(null).map((_, index) => ({
    key: `${index + 1}`,
    value: `Option ${index + 1}`,
  }));

  return (
    <Transfer
      showSearch
      dataSource={dataSource}
      searchPlaceholder="Please select"
      defaultTargetKeys={['1', '2', '3']}
      defaultSelectedKeys={['4', '6', '7']}
      titleTexts={['To-do list', 'Selected list']}
    />
  );
}
