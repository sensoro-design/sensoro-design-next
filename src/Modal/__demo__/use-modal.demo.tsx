/**
 * title: Hooks 用法
 * desc: 可以通过 `useModal` 去创建可以读取 `context` 的对话框。
 */
import { createContext } from 'react';
import { Modal, Button, Space } from '@sensoro-design/react';

export default () => {
  const [modal, contextHolder] = Modal.useModal();

  const ConfigContext = createContext({});

  const config = {
    title: 'Profile',
    content: <ConfigContext.Consumer>{(name) => `Current user: ${name}`}</ConfigContext.Consumer>,
  };

  return (
    <ConfigContext.Provider value="PJY">
      {contextHolder}
      <Space>
        <Button onClick={() => modal.confirm(config)} type="secondary">
          Confirm
        </Button>
        <Button onClick={() => modal.info(config)} type="secondary">
          Info
        </Button>
        <Button onClick={() => modal.success(config)} type="secondary">
          Success
        </Button>
        <Button onClick={() => modal.warning(config)} type="secondary">
          Warning
        </Button>
        <Button onClick={() => modal.error(config)} type="secondary">
          Error
        </Button>
        <Button onClick={() => Modal.confirm(config)} type="outline" status="danger">
          Can't get context
        </Button>
      </Space>
    </ConfigContext.Provider>
  );
}
