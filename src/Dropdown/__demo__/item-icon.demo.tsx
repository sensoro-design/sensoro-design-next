/**
 * title: 带图标的菜单
 * desc: 菜单项前可以添加图标。
 */
import { Dropdown, Menu, Button } from '@sensoro-design/react';
import DownOutlined from '@sensoro-design/icons/DownOutlined';
import LocationFilled from '@sensoro-design/icons/LocationFilled';

const iconStyle = {
  marginRight: 8,
  fontSize: 16,
  transform: 'translateY(1px)'
};

const dropList = (
  <Menu>
    <Menu.Item key="1">
      <LocationFilled style={iconStyle} />
      Beijing
    </Menu.Item>
    <Menu.Item key="2">
      <LocationFilled style={iconStyle} />
      Shanghai
    </Menu.Item>
    <Menu.Item key="3">
      <LocationFilled style={iconStyle} />
      Guangzhou
    </Menu.Item>
  </Menu>
);

export default () => {
  return (
    <div className="dropdown-demo">
      <Dropdown droplist={dropList} trigger="click" position="bl">
        <Button type="text">
          Click me <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}
