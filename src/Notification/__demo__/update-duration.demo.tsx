
/**
 * title: 更新延迟
 * desc: 通过指定参数 `id`，可以更新已经存在的通知提醒框。
 */
import { Notification, Button } from '@sensoro-design/react';

function updateNotification() {
  Notification.warning({
    id: 'need_update_duration',
    title: 'Ready to update',
    content: 'Will update after 2 seconds...',
    duration: 3000
  });
  setTimeout(() => {
    Notification.success({
      id: 'need_update_duration',
      title: 'Success',
      content: 'Will close after 3 seconds!',
      duration: 3000
    });
  }, 2000);
}

export default () => {
  return (
    <Button onClick={updateNotification} type="primary">
      Update Notification
    </Button>
  )
}
