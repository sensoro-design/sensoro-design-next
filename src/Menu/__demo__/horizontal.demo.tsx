
/**
 * title: 顶部导航菜单
 * desc: 设置 `mode` 为 `horizontal` 时，使用水平菜单。
 */
import { Menu } from '@sensoro-design/react';

const MenuItem = Menu.Item;

export default () => {
  return (
    <div className="menu-demo">
      <Menu mode="horizontal" defaultSelectedKeys={['1']}>
        <MenuItem key="0" style={{ padding: 0, marginRight: 38 }} disabled>
          <div
            style={{
              width: 80,
              height: 30,
              borderRadius: 2,
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
