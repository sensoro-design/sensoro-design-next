
/**
 * title: 更新通知内容
 * desc: 通过指定参数 `key`，可以更新已经存在的通知提醒框。
 */
import { Notification, Button } from '@sensoro-design/react';

function updateNotification() {
  Notification.warning({
    id: 'need_update',
    title: 'Ready to update',
    content: 'Will update after 2 seconds...',
  });
  setTimeout(() => {
    Notification.success({
      id: 'need_update',
      title: 'Success',
      content: 'Update success!',
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
