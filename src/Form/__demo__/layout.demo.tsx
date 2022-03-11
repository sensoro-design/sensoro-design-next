
/**
 * title: 表单布局
 * desc: `Form` 支持三种排列方式：
 */
import React from 'react';
import { Form, Input, Checkbox, Button, Radio } from '@sensoro-design/react';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

export default () => {
  const [layout, setLayout] = React.useState('horizontal')
  return (
    <Form
      style={layout === 'inline' ? { width: '100%' } : { maxWidth: 600 }}
      layout={layout}
    >
      <FormItem label="Layout" >
        <RadioGroup
          onChange={setLayout}
          type="button"
          name="layout"
          value={layout}
        >
          <Radio value="horizontal">horizontal</Radio>
          <Radio value="vertical">vertical</Radio>
          <Radio value="inline">inline</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="Username" field="username" rules={[{required: true}]}>
        <Input style={{ width: 270 }} placeholder="please enter your name" />
      </FormItem>
      <FormItem label="Post">
        <Input style={{ width: 270 }} placeholder="please enter your post" />
      </FormItem>
      <FormItem wrapperCol={layout === 'horizontal' ? { offset: 5 } : {}} >
        <Checkbox>I have read the manual</Checkbox>
      </FormItem>
      <FormItem wrapperCol={layout === 'horizontal' ? { offset: 5 } : {}} >
        <Button type="primary" htmlType="submit">Submit</Button>
      </FormItem>
    </Form>
  );
}
