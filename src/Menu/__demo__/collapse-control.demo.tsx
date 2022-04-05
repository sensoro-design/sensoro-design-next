
/**
 * title: 缩起内嵌菜单
 * desc: 通过 `collapse` 来指定菜单收起。
 */
import { useState } from 'react';
import { Menu, Button } from '@sensoro-design/react';
import MenuFoldOutlined from '@sensoro-design/icons/MenuFoldOutlined';
import MenuUnfoldOutlined from '@sensoro-design/icons/MenuUnfoldOutlined';
import AppstoreOutlined from '@sensoro-design/icons/AppstoreOutlined';
import BulbOutlined from '@sensoro-design/icons/BulbOutlined';
import BugOutlined from '@sensoro-design/icons/BugOutlined';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export default () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="menu-demo">
      <Button
        style={{ padding: '0 12px', height: 30, lineHeight: '30px', marginBottom: 4 }}
        type="primary"
        onClick={() => setCollapse(!collapse)}
      >
        {collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        style={{ width: 200, borderRadius: 4 }}
        theme="dark"
        collapse={collapse}
        defaultOpenKeys={['0']}
        defaultSelectedKeys={['0_2']}
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
          <MenuItem key="0_2">Menu 3</MenuItem>
          <MenuItem key="0_3">Menu 4</MenuItem>
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
        </SubMenu>
      </Menu>
    </div>
  );
}
