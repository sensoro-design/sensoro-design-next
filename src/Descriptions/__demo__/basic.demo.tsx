/**
 * title: 基本用法
 * desc: 简单地成组展示多个只读字段，一般用于详情页的信息。
 */
import { Descriptions } from '@sensoro-design/react';

const data = [{
  label: 'Name',
  value: 'Socrates',
}, {
  label: 'Mobile',
  value: '123-1234-1234',
}, {
  label: 'Residence',
  value: 'Beijing'
}, {
  label: 'Hometown',
  value: 'Beijing',
}, {
  label: 'Address',
  value: 'Yingdu Building, Zhichun Road, Beijing'
}];

export default () => {
  return (
    <Descriptions colon=" :" layout="inline-horizontal" title="User Info" data={data} />
  )
}
