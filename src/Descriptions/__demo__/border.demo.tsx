/**
 * title: 带边框展示
 * desc: 带边框和背景颜色的列表。
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
  label: 'Date of Birth',
  value: '2020-05-15',
  span: 2,
}, {
  label: 'Address',
  value: 'Yingdu Building, Zhichun Road, Beijing'
}];

export default () => {
  return (
    <Descriptions border data={data} />
  )
}
