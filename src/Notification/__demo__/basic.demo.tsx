
/**
 * title: 基础用法
 * desc: 最简单的例子。
 */
import { Notification, Button } from '@sensoro-design/react';

export default () => {
  return (
    <Button
        onClick={() => Notification.info({ closable: false, title: 'Notification', content: 'This is a notification!' })}
        type="primary"
      >
        Open Notification
      </Button>
  )
}

