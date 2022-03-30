/**
 * title: 按钮下拉框
 * desc: 使用 `<Dropdown.Button>` 可以使用右边是额外的相关功能菜单的按钮。
 */
import React from 'react';
import { Dropdown, Menu, Tooltip, Space } from '@sensoro-design/react';
import DownOutlined from '@sensoro-design/icons/DownOutlined';

const dropList = (
  <Menu>
    <Menu.Item key="1">Save now</Menu.Item>
    <Menu.Item key="2">Save and Publish</Menu.Item>
  </Menu>
);

export default () => {
  return (
    <Space size="large" className="dropdown-demo">
      <Dropdown.Button type="secondary" droplist={dropList}>
        Publish
      </Dropdown.Button>
      <Dropdown.Button type="secondary" droplist={dropList} disabled>
        Disabled
      </Dropdown.Button>
      <Dropdown.Button
        type="primary"
        droplist={dropList}
        icon={<DownOutlined />}
      >
        Publish
      </Dropdown.Button>
      <Dropdown.Button
        type="primary"
        droplist={dropList}
        buttonsRender={([leftButton, rightButton]) => [
          <Tooltip content="Tooltip">{leftButton}</Tooltip>,
          React.cloneElement(rightButton, { loading: true }),
        ]}
      >
        With Tooltip
      </Dropdown.Button>
    </Space>
  )
}
