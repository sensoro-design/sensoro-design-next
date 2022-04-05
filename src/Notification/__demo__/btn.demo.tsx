/**
 * title: 自定义操作按钮
 * desc: 通过指定 `btn` 字段，可以添加操作按钮。
 */
import { Notification, Button } from '@sensoro-design/react';

function updateNotification() {
  const id = `${Date.now()}`;
  Notification.info({
    id,
    title: 'Notification',
    content: 'This is a notification!',
    duration: 0,
    btn: (
      <span>
        <Button type="secondary" size="small" onClick={() => Notification.remove(id)} style={{ marginRight: 12 }}>
          Cancel
        </Button>
        <Button type="primary" size="small" onClick={() => Notification.remove(id)}>
          Ok
        </Button>
      </span>
    ),
  });
}

export default () => {
  return (
    <Button onClick={updateNotification} type="primary">
      Open Notification
    </Button>
  );
};
