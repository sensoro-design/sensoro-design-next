
/**
 * title: 基础用法
 * desc: 需要查看图片的时候，简单的设置 `src` 属性，就能获得一个有预览图片功能的组件。
 */
import { Image } from '@sensoro-design/react';


export default () => {
  return (
    <Image
      width={200}
      src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
    />
  )
}
