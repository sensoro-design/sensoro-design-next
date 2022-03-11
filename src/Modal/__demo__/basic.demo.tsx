/**
 * title: 基础用法
 * desc: 文本信息对话框。
 */
import React from 'react';
import { Modal, Button } from '@sensoro-design/react';

export default () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)} type="primary">
        Open Modal
      </Button>
      <Modal
        title="Modal Title"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        autoFocus={false}
        focusLock={true}
      >
        <p>
          You can customize modal body text by the current situation. This modal will be closed
          immediately once you press the OK button.
        </p>
      </Modal>
    </div>
  );
}
