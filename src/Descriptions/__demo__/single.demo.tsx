/**
 * title: 单列样式
 * desc: 单列的描述列表样式。
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
    <div>
      <Descriptions
        column={1}
        title="User Info"
        data={data}
        style={{ marginBottom: 20 }}
        labelStyle={{ paddingRight: 36 }}
      />
      <Descriptions
        column={1}
        title="User Info"
        data={data}
        labelStyle={{ textAlign: 'right', paddingRight: 36 }}
      />
    </div>
  )
}
