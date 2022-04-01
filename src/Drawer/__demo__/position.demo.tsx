/**
 * title: 自定义位置
 * desc: 自定义位置，点击触发按钮抽屉从相应的位置滑出。
 */
import { useState } from 'react';
import { Drawer, Button, Radio } from '@sensoro-design/react';

const RadioGroup = Radio.Group;

export default () => {
  const [visible, setVisible] = useState<boolean>();
  const [placement, setPlacement] = useState('right');

  return (
    <div>
      <RadioGroup name="placement" defaultValue={placement} onChange={setPlacement}>
        <Radio value="top">Top</Radio>
        <Radio value="bottom">Bottom</Radio>
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
      </RadioGroup>
      <br />
      <Button
        onClick={() => {
          setVisible(true);
        }}
        type="primary"
        style={{ marginTop: 20 }}
      >
        Open Drawer
      </Button>
      <Drawer
        width={332}
        height={332}
        title={<span>Basic Information </span>}
        visible={visible}
        placement={placement}
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <div>Here is an example text. </div>
        <div>Here is an example text.</div>
      </Drawer>
    </div>
  );
}
