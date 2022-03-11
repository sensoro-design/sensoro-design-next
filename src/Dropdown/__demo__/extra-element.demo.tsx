/**
 * title: 其他元素
 * desc: 设置 Menu 禁用项和插入分割线。
 */
import { Dropdown, Menu, Button, Divider } from '@sensoro-design/react';
import { IconDown } from '@sensoro-design/react/icon';

const dropList = (
  <Menu>
    <Menu.Item key="1">Beijing</Menu.Item>
    <Menu.Item key="2">Shanghai</Menu.Item>
    <Menu.Item key="3">Guangzhou</Menu.Item>
    <Divider style={{ margin: '4px 0' }} />
    <Menu.Item key="4" disabled>
      Shenzhen
    </Menu.Item>
  </Menu>
);

export default () => {
  return (
    <div className="dropdown-demo">
      <Dropdown droplist={dropList} position="br">
        <Button type="text">
          Hover<IconDown />
        </Button>
      </Dropdown>
    </div>
  );
}
