/**
 * title: 表单控件嵌套
 * desc: `Form.Item` 可以互相嵌套。
 */
import { useRef } from 'react';
import { Form, Input, Button, Grid, Select, Tooltip } from '@sensoro-design/react';
import ExclamationCircleFilled from '@sensoro-design/icons/ExclamationCircleFilled';

export default () => {
  const formRef = useRef();

  return (
    <div>
      <Form
        ref={formRef}
        style={{ maxWidth: 500 }}
        initialValues={{
          city: 'Beijing'
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        onValuesChange={(_, values) => {
          console.log(values);
        }}
      >
        <Form.Item label='User' required style={{ marginBottom: 0 }}>
          <Grid.Row gutter={8}>
            <Grid.Col span={12}>
              <Form.Item field='name' rules={[{ required: true, message: 'name is required' }]}>
                <Input placeholder='please enter you username' />
              </Form.Item>
            </Grid.Col>
            <Grid.Col span={12}>
              <Form.Item field='age' rules={[{ required: true, message: 'age is required' }]}>
                <Input placeholder='please enter your age' />
              </Form.Item>
            </Grid.Col>
          </Grid.Row>
        </Form.Item>
        <Form.Item label="Gender" required>
          <Grid.Row align="center">
            <Form.Item field="gender" noStyle={{showErrorTip: true}} rules={[{ required: true, message: 'name is required' }]}>
              <Select options={['male', 'female', 'other']} placeholder="please enter you gender" style={{ flex: 1 }}/>
            </Form.Item>
              <Tooltip content="必须填写哦">
                <ExclamationCircleFilled style={{ marginLeft: 8, color: 'rgb(var(--arcoblue-6))' }}/>
              </Tooltip>
          </Grid.Row>
        </Form.Item>
        <Form.Item label="Province" field="province" rules={[{ required: true, message: 'province is required' }]}>
          <Select allowClear placeholder="please select" options={['Beijing', 'Shanghai']}></Select>
        </Form.Item>
        <Form.Item noStyle shouldUpdate>
          {(values) => {
            return values.province ? (
              <Form.Item field="city" key="city" label="City" >
                <Select allowClear placeholder="please select" options={[values.province]}></Select>
              </Form.Item>
            ) : null;
          }}
        </Form.Item>
        <Form.Item label=" ">
          <Button type="primary" htmlType="submit" style={{ marginRight: 24 }}>
            Submit
          </Button>
          <Button
            onClick={() => {
              formRef.current.resetFields();
            }}
          >
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
