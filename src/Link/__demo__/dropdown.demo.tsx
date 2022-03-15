/**
 * title: 配合dropdown使用
 * desc: 配合下拉菜单实现带下拉选择的链接。
 */
import { Link, Dropdown, Menu, Space } from '@sensoro-design/react';
import { IconDown } from '@sensoro-design/react/icon';

const Droplist = (
  <Menu>
    <Menu.Item key='1'>Beijing</Menu.Item>
    <Menu.Item key='2'>Shanghai</Menu.Item>
    <Menu.Item key='3'>Guangzhou</Menu.Item>
    <Menu.Item disabled key='4'> <Link disabled>Shenzhen</Link> </Menu.Item>
  </Menu>
);

export default () => {
  return (
    <Space size="large">
      <Dropdown droplist={Droplist} position='bl'>
        <Link>
          City
          <IconDown style={{ fontSize: 12, marginLeft: 6 }} />
        </Link>
      </Dropdown>

      <Dropdown droplist={Droplist} position='bl' triggerProps={{ disabled: true }}>
        <Link disabled>
          City
          <IconDown style={{ fontSize: 12, marginLeft: 6 }} />
        </Link>
      </Dropdown>
    </Space>
  )
}
