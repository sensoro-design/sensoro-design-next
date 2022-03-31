/**
 * title: 可选中
 * desc: 通过参数 `checkable`，可以实现点击选中的效果。
 */
import { Tag, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size="large">
      <Tag checkable>
        Awesome
      </Tag>
      <Tag checkable color="red" defaultChecked>
        Toutiao
      </Tag>
      <Tag checkable color="arcoblue" defaultChecked>
        Lark
      </Tag>
    </Space>
  )
}
