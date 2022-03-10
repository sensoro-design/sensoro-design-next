
/**
 * title: 基础用法
 * desc: 适用于广泛基本用法。分隔方式分为图标分隔及斜线分隔两种方式，可根据不同场景使用。
 */
import { Breadcrumb } from '@sensoro-design/react';

const BreadcrumbItem = Breadcrumb.Item;

export default () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem><a href="#">Channel</a></BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}
