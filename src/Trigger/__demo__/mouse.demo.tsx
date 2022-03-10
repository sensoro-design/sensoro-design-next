
/**
 * title: 更新位置
 * desc:
 */
import React from 'react';
import { Trigger, Skeleton, Typography } from '@sensoro-design/react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  const triggerRef = React.useRef()

  return <Trigger
    ref={triggerRef}
    alignPoint
    trigger="click"
    position="bl"
    popupVisible={visible}
    onClickOutside={() => {
      setVisible(false)
    }}
    popup={() => <div className="demo-trigger-popup" style={{width: 300}}> <Skeleton/> </div> }
  >
    <div
      className="demo-trigger-manual"
      onClick={() => {
        if (visible) {
          triggerRef.current.update();
        } else {
          setVisible(true)
        }
      }}
    >
      <Typography.Text>Click</Typography.Text>
    </div>
  </Trigger>
}
