/**
 * title: 信息预览抽屉
 * desc: 需要快速预览对象概要时使用，点击遮罩区关闭。
 */
import { useState } from 'react';
import { Drawer, Button, Divider, Link, Descriptions } from '@sensoro-design/react';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          setVisible(true);
        }}
        type="primary"
      >
        Open Drawer
      </Button>
      <Drawer
        width={350}
        title={<span>User Information </span>}
        visible={visible}
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
        footer={null}
      >
        <Descriptions
          colon=''
          title='Personal Information'
          column={1}
          labelStyle={{ width: 100 }}
          data={[
            { label: 'Name', value: 'Orwell' },
            { label: 'Date of birth', value: '1995.01.01' },
            { label: 'City', value: 'Beijing' },
            { label: 'To work', value: '2017.07' },
          ]}
        />
        <Divider />
        <Descriptions
          colon=''
          title='Contact Information'
          column={1}
          labelStyle={{ width: 100 }}
          data={[
            { label: 'Telephone', value: '+86 136-6333-2888' },
            { label: 'Email', value: '123456789@163.com' },
            { label: 'Website', value: <Link to="/">https://123456789/design.com/</Link> },
          ]}
        />
      </Drawer>
    </div>
  );
}
