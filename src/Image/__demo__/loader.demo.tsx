
/**
 * title: 加载状态
 * desc: 默认情况下，加载效果是不显示的，可通过设置 `loader=true` 显示默认加载效果。如果默认加载效果不符合需求。还可以通过 `loaderClassName` 自行设置加载样式。
 */
import React from 'react';
import { Image, Button } from '@sensoro-design/react';

export default () => {
  const [timestamp, setTimestamp] = React.useState('');

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
        height={200}
        src={`//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp?timestamp=${timestamp}`}
        loader={true}
      />
      <Image
        width={200}
        height={200}
        src={`//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp?timestamp=${timestamp}`}
        loaderClassName="image-demo-loader-animate"
        style={{ marginLeft: 67 }}
      />
    </div>
  );
}
