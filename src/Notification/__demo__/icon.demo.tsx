/**
 * title: 自定义图标
 * desc: 设置 `icon` 来自定义图标。
 */
import { Notification, Button, Space } from '@sensoro-design/react';
import SmileFilled from '@sensoro-design/icons/SmileFilled';

export default () => {
  return (
    <Space size="large">
      <Button
        onClick={() =>
          Notification.info({
            icon: <SmileFilled />,
            title: 'Upgrade',
            content: 'Ready to upgrade ArcoDesign 2.0',
          })
        }
        type="primary"
        style={{ marginBottom: 20 }}
      >
        Info (Light)
      </Button>
      <Button
        onClick={() =>
          Notification.success({
            icon: <SmileFilled />,
            title: 'Success',
            content: 'ArcoDesign 2.0 upgrade completed!',
          })
        }
        type="primary"
        status="success"
        style={{ marginBottom: 24 }}
      >
        Success (Light)
      </Button>
      <Button
        onClick={() =>
          Notification.warning({
            icon: <SmileFilled />,
            title: 'Warning',
            content: 'Current version is at risk!',
          })
        }
        type="primary"
        status="warning"
        style={{ marginBottom: 24 }}
      >
        Warning (Light)
      </Button>
      <Button
        onClick={() =>
          Notification.error({
            icon: <SmileFilled />,
            title: 'Error',
            content: 'Failed to upgrade ArcoDesign 2.0!',
          })
        }
        type="primary"
        status="danger"
        style={{ marginBottom: 24 }}
      >
        Error (Light)
      </Button>
      <Button
        onClick={() =>
          Notification.info({ icon: <SmileFilled />, title: 'Upgrade', content: 'Ready to upgrade ArcoDesign 2.0!' })
        }
        type="secondary"
        style={{ marginBottom: 24 }}
      >
        Smile
      </Button>
    </Space>
  );
};
