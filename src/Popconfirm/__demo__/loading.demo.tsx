/**
 * title: 异步关闭
 * desc: 用于异步执行某些操作，等操作完成再关闭弹出框。
 */
import { Popconfirm, Message, Button } from '@sensoro-design/react';

function delayClose() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
      Message.info({ content: 'ok' });
    }, 2000);
  });
}

export default () => {
  return (
    <Popconfirm
      title="Are you sure you want to delete?"
      onOk={delayClose}
      onCancel={() => {
        Message.error({ content: 'cancel' });
      }}
    >
      <Button style={{ marginRight: 20 }}>Async close</Button>
    </Popconfirm>
  )
}

