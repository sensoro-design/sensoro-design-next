
/**
 * title: 触发事件
 * desc: 通过 `Menu.onClickMenuItem` 来为菜单指定点击菜单项时触发的回调函数。
 */
import { Dropdown, Menu, Button, Message } from '@sensoro-design/react';
import DownOutlined from '@sensoro-design/icons/DownOutlined';

const dropList = (
  <Menu onClickMenuItem={(key) => Message.info(`You clicked ${key}`)}>
    <Menu.Item key="Beijing">Beijing</Menu.Item>
    <Menu.Item key="Shanghai">Shanghai</Menu.Item>
    <Menu.Item key="Guangzhou">Guangzhou</Menu.Item>
  </Menu>
);

export default () => {
  return (
    <div className="dropdown-demo">
      <Dropdown droplist={dropList} position="bl" triggerProps={{ autoAlignPopupWidth: true }}>
        <Button type="text">
          Hover me and click an item <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}
