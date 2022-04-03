/**
 * title: 基础用法
 * desc: 最基础的用法。
 */
import { Popconfirm, Message, Button } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <Popconfirm
        title="Are you sure you want to delete?"
        onOk={() => {
          Message.info({ content: 'ok' });
        }}
        onCancel={() => {
          Message.error({ content: 'cancel' });
        }}
      >
        <Button>Delete</Button>
      </Popconfirm>
    </div>
  )
}
