
/**
 * title: 内嵌菜单
 * desc: 菜单内可以嵌入多个子项，通过 `defaultOpenKeys` 可以设置默认打开的子项。
 */
import { Menu } from '@sensoro-design/react';
import AppstoreOutlined from '@sensoro-design/icons/AppstoreOutlined';
import BugOutlined from '@sensoro-design/icons/BugOutlined';
import BulbOutlined from '@sensoro-design/icons/BulbOutlined';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default () => {
  return (
    <div
    className="menu-demo"
    style={{
      height: 600,
    }}
  >
    <Menu
      style={{ width: 200, height: '100%' }}
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
        <MenuItemGroup key="2_0" title="Menu Group 1">
          <MenuItem key="2_0_0">Menu 1</MenuItem>
          <MenuItem key="2_0_1">Menu 2</MenuItem>
        </MenuItemGroup>
        <MenuItemGroup key="2_1" title="Menu Group 1">
          <MenuItem key="2_1_0">Menu 3</MenuItem>
          <MenuItem key="2_1_1">Menu 4</MenuItem>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  </div>
  )
}
