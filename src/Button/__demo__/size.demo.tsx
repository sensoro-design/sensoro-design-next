/**
 * title: 按钮尺寸
 * desc: 按钮分为：小、中、大三种尺寸。高度分别为：`24px/32px/40px`。推荐及默认为尺寸「中」。可在不同场景及不同业务需求选择适合尺寸。
 */
import { Button, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size="large">
      <Button size="small" type="primary">
        Small
      </Button>
      <Button size="default" type="primary">
        Default
      </Button>
      <Button size="large" type="primary">
        Large
      </Button>
    </Space>
  )
}
