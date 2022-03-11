/**
 * title: 表单异步校验
 * desc:
 * 在 `rules` 中自定义 `validator` 方法，并返回一个 `Promise` 即可实现表单的异步校验。
 * p.s: 如果用 `lodash.debounce` 不生效，建议使用 `debounce.promise` ，它返回的是一个 `promise`。
 */
import { Form, Input, Button, Message, InputNumber } from '@sensoro-design/react';

const FormItem = Form.Item;

export default () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      style={{ width: 600 }}
    >
      <FormItem
        label="Username"
        field="name"
        required
        rules={[{
          validator: async (value, callback) => {
            return new Promise((resolve) => {
              if (value !== "admin") {
                setTimeout(() => {
                  callback("Name must be admin");
                  resolve();
                }, 1000);
              } else {
                resolve();
              }
            })
          }
        }]}
      >
        <Input placeholder='please enter your username' />
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
      </FormItem>
    </Form>
  );
}
