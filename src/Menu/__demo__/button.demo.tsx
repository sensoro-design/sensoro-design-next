
/**
 * title: 悬浮按钮菜单
 * desc: 指定 `mode` 为 `popButton` 使用按钮组样式的悬浮菜单。
 */
import { useState } from 'react';
import { Menu, Trigger } from '@sensoro-design/react';
import { IconMessage, IconClose, IconBug, IconBulb } from '@sensoro-design/react/icon';

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
          <IconBug />
          Bugs
        </MenuItem>
        <MenuItem key="2">
          <IconBulb />
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
          {popupVisibleOne ? <IconClose /> : <IconMessage />}
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
          {popupVisibleTwo ? <IconClose /> : <IconMessage />}
        </div>
      </Trigger>
    </div>
  );
}
