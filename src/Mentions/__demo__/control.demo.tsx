/**
 * title: 受控模式
 * desc: `Mentions` 在 `Form` 中的使用。
 */
import { Form, Input, Button, Mentions } from '@sensoro-design/react';

const FormItem = Form.Item;

export default () => {
  const onValuesChange = (changeValue, values) => {
    console.log('onValuesChange: ', changeValue, values);
  };

  return (
    <Form
      style={{ width: 360 }}
      initialValues={{
        task: 'Component usage',
      }}
      onValuesChange={onValuesChange}
    >
      <FormItem label="Task" field="task" rules={[{ required: true, message: 'Task is required' }]}>
        <Input />
      </FormItem>
      <FormItem label="Name" field="name" rules={[{ required: true, message: 'Name is required' }]}>
        <Mentions
          placeholder="You can use @ Plato to mention Platon"
          options={['Jack', 'Steven', 'Platon', 'Mary']}
          alignTextarea={false}
          rows={2}
        />
      </FormItem>
      <FormItem
        wrapperCol={{
          offset: 5,
        }}
      >
        <Button style={{ marginRight: 12 }} type="primary">
          Submit
        </Button>
        <Button>Reset</Button>
      </FormItem>
    </Form>
  );
}
