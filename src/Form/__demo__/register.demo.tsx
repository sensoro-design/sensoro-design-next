/**
 * title: 注册表单
 * desc: 填写必须的信息以注册新用户
 */
import { Form, Input, Button, Message } from '@sensoro-design/react';

const FormItem = Form.Item;

export default () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      style={{ width: 320 }}
      wrapperCol={{
        span: 24
      }}
      onValuesChange={(v, vs) => {
        console.log(v, vs);
      }}
      onSubmit={(v) => {
        console.log(v);
        Message.success('success');
      }}
    >
      <FormItem field="name" rules={[{ required: true, message: 'username is required' }]}>
        <Input placeholder='please enter your username' />
      </FormItem>
      <FormItem
        field="phone"
        rules={[{ required: true, message: 'phone number is required' }]}
      >
        <Input placeholder='please enter your phone number' />
      </FormItem>
      <FormItem
      >
        <Button type="primary" htmlType="submit"  long>
          Register
        </Button>
      </FormItem>
    </Form>
  );
}
