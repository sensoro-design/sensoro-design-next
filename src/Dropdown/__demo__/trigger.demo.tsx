/**
 * title: 触发方式
 * desc: 通过 `trigger` 指定触发方式。
 */
import { Dropdown, Menu, Button, Space } from '@sensoro-design/react';

import DownOutlined from '@sensoro-design/icons/DownOutlined';

const dropList = (
  <Menu>
    <Menu.Item key="1">Beijing</Menu.Item>
    <Menu.Item key="2">Shanghai</Menu.Item>
    <Menu.Item key="3">Guangzhou</Menu.Item>
  </Menu>
);

export default () => {
  return (
    <Space size="large" className="dropdown-demo">
      <Dropdown droplist={dropList} position="br">
        <Button type="text">
          Hover
          <DownOutlined />
        </Button>
      </Dropdown>
      <Dropdown droplist={dropList} trigger="click" position="br">
        <Button type="text">
          Click
          <DownOutlined />
        </Button>
      </Dropdown>
    </Space>
  );
}
