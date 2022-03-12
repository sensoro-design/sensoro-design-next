
/**
 * title: 自定义样式
 * desc: 可以设置 `style` 和 `className` 来定制样式。
 */
import { Notification, Button } from '@sensoro-design/react';

export default () => {
  return (
    <Button
    onClick={() => Notification.info({ style: { width: 500 }, title: 'Notification', content: 'This is a notification! This is a notification! This is a notification! This is a notification! ' })}
    type="primary"
  >
    Open Notification
  </Button>
  )
}

