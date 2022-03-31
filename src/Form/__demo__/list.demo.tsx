/**
 * title: 动态增减表单项
 * desc: 通过`Form.List`管理数组类型的表单结构。
 */
import { Form, Input, Button, Grid } from '@sensoro-design/react';

import DeleteOutlined from '@sensoro-design/icons/DeleteOutlined';
import ArrowDownOutlined from '@sensoro-design/icons/ArrowDownOutlined';
import ArrowUpOutlined from '@sensoro-design/icons/ArrowUpOutlined';

export default () => {
  const [form] = Form.useForm();

  return (
  <div>

    <Form
      form={form}
      style={{ width: 600 }}
      initialValues={{
        users: ['Username'],
        posts: ['post1']
      }}
      onSubmit={(v) => {
        console.log(v);
      }}
      onValuesChange={(_, v) => {
        console.log(_, v);
      }}
    >
      <Form.Item label="Username" field="username" style={{width: 370}} >
        <Input />
      </Form.Item>
      <Form.List field="posts">
        {(fields, { add, remove, move }) => {
          return (
            <div>
              {fields.map((item, index) => {
                return (
                  <Grid.Row key={item.key} >
                    <Form.Item
                      field={item.field}
                      label={'Post-' + index}
                      style={{width: 370}}
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>

                    <Button icon={<DeleteOutlined />} shape="circle" status="danger" style={{ margin: '0 20px' }} onClick={() => remove(index)}>
                    </Button>
                    <Button shape="circle" onClick={() => move(index, index > 0 ?  index - 1 : index + 1)}>
                      {index > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                    </Button>
                  </Grid.Row>
                );
              })}
              <div>
                <Button
                  style={{ marginRight: 20 }}
                  onClick={() => {
                    add();
                  }}
                >
                  Add post
                </Button>
                <Button
                  onClick={() => {
                    add('new 2', 1);
                  }}
                >
                  Add post to the second slot
                </Button>
              </div>
            </div>
          );
        }}
      </Form.List>
      <Form.Item style={{marginTop: 20}}>
        <Button type="primary" htmlType="submit" style={{ marginRight: 20 }}>
          Submit
        </Button>
        <Button
          style={{ marginRight: 20 }}
          onClick={() => {
            form.resetFields();
          }}
        >
          Reset
        </Button>
        <Button
          status="danger"
          onClick={() => {
            form.setFields({
              'posts[0]': {
                error: {
                  message: 'error'
                }
              }
            })
          }}>
          Set `Post-0` to error state
        </Button>
      </Form.Item>
    </Form>
  </div>
  )
}
