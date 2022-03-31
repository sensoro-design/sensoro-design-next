/**
 * title: 竖直分割线
 * desc: 指定 `type` 为 `vertical` 即可使用竖直分割线。竖直分割线不能带文字。
 */
import { Divider, Typography } from '@sensoro-design/react';

const { Text } = Typography;

export default () => {
  return (
    <div className="divider-demo">
      <Text>Item 1</Text>
      <Divider type="vertical" />
      <Text>Item 2</Text>
      <Divider type="vertical" />
      <Text>Item 3</Text>
    </div>
  )
}
