/**
 * title: 滚动到指定表单字段
 * desc:
 */
import { useRef } from 'react';
import { Form, Input, Button } from '@sensoro-design/react';

export default () => {
  const formRef = useRef();

  return (
  <div>
    <Button
      type="primary"
      onClick={() => {
        formRef.current && formRef.current.scrollToField('users[9]')
      }}
    >
      Scroll to the last field
    </Button>
    <Form
      ref={formRef}
      style={{ maxWidth: 500, marginTop: 20, paddingRight: 16, height: 300, overflow: 'auto' }}
      initialValues={{
        users: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      }}
    >
      <Form.List field='users'>
        {(fields, { add, remove }) => {
          return fields.map((field, index) => {
              return (
                <Form.Item label={'user' + index} key={field.key} field={field.field}>
                  <Input placeholder='user' />
                </Form.Item>
              );
            })
        }}
      </Form.List>
    </Form>
  </div>
  )
}
