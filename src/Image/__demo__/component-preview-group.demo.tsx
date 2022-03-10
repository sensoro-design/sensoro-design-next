
/**
 * title: 单独使用多图预览组件
 * desc: `Image.PreviewGroup` 可单独使用，需通过 `visible` 和 `onVisibleChange` 控制显隐。在图片的展示上分为两种场景，一是通过 `defaultCurrent` 指定第一张展示的图片；二是通过 `current` 和 `onChange` 以受控的方式控制当前显示的是第几张图片。
 */
import React from 'react';
import { Image, Button } from '@sensoro-design/react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  const srcList = [
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp',
  ];

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>Click me to preview multiple image</Button>
      <Image.PreviewGroup
        srcList={srcList}
        visible={visible}
        onVisibleChange={setVisible}
      />
    </div>
  );
}
