
/**
 * title: 自定义icon
 * desc: 自定义图标。
 */
import { Popconfirm, Message, Button } from '@sensoro-design/react';
import { IconFaceSmileFill } from '@sensoro-design/react/icon';

export default () => {
  return (
    <div>
    <Popconfirm
      title="Are you sure you want to delete?"
      icon={<IconFaceSmileFill style={{color: '#0057fe'}} />}
      onOk={() => {
        Message.info({ content: 'ok' });
      }}
      onCancel={() => {
        Message.error({ content: 'cancel' });
      }}
    >
      <Button style={{ marginRight: 24 }}>Delete</Button>
    </Popconfirm>
    <Popconfirm
      icon={null}
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
