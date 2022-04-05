/**
 * title: 手动控制关闭
 * desc: `Message.xxx()` 会返回一个函数，调用此函数能手动关闭通知。
 */
import { Message, Button } from '@sensoro-design/react';

function updateMessage() {
  const close = Message.info({ content: 'Close after 2 seconds...', duration: 0 });

  setTimeout(() => {
    close();
  }, 2000);
}

export default () => {
  return (
    <Button onClick={updateMessage} type="primary">
      Close after 2 seconds
    </Button>
  );
};
