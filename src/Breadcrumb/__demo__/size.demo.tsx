
/**
 * title: 自定义尺寸
 * desc: 通过指定样式来自定义各种面包屑的尺寸。
 */
import { Breadcrumb, Space } from '@sensoro-design/react';

const BreadcrumbItem = Breadcrumb.Item;

export default () => {
  return (
    <Space size={40}>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb style={{ fontSize: 12 }}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
    </Space>
  )
}
