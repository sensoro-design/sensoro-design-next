/**
 * title: 按钮尺寸
 * desc: 按钮分为：迷你、小、中、大，四种尺寸。高度分别为：`24px/28px/32px/36px`。推荐及默认为尺寸「中」。可在不同场景及不同业务需求选择适合尺寸。
 */
import { Button, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size="large">
      <Button size="mini" type="primary">
        Mini
      </Button>
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
