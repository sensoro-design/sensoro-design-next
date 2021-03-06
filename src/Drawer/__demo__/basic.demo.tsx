
/**
 * title: 基础用法
 * desc: 基础抽屉，点击触发按钮抽屉从右侧滑出，点击遮罩区关闭。
 */
import { useState } from 'react';
import { Drawer, Button } from '@sensoro-design/react';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          setVisible(true);
        }}
        type="primary"
      >
        Open Drawer
      </Button>
      <Drawer
        width={332}
        title={<span>Basic Information </span>}
        visible={visible}
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <div>Here is an example text.</div>

        <div>Here is an example text.</div>
      </Drawer>
    </div>
  );
}
