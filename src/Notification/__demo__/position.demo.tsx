
/**
 * title: 通知提醒位置
 * desc: 通知提醒框有 4 种不同的弹出位置，分别为：`左上角`, `右上角 (默认)`, `左下角`, `右下角`。
 */
import { Notification, Button, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size="large">
    <Button
      onClick={() =>
        Notification.success({
          title: 'Title',
          content: 'This is a Notification!',
          showIcon: true,
          position: 'topLeft',
        })
      }
      type="primary"
    >
      Top Left
    </Button>
    <Button
      onClick={() =>
        Notification.success({
          title: 'Title',
          content: 'This is a Notification!',
          showIcon: true,
          position: 'topRight',
        })
      }
      type="primary"
    >
      Top Right
    </Button>
    <Button
      onClick={() =>
        Notification.success({
          title: 'Title',
          content: 'This is a Notification!',
          showIcon: true,
          position: 'bottomLeft',
        })
      }
      type="primary"
    >
      Bottom Left
    </Button>
    <Button
      onClick={() =>
        Notification.success({
          title: 'Title',
          content: 'This is a Notification!',
          showIcon: true,
          position: 'bottomRight',
        })
      }
      type="primary"
    >
      Bottom Right
    </Button>
  </Space>
  )
}
