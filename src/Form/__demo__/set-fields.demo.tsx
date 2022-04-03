/**
 * title: 控制表单项错误状态
 * desc: 通过 `setFields` 方法的 `error` 参数，可以在外部控制表单项的错误状态。
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
            form.setFields({
                age: {
                  value: 200,
                  error: {
                    message: 'Maximum is 200',
                  },
                },
              });
          }}
        >
          Set Error Age
        </Button>
      </FormItem>
    </Form>
  );
}
