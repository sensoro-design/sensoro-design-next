/**
 * title: 自定义位置
 * desc: 使用 `alignCenter` 结合 `style` 来设置对话框位置。
 */
import React from 'react';
import { Modal, Button } from '@sensoro-design/react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)} type="primary">
        Display a modal dialog at 40px to top
      </Button>
      <br />
      <br />
      <Button onClick={() => setVisible1(true)} type="primary">
        Vertically centered modal dialog
      </Button>
      <Modal
        alignCenter={false}
        style={{ top: 40 }}
        title="Modal Title"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        autoFocus={false}
        focusLock={true}
      >
        <p>Display a modal dialog at 40px to top</p>
      </Modal>
      <Modal
        title="Modal Title"
        alignCenter
        visible={visible1}
        onOk={() => setVisible1(false)}
        onCancel={() => setVisible1(false)}
        autoFocus={false}
        focusLock={true}
      >
        <p>Vertically centered modal dialog</p>
      </Modal>
    </div>
  );
};
