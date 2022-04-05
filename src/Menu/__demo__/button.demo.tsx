
/**
 * title: 悬浮按钮菜单
 * desc: 指定 `mode` 为 `popButton` 使用按钮组样式的悬浮菜单。
 */
import { useState } from 'react';
import { Menu, Trigger } from '@sensoro-design/react';
import BugOutlined from '@sensoro-design/icons/BugOutlined';
import BulbOutlined from '@sensoro-design/icons/BulbOutlined';

import MessageOutlined from '@sensoro-design/icons/MessageOutlined';
import CloseOutlined from '@sensoro-design/icons/CloseOutlined';

const MenuItem = Menu.Item;

export default () => {
  const renderMenu = () => {
    return (
      <Menu
        style={{ marginBottom: -4 }}
        mode="popButton"
        tooltipProps={{ position: 'left' }}
        hasCollapseButton
      >
        <MenuItem key="1">
          <BugOutlined />
          Bugs
        </MenuItem>
        <MenuItem key="2">
          <BulbOutlined />
          Ideas
        </MenuItem>
      </Menu>
    );
  };

  const [popupVisibleOne, setPopupVisibleOne] = useState(false);
  const [popupVisibleTwo, setPopupVisibleTwo] = useState(false);

  return (
    <div className="menu-demo menu-demo-button">
      <Trigger
        popup={renderMenu}
        trigger={['click', 'hover']}
        clickToClose
        position="top"
        onVisibleChange={(v) => setPopupVisibleOne(v)}
      >
        <div className={`button-trigger ${popupVisibleOne ? 'button-trigger-active' : ''}`}>
          {popupVisibleOne ? <CloseOutlined /> : <MessageOutlined />}
        </div>
      </Trigger>

      <Trigger
        popup={renderMenu}
        trigger={['click', 'hover']}
        clickToClose
        position="top"
        onVisibleChange={(v) => setPopupVisibleTwo(v)}
      >
        <div className={`button-trigger ${popupVisibleTwo ? 'button-trigger-active' : ''}`}>
          {popupVisibleTwo ? <CloseOutlined /> : <MessageOutlined />}
        </div>
      </Trigger>
    </div>
  );
}
