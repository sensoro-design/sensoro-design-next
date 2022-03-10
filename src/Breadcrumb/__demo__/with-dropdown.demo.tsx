
/**
 * title: 带有下拉菜单
 * desc: 通过 `droplist` 或者 `routes` 来指定下拉菜单。
 */
import { Breadcrumb, Menu } from '@sensoro-design/react';

const BreadcrumbItem = Breadcrumb.Item;

const menu = (
  <Menu>
    <Menu.Item>Data</Menu.Item>
    <Menu.Item>Users</Menu.Item>
    <Menu.Item>Permission</Menu.Item>
  </Menu>
);

const routes = [
  {
    path: '/',
    breadcrumbName: 'Home',
  },
  {
    path: '/Channel',
    breadcrumbName: 'Channel',
    children: [
      {
        path: '/users',
        breadcrumbName: 'Users',
      },
      {
        path: '/permission',
        breadcrumbName: 'Permission',
      },
    ],
  },
  {
    path: '/news',
    breadcrumbName: 'News',
  },
];

export default () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem droplist={menu}>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
      <br />
      <Breadcrumb style={{ marginTop: 20 }} routes={routes} />
    </div>
  )
}
