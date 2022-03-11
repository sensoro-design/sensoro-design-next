/**
 * title: 更新全局提醒内容
 * desc: 通过指定 `id`，可以更新已经存在的全局提示。
 */
import { Message, Button } from '@sensoro-design/react';

function updateMessage() {
  Message.loading({
    id: 'need_update',
    content: 'Will update after 2 seconds...',
  });
  setTimeout(() => {
    Message.success({
      id: 'need_update',
      content: 'Update success!',
    });
  }, 2000);
}

export default () => {
  return (
    <Button onClick={updateMessage} type="primary">
      Update message
    </Button>
  )
}
