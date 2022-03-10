
/**
 * title: 挂载节点
 * desc: 可以通过 `getPopupContainer` 指定预览挂载的父级节点。
 */
import React from 'react';
import { Image } from '@sensoro-design/react';

const wrapperStyle = {
  width: '100%',
  height: 400,
  backgroundColor: 'var(--color-fill-2)',
  position: 'relative',
  overflow: 'hidden',
  lineHeight: '400px',
  textAlign: 'center',
};

export default () => {
  const ref = React.useRef();
  return (
    <div style={wrapperStyle} ref={ref}>
      <Image
        width={200}
        previewProps={{
          getPopupContainer: () => ref.current,
          closable: false,
        }}
        src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
      />
    </div>
  );
}
