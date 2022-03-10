
/**
 * title: 自定义图片
 * desc: 可以通过 `imgSrc` 参数传入图片 Url。
 */
import { Empty, Button } from '@sensoro-design/react';

export default () => {
  return (
    <Empty
      imgSrc="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a0082b7754fbdb2d98a5c18d0b0edd25.png~tplv-uwbnlip3yd-webp.webp"
      description={<Button type="primary">Refresh</Button>}
    />
  )
}
