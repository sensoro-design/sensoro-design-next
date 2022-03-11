/**
 * title: 复杂类型的数据
 * desc: 通过设置 `field` 为 `a.b.c` 格式，可以得到 `{a:{b:{c: xx}}}`。
 */
import React from 'react';
import { Form, Input } from '@sensoro-design/react';

export default () => {
  const [values, setValues] = React.useState();

  return (
    <div>
      <Form
        style={{ maxWidth: 650 }}
        labelCol={{ span: 6 }}
        wrapperCol={{span: 18}}
        onValuesChange={(_, values) => {
          console.log(values);
          setValues(values);
        }}
      >
        <Form.Item label="Username" field="user.username" rules={[{ required: true }]}>
          <Input placeholder="please enter your username" />
        </Form.Item>
        <Form.Item label="Post" field="user.post" rules={[{ required: true }]}>
          <Input placeholder="please enter your post" />
        </Form.Item>

        <Form.Item label="Volunteers">
          <Form.Item
            label="Volunteer1"
            field="user.volunteers[0]"
            rules={[{ required: true }]}
          >
            <Input placeholder="please enter your post" />
          </Form.Item>

          <Form.Item
            label="Volunteer2"
            field="user.volunteers[1]"
            rules={[{ required: true }]}
          >
            <Input placeholder="please enter your post" />
          </Form.Item>
        </Form.Item>
      </Form>
      <div style={{color: 'var(--color-text-2)'}}>
        <p>Form data:</p>
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </div>
    </div>
  );
}
