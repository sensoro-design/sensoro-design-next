/**
 * title: 表单方法调用
 * desc: 在函数式组件里可以使用`Form.useForm`获取表单实例。通过该实例调用表单方法，例如设置表单字段值，重置表单等。
 * 在类组件里可以使用`ref` 获取表单实例。
 */
import { Form, Input, Button, InputNumber } from '@sensoro-design/react';

const FormItem = Form.Item;

export default () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      style={{ width: 600 }}
      initialValues={{ name: 'admin' }}
      onValuesChange={(v, vs) => {
        console.log(v, vs);
      }}
      onSubmit={(v) => {
        console.log(v);
      }}
    >
      <FormItem label="Username" field="name" rules={[{ required: true }]}>
        <Input placeholder='please enter your username' />
      </FormItem>
      <FormItem
        label='Age'
        field="age"
        rules={[{ required: true, type: 'number', min: 0, max: 99 }]}
      >
        <InputNumber placeholder='please enter your age' />
      </FormItem>
      <FormItem
        wrapperCol={{
          offset: 5,
        }}
      >
        <Button type="primary" htmlType="submit" style={{ marginRight: 24 }}>
          Submit
        </Button>
        <Button
          style={{ marginRight: 24 }}
          onClick={() => {
            form.resetFields();
          }}
        >
          Reset
        </Button>
        <Button
          type="text"
          onClick={() => {
            form.setFieldsValue({ name: 'admin', age: 11 });
          }}
        >
          Fill Form
        </Button>
      </FormItem>
    </Form>
  );
}
