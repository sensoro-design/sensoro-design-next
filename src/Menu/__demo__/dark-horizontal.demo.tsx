
/**
 * title: 深色模式导航
 * desc: 通过 `theme` 指定主题，分为 `light` 和 `dark` 两种。
 */
import { Menu } from '@sensoro-design/react';

const MenuItem = Menu.Item;

export default () => {
  return (
    <div className="menu-demo">
      <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['1']}>
        <MenuItem key="0" style={{ padding: 0, marginRight: 38 }} disabled>
          <div
            style={{
              width: 80,
              height: 30,
              background: 'var(--color-fill-3)',
              cursor: 'text',
            }}
          />
        </MenuItem>
        <MenuItem key="1">Home</MenuItem>
        <MenuItem key="2">Solution</MenuItem>
        <MenuItem key="3">Cloud Service</MenuItem>
        <MenuItem key="4">Cooperation</MenuItem>
      </Menu>
    </div>
  );
}
