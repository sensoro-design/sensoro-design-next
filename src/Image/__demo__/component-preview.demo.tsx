
/**
 * title: 单独使用预览组件
 * desc: `Image.Preview` 可单独使用，需要配置 `src`，并控制 `visible`。
 */
import React from 'react';
import { Image, Button } from '@sensoro-design/react';

export default () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>Click me to preview image</Button>
      <Image.Preview
        src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
        visible={visible}
        onVisibleChange={setVisible}
      />
    </div>
  );
}
