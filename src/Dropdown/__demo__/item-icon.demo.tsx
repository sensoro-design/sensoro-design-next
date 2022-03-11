/**
 * title: 带图标的菜单
 * desc: 菜单项前可以添加图标。
 */
import { Dropdown, Menu, Button } from '@sensoro-design/react';
import { IconDown, IconLocation } from '@sensoro-design/react/icon';

const iconStyle = {
  marginRight: 8,
  fontSize: 16,
  transform: 'translateY(1px)'
};

const dropList = (
  <Menu>
    <Menu.Item key="1">
      <IconLocation style={iconStyle} />
      Beijing
    </Menu.Item>
    <Menu.Item key="2">
      <IconLocation style={iconStyle} />
      Shanghai
    </Menu.Item>
    <Menu.Item key="3">
      <IconLocation style={iconStyle} />
      Guangzhou
    </Menu.Item>
  </Menu>
);

export default () => {
  return (
    <div className="dropdown-demo">
      <Dropdown droplist={dropList} trigger="click" position="bl">
        <Button type="text">
          Click me <IconDown />
        </Button>
      </Dropdown>
    </div>
  );
}
