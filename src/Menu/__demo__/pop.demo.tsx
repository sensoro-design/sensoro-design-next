
/**
 * title: 悬浮菜单
 * desc: 指定 `mode` 为 `pop` 可以使用悬浮菜
 */
import { Menu } from '@sensoro-design/react';
import { IconApps, IconSafe, IconBulb, IconRobot, IconFire } from '@sensoro-design/react/icon';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export default () => {
  return (
    <div
    className="menu-demo-round"
    style={{
      height: 600,
    }}
  >
    <Menu style={{ width: 200 }} mode="pop" hasCollapseButton>
      <MenuItem key="0">
        <IconApps />
        Navigation 1
      </MenuItem>
      <SubMenu
        key="1"
        title={
          <>
            <IconRobot />
            Navigation 2
          </>
        }
      >
        <MenuItem key="1_0">Beijing</MenuItem>
        <MenuItem key="1_1">Shanghai</MenuItem>
        <MenuItem key="1_2">Guangzhou</MenuItem>
      </SubMenu>
      <SubMenu
        key="2"
        title={
          <>
            <IconBulb />
            Navigation 3
          </>
        }
      >
        <MenuItem key="2_0">Wuhan</MenuItem>
        <MenuItem key="2_1">Chengdu</MenuItem>
      </SubMenu>
      <MenuItem key="3">
        <IconSafe />
        Navigation 4
      </MenuItem>
      <MenuItem key="4">
        <IconFire />
        Navigation 5
      </MenuItem>
    </Menu>
  </div>
  )
}

