/**
 * title: 自动调整位置
 * desc: 自动调整弹出层位置。
 */
import React from 'react';
import { Button, Popconfirm, Message } from '@sensoro-design/react';

const props = {
  getPopupContainer: () => document.querySelector('.popup-container'),
  title: '确认编辑该选项吗？',
  onOk: () => {
    Message.info({ content: '你点击了确认' });
  },
  onCancel: () => {
    Message.error({ content: '你点击了取消' });
  },
};

export default class Demo extends React.Component {
  render() {
    return (
      <div
        className="popup-container"
        directions={['right', 'bottom']}
        style={{ width: 300, height: 300, overflow: 'auto',}}
      >
      <div style={{ width: 450, height: 300,  position: 'relative' }}>
        <Popconfirm position="bottom" {...props} getPopupContainer={node => node.parentElement}>
          <Button style={{marginLeft: 300}}>popover</Button>
        </Popconfirm>
      </div>
      </div>
    );
  }
}
