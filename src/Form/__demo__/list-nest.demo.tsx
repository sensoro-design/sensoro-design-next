/**
 * title: 动态增减嵌套类型的表单项
 * desc: 通过`Form.List`管理数组类型的表单结构。可以通过对 `field` 进行一些处理，实现动态增减复杂类型的表单项
 */
import { useRef } from 'react';
import { Form, Space, Input, Button } from '@sensoro-design/react';
import DeleteOutlined from '@sensoro-design/icons/DeleteOutlined';

export default () => {
  const formRef = useRef();

  return (
  <div>

    <Form
      ref={formRef}
      style={{ width: 600 }}
      initialValues={{
        users: [{ username: 'aaa', address: 'bbb' }]
      }}
      onValuesChange={(_, v) => {
        console.log(_, v);
      }}
    >
      <Form.List field="users">
        {(fields, { add, remove, move }) => {
          return (
            <div>
              {fields.map((item, index) => {
                return (
                  <div key={item.key} >
                    <Form.Item label={'User ' + index}>
                      <Space>
                        <Form.Item
                          field={item.field + '.username'}
                          rules={[{ required: true }]}
                          noStyle
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          field={item.field + '.address'}
                          rules={[{ required: true }]}
                          noStyle
                        >
                          <Input />
                        </Form.Item>
                        <Button icon={<DeleteOutlined />} shape="circle" status="danger" onClick={() => remove(index)}>
                        </Button>
                      </Space>
                    </Form.Item>
                  </div>
                );
              })}
              <Form.Item wrapperCol={{offset: 5}}>
                <Button
                  onClick={() => {
                    add();
                  }}
                >
                  Add User
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>
    </Form>
  </div>
  )
}
