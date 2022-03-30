/**
 * title: 自定义图标
 * desc: 可以在内容中使用自定义图标
 */
import { Breadcrumb, Space } from '@sensoro-design/react';
import HomeOutlined from '@sensoro-design/icons/HomeOutlined';

const BreadcrumbItem = Breadcrumb.Item;

export default () => {
  return (
    <Space size={40}>
      <Breadcrumb>
        <BreadcrumbItem>
          <HomeOutlined/>
        </BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb style={{ fontSize: 12 }}>
        <BreadcrumbItem>
          <HomeOutlined/>
        </BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
    </Space>
  )
}
