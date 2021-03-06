/**
 * title: 基础用法
 * desc: 基础下拉菜单。
 */
import { Dropdown, Menu, Button, Space } from '@sensoro-design/react';
import DownOutlined from '@sensoro-design/icons/DownOutlined';

import './styles.less';

const dropList = (
  <Menu>
    <Menu.Item key="1">Beijing</Menu.Item>
    <Menu.Item key="2">Shanghai</Menu.Item>
    <Menu.Item key="3">Guangzhou</Menu.Item>
  </Menu>
);

export default() => {
  return (
    <Space className="dropdown-demo">
      <Dropdown droplist={dropList} position="bl">
        <Button type="text">
          Hover me <DownOutlined />
        </Button>
      </Dropdown>

      <Dropdown droplist={dropList} position="bl" disabled>
        <Button type="text">
          Hover me <DownOutlined />
        </Button>
      </Dropdown>
    </Space>
  );
}
