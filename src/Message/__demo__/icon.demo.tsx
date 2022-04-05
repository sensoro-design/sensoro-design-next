/**
 * title: 自定义图标
 * desc: 设置 `icon` 来自定义图标。
 */
import { Message, Button, Icon, Space } from '@sensoro-design/react';
import SmileFilled from '@sensoro-design/icons/SmileFilled';

const IconFont = Icon.addFromIconFontCn({ src: '//at.alicdn.com/t/font_180975_26f1p759rvn.js' });

export default () => {
  return (
    <Space size="large">
      <Button
        onClick={() => Message.info({ icon: <IconFont type="icon-info" />, content: 'This is an info message!' })}
        type="primary"
      >
        Info (Light)
      </Button>
      <Button
        onClick={() =>
          Message.success({ icon: <IconFont type="icon-success" />, content: 'This is a primary message!' })
        }
        type="primary"
        status="success"
      >
        Success (Light)
      </Button>
      <Button
        onClick={() =>
          Message.warning({ icon: <IconFont type="icon-warning" />, content: 'This is a warning message!' })
        }
        type="primary"
        status="warning"
      >
        Warning (Light)
      </Button>
      <Button
        onClick={() => Message.error({ icon: <IconFont type="icon-error" />, content: 'This is an error message!' })}
        type="primary"
        status="danger"
      >
        Error (Light)
      </Button>
      <Button onClick={() => Message.info({ icon: <SmileFilled />, content: 'This is a message!' })} type="secondary">
        Smile
      </Button>
    </Space>
  );
};
