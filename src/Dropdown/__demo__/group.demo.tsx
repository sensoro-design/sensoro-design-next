/**
 * title: 分组菜单
 * desc: 通过 `Menu.ItemGroup` 使用分组。
 */
import { Dropdown, Menu, Button } from '@sensoro-design/react';
import { IconDown } from '@sensoro-design/react/icon';

const dropList = (
  <Menu>
    <Menu.ItemGroup title="Beijing">
      <Menu.Item>Haidian</Menu.Item>
      <Menu.Item>Chaoyang</Menu.Item>
      <Menu.Item>Shunyi</Menu.Item>
    </Menu.ItemGroup>
    <Menu.ItemGroup title="Hebei Province">
      <Menu.Item>Tangshan</Menu.Item>
      <Menu.Item>Baoding</Menu.Item>
    </Menu.ItemGroup>
  </Menu>
);

export default () => {
  return (
    <div className="dropdown-demo">
      <Dropdown
        trigger="click"
        position="bl"
        droplist={dropList}
        triggerProps={{ autoAlignPopupWidth: true }}
      >
        <Button type="text">
          Group Menu <IconDown />
        </Button>
      </Dropdown>
    </div>
  );
}
