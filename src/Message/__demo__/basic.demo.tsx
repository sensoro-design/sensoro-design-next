/**
 * title: 基础用法
 * desc: 最简单的例子。
 */
import { Message, Button } from '@sensoro-design/react';

export default () => {
  return (
    <Button
      onClick={() => {
        Message.info('This is an info message!');
      }}
      type="primary"
    >
      Open Message
    </Button>
  )
}
