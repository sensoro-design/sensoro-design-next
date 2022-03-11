/**
 * title: 显示关闭按钮
 * desc: 设置 `closable` 来显示关闭按钮。
 */
import { Message, Button } from '@sensoro-design/react';

export default () => {
  return (
    <Button
      onClick={() => {
        Message.info({ content: 'This is a message!', closable: true, duration: 10000 });
      }}
      type="primary"
    >
      Open Message
    </Button>
  )
}
