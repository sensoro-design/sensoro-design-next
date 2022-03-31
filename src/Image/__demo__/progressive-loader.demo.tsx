/**
 * title: 渐进加载
 * desc: 大图可通过给 `loader` 传递一个小一些的图片，让其在原图未被加载成功时显示，以此来模拟渐进加载。
 */
import React from 'react';
import { Image, Button } from '@sensoro-design/react';

export default () => {
  const [timestamp, setTimestamp] = React.useState<any>('');

  return (
    <div>
      <div>
        <Button
          type="primary"
          onClick={() => { setTimestamp(Date.now()) }}
          style={{ marginBottom: 20 }}
        >
          reload
        </Button>
      </div>
      <Image
        width={200}
        src={`//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp?timestamp=${timestamp}`}
        loader={<img
          width={200}
          src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
          style={{ filter: 'blur(5px)' }}/>}
      />
    </div>
  );
}
