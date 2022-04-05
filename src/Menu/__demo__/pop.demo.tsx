
/**
 * title: 悬浮菜单
 * desc: 指定 `mode` 为 `pop` 可以使用悬浮菜
 */
import { Menu } from '@sensoro-design/react';
import AppstoreOutlined from '@sensoro-design/icons/AppstoreOutlined';
import BulbOutlined from '@sensoro-design/icons/BulbOutlined';
import FireOutlined from '@sensoro-design/icons/FireOutlined';
import SafetyOutlined from '@sensoro-design/icons/SafetyOutlined';
import RobotOutlined from '@sensoro-design/icons/RobotOutlined';

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
        <AppstoreOutlined />
        Navigation 1
      </MenuItem>
      <SubMenu
        key="1"
        title={
          <>
            <RobotOutlined />
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
            <BulbOutlined />
            Navigation 3
          </>
        }
      >
        <MenuItem key="2_0">Wuhan</MenuItem>
        <MenuItem key="2_1">Chengdu</MenuItem>
      </SubMenu>
      <MenuItem key="3">
        <SafetyOutlined />
        Navigation 4
      </MenuItem>
      <MenuItem key="4">
        <FireOutlined />
        Navigation 5
      </MenuItem>
    </Menu>
  </div>
  )
}

