/**
 * title: 全局提示的位置
 * desc: 全局提示有 2 种不同的弹出位置，分别为顶部和底部。
 */
import { Message, Button, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size="large">
      <Button
        onClick={() =>
          Message.info({ content: 'This is a message!', showIcon: true, position: 'top' })
        }
        type="primary"
      >
        Top
      </Button>
      <Button
        onClick={() =>
          Message.info({ content: 'This is a message!', showIcon: true, position: 'bottom' })
        }
        type="primary"
      >
        Bottom
      </Button>
    </Space>
  )
}
