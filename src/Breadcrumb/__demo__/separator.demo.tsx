
/**
 * title: 自定义分隔符
 * desc: 自定义分隔符。
 */
import { Breadcrumb, Space } from '@sensoro-design/react';

import RightOutlined from '@sensoro-design/icons/RightOutlined';

const BreadcrumbItem = Breadcrumb.Item;

export default () => {
  return (
    <Space size={40}>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb separator={<RightOutlined />}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb separator={<span>・</span>}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
    </Space>
  )
}
