
/**
 * title: 多图预览
 * desc: 用 `<Image.PreviewGroup>` 包裹 `<Image>` 组件即可进行多图预览。
 */
import { Image, Space } from '@sensoro-design/react';

export default () => {
  const srcList = [
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp',
  ];

  return (
    <div>
      <Space direction="vertical">
        <Image.PreviewGroup infinite>
          <Space>
            {srcList.map((src, index) => <Image key={index} src={src} width={200} />)}
          </Space>
        </Image.PreviewGroup>
      </Space>
    </div>
  );
}
