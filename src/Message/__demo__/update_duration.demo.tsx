
/**
 * title: 更新延时
 * desc: 通过指定 `id`，可以更新已经存在的全局提示的`duration` 属性。
 */
import { Message, Button } from '@sensoro-design/react';

function updateMessage() {
  Message.loading({
    id: 'need_update',
    content: 'Will update after 2 seconds...',
    duration: 4000
  });
  setTimeout(() => {
    Message.success({
      id: 'need_update',
      content: 'Will update after 3 seconds!',
      duration: 3000
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
