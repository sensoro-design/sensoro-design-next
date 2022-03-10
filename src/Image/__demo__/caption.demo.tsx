
/**
 * title: 显示 Caption
 * desc: 通过设置 `title` 和 `description` 可以将图片的标题和描述显示在图片内部或者底部，显示的位置通过 `footerPosition` 控制。
 */
import { Image } from '@sensoro-design/react';

export default () => {
  const src = '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp';
  const title = 'A user’s avatar';
  const description = 'Present by Arco Design';

  return <div>
    <Image
      width={200}
      src={src}
      title={title}
      description={description}
    />
    <Image
      width={200}
      src={src}
      title={title}
      description={description}
      footerPosition="outer"
      style={{ marginLeft: 67, verticalAlign: 'top' }}
    />
  </div>
}
