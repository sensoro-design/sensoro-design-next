/**
 * title: 显示省略
 * desc: 通过 `maxCount` 来指定最多渲染的面包屑数量，超出的部分将显示为省略号。
 */
import { Breadcrumb } from '@sensoro-design/react';

const BreadcrumbItem = Breadcrumb.Item;

export default () => {
  return (
    <Breadcrumb maxCount={3}>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Sub Home</BreadcrumbItem>
      <BreadcrumbItem>All Channel</BreadcrumbItem>
      <BreadcrumbItem>Channel</BreadcrumbItem>
      <BreadcrumbItem>News</BreadcrumbItem>
    </Breadcrumb>
  )
}
