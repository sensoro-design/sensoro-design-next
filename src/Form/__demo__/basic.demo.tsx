/**
 * title: 基础用法
 * desc: 非受控模式的用法。
 */
import { Form, Input, Button, Checkbox } from '@sensoro-design/react';

const FormItem = Form.Item;

export default () => {
  return (
    <Form style={{ width: 600 }}>
      <FormItem label="Username">
        <Input placeholder="please enter your username..." />
      </FormItem>
      <FormItem label="Post">
        <Input placeholder="please enter your post..." />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Checkbox>I have read the manual</Checkbox>
      </FormItem>
      <FormItem
        wrapperCol={{
          offset: 5,
        }}
      >
        <Button type="primary">Submit</Button>
      </FormItem>
    </Form>
  )
}
