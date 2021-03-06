
/**
 * title: 不同大小菜单
 * desc: 通过 `style` 自由指定菜单的宽度和菜单项的高度。
 */
import { useState } from 'react';
import { Menu, Slider } from '@sensoro-design/react';
import AppstoreOutlined from '@sensoro-design/icons/AppstoreOutlined';
import BugOutlined from '@sensoro-design/icons/BugOutlined';
import BulbOutlined from '@sensoro-design/icons/BulbOutlined';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export default () => {
  const [width, setWidth] = useState(240);
  return (
    <div
      className="menu-demo"
      style={{
        height: 600,
      }}
    >
      <Slider
        style={{ width: 320, marginBottom: 24 }}
        value={width}
        onChange={(value) => setWidth(value)}
        step={10}
        min={160}
        max={400}
      />
      <Menu
        style={{ width: width, height: 'calc(100% - 28px)' }}
        hasCollapseButton
        defaultOpenKeys={['0']}
        defaultSelectedKeys={['0_1']}
      >
        <SubMenu
          key="0"
          title={
            <>
              <AppstoreOutlined /> Navigation 1
            </>
          }
        >
          <MenuItem key="0_0">Menu 1</MenuItem>
          <MenuItem key="0_1">Menu 2</MenuItem>
          <MenuItem key="0_2" disabled>
            Menu 3
          </MenuItem>
        </SubMenu>
        <SubMenu
          key="1"
          title={
            <>
              <BugOutlined /> Navigation 2
            </>
          }
        >
          <MenuItem key="1_0">Menu 1</MenuItem>
          <MenuItem key="1_1">Menu 2</MenuItem>
          <MenuItem key="1_2">Menu 3</MenuItem>
        </SubMenu>
        <SubMenu
          key="2"
          title={
            <>
              <BulbOutlined /> Navigation 3
            </>
          }
        >
          <MenuItem key="2_0">Menu 1</MenuItem>
          <MenuItem key="2_1">Menu 2</MenuItem>
          <MenuItem key="2_2">Menu 3</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}
