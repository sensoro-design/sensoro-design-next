
/**
 * title: 国际化
 * desc: 自定义按钮文字。
 */
import { Popconfirm, Message, Button } from '@sensoro-design/react';

export default () => {
  return (
    <div>
    <Popconfirm
      title="Do you want to discard the draft?"
      okText="Discard"
      cancelText="Cancel"
      onOk={() => {
        Message.info({ content: 'ok' });
      }}
      onCancel={() => {
        Message.error({ content: 'cancel' });
      }}
    >
      <Button>Discard</Button>
    </Popconfirm>
  </div>
  )
}

